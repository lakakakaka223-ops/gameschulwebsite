/* ===== Mehrspieler: Modus-Auswahl und Lobbys (WebRTC über PeerJS, kein eigener Server nötig) ===== */
var PPNet=null,NET=null;
var MPERR={'unavailable-id':'Dieser Code ist schon vergeben.','peer-unavailable':'Keine Lobby mit diesem Code gefunden.','network':'Netzwerkfehler. Bist du online?','server-error':'Der Vermittlungsserver ist nicht erreichbar.','socket-error':'Der Vermittlungsserver ist nicht erreichbar.','socket-closed':'Die Verbindung zum Vermittlungsserver ist abgebrochen.','browser-incompatible':'Dein Browser unterstützt keine Direktverbindungen (WebRTC).'};
function pname(){var n=jget('pp-name','');if(!n){n='Spieler'+(10+Math.floor(Math.random()*90));jset('pp-name',n)}return n}
function mod(h){$('#mbox').innerHTML=h;$('#modal').classList.add('open')}
function modClose(){$('#modal').classList.remove('open')}
function mErr(t,ok){var e=$('#mErr');if(e){e.textContent=t;e.className=ok?'ok':'bad'}}
function peerLib(ok,fail){
  if(window.Peer)return ok();
  var s=document.createElement('script');s.src='lib/peerjs.min.js';
  s.onload=ok;
  s.onerror=function(){var s2=document.createElement('script');s2.src='https://cdn.jsdelivr.net/npm/peerjs@1.5.4/dist/peerjs.min.js';s2.onload=ok;s2.onerror=fail;document.head.appendChild(s2)};
  document.head.appendChild(s);
}
function gameById(id){return catalog.find(function(g){return g.id===id})}

/* ---- Modus wählen ---- */
function openMode(g){
  mod('<div class="mem">'+g.emoji+'</div><h2>'+g.name+'</h2><p>'+g.desc+'</p><div class="mrow"><button class="bigbtn" id="mSolo">👤 Einzelspieler<small>gegen Bots</small></button><button class="bigbtn alt" id="mMulti">👥 Mehrspieler<small>mit Freunden, Lobby-Code</small></button></div><button class="ghost" id="mX">Abbrechen</button>');
  $('#mSolo').onclick=function(){startSolo(g)};
  $('#mMulti').onclick=function(){openMulti(g)};
  $('#mX').onclick=modClose;
}
function startSolo(g){
  var n=g.mp.solo||2,pl=[{name:pname()}];
  for(var i=1;i<n;i++)pl.push({name:'Bot '+i,bot:1});
  PPNet={mode:'single',host:true,me:0,players:pl,_hs:null,_cl:null,toHost:function(m){if(this._hs)this._hs(m,0)},toAll:function(){},onHost:function(f){this._hs=f},onClient:function(f){this._cl=f}};
  modClose();launch(g.id,true);
}

/* ---- Lobby erstellen / beitreten ---- */
function openMulti(g,code){
  mod('<h2>'+(g?g.emoji+' '+g.name:'🔗 Lobby beitreten')+'</h2><label class="lbl">Dein Name</label><input class="inp" id="mName" maxlength="14" value="'+pname()+'">'+
    (g?'<div class="mrow"><button class="bigbtn" id="mCreate">➕ Lobby erstellen</button></div><div class="or">oder</div>':'')+
    '<label class="lbl">Lobby-Code (5 Ziffern)</label><div class="mrow"><input class="inp code" id="mCode" maxlength="5" inputmode="numeric" placeholder="12345" value="'+(code||'')+'"><button class="bigbtn alt" id="mJoin">Beitreten</button></div><div id="mErr"></div><button class="ghost" id="mX">Abbrechen</button>');
  var nm=function(){var v=$('#mName').value.trim().slice(0,14)||pname();jset('pp-name',v)};
  if(g)$('#mCreate').onclick=function(){nm();createLobby(g,0)};
  $('#mJoin').onclick=function(){nm();joinLobby($('#mCode').value.trim())};
  $('#mCode').oninput=function(){this.value=this.value.replace(/\D/g,'').slice(0,5)};
  $('#mX').onclick=function(){leaveNet();modClose()};
}
function createLobby(g,n){
  mErr('Erstelle Lobby …',1);
  peerLib(function(){
    var code=String(10000+Math.floor(Math.random()*90000)),p=new Peer('ppxl-'+code),done=0;
    var to=setTimeout(function(){if(!done){done=1;mErr('Der Vermittlungsserver antwortet nicht. Prüfe dein Netzwerk.');try{p.destroy()}catch(e){}}},15000);
    p.on('error',function(e){
      if(done)return;clearTimeout(to);
      if(e.type=='unavailable-id'&&n<6){done=1;try{p.destroy()}catch(x){}createLobby(g,n+1)}
      else{done=1;mErr(MPERR[e.type]||('Fehler: '+e.type))}
    });
    p.on('open',function(){
      if(done)return;done=1;clearTimeout(to);
      NET={peer:p,code:code,isHost:true,game:g,players:[{name:pname(),conn:null}],started:0,ready:{}};
      p.on('connection',onGuest);renderRoom();
    });
  },function(){mErr('Die Mehrspieler-Bibliothek konnte nicht geladen werden.')});
}
function joinLobby(code){
  if(!/^\d{5}$/.test(code)){mErr('Bitte einen 5-stelligen Code eingeben.');return}
  mErr('Verbinde …',1);
  peerLib(function(){
    var p=new Peer(),done=0;
    var to=setTimeout(function(){if(!done){done=1;mErr('Keine Verbindung möglich. Falscher Code oder dein Netzwerk blockiert Direktverbindungen.');try{p.destroy()}catch(e){}}},15000);
    p.on('error',function(e){if(done)return;done=1;clearTimeout(to);mErr(MPERR[e.type]||('Fehler: '+e.type));try{p.destroy()}catch(x){}});
    p.on('open',function(){
      var c=p.connect('ppxl-'+code,{reliable:true,serialization:'json'});
      c.on('open',function(){if(done)return;done=1;clearTimeout(to);NET={peer:p,hostConn:c,code:code,isHost:false,started:0};c.send({k:'hello',name:pname()})});
      c.on('data',onHostMsg);
      c.on('close',function(){if(NET&&NET.hostConn===c)hostLeft()});
    });
  },function(){mErr('Die Mehrspieler-Bibliothek konnte nicht geladen werden.')});
}

/* ---- Host-Seite ---- */
function slotOf(c){for(var i=0;i<NET.players.length;i++)if(NET.players[i].conn===c)return i;return -1}
function names(){return NET.players.map(function(p){return p.name})}
function broadcastLobby(){
  var m={k:'lobby',game:NET.game.id,players:names(),min:NET.game.mp.min,max:NET.game.mp.max};
  NET.players.forEach(function(p){if(p.conn&&p.conn.open)p.conn.send(m)});renderRoom();
}
function onGuest(c){
  c.on('data',function(m){
    if(m.k=='hello'){
      if(!NET||NET.started||NET.players.length>=NET.game.mp.max){try{c.send({k:'full'})}catch(e){}setTimeout(function(){try{c.close()}catch(e){}},300);return}
      var nm=String(m.name||'Gast').slice(0,14),base=nm,k=2;
      while(names().indexOf(nm)>=0)nm=base+' '+(k++);
      NET.players.push({name:nm,conn:c});broadcastLobby();
    }else if(m.k=='ready'){NET.ready[slotOf(c)]=1;checkReady()}
    else if(m.k=='g'&&PPNet&&PPNet._hs){var s=slotOf(c);if(s>=0)PPNet._hs(m.m,s)}
  });
  var gone=function(){dropGuest(c)};c.on('close',gone);c.on('error',gone);
}
function dropGuest(c){
  if(!NET)return;var i=slotOf(c);if(i<0)return;
  if(NET.started){NET.players[i].conn=null;if(PPNet&&PPNet.players[i])PPNet.players[i].bot=1;NET.ready[i]=1;checkReady()}
  else{NET.players.splice(i,1);broadcastLobby()}
}
function hostStart(){
  var g=NET.game,nm=names();NET.started=1;NET.ready={0:1};
  NET.players.forEach(function(p,i){if(p.conn)p.conn.send({k:'start',game:g.id,players:nm,me:i})});
  mod('<h2>Starte …</h2><p>Warte, bis alle Spieler bereit sind.</p>');
  NET.launchT=setTimeout(function(){if(NET&&!NET.launched)launchHost()},7000);
  checkReady();
}
function checkReady(){
  if(!NET||!NET.started||NET.launched)return;
  for(var i=0;i<NET.players.length;i++)if(NET.players[i].conn&&!NET.ready[i])return;
  launchHost();
}
function launchHost(){if(NET.launched)return;NET.launched=1;clearTimeout(NET.launchT);beginGame(NET.game,names(),0,true)}

/* ---- Client-Seite ---- */
function onHostMsg(m){
  if(!NET)return;
  if(m.k=='lobby'){NET.lobby=m;NET.game=gameById(m.game);renderRoom()}
  else if(m.k=='start'){NET.started=1;beginGame(gameById(m.game),m.players,m.me,false)}
  else if(m.k=='g'){if(PPNet&&PPNet._cl)PPNet._cl(m.m)}
  else if(m.k=='full'){mErr('Die Lobby ist voll oder das Spiel läuft schon.');var p=NET.peer;NET=null;try{p.destroy()}catch(e){}}
}
function hostLeft(){
  var was=NET&&NET.started;NET=null;PPNet=null;
  if(was)closeGame();
  mod('<h2>Lobby beendet</h2><p>Der Host hat die Lobby verlassen.</p><button class="bigbtn" id="mOk">OK</button>');
  $('#mOk').onclick=modClose;
}

/* ---- Spielstart (beide Seiten) ---- */
function beginGame(g,nm,me,host){
  PPNet={mode:'multi',host:host,me:me,players:nm.map(function(n){return{name:n}}),_hs:null,_cl:null,
    toHost:function(m){if(this.host){if(this._hs)this._hs(m,this.me)}else if(NET&&NET.hostConn&&NET.hostConn.open)NET.hostConn.send({k:'g',m:m})},
    toAll:function(m){if(!this.host||!NET)return;NET.players.forEach(function(p){if(p.conn&&p.conn.open)p.conn.send({k:'g',m:m})})},
    onHost:function(f){this._hs=f},onClient:function(f){this._cl=f}};
  modClose();launch(g.id,true);
  if(!host){
    var n=0,t=setInterval(function(){
      n++;
      if(PPNet&&PPNet._cl&&NET&&NET.hostConn){clearInterval(t);if(NET.hostConn.open)NET.hostConn.send({k:'ready'})}
      else if(n>80||!NET)clearInterval(t);
    },150);
  }
}
function leaveNet(){
  var n=NET;NET=null;PPNet=null;
  if(n){try{if(n.hostConn)n.hostConn.close();if(n.peer)n.peer.destroy()}catch(e){}clearTimeout(n.launchT)}
}

/* ---- Lobby-Raum ---- */
function renderRoom(){
  if(!NET)return;
  var host=NET.isHost,g=NET.game,nm=host?names():(NET.lobby?NET.lobby.players:[pname()]);
  if(!g){return}
  var max=g.mp.max,min=g.mp.min,link=location.href.split('?')[0].split('#')[0]+'?join='+NET.code;
  var li=nm.map(function(n,i){return '<li>'+(i==0?'👑 ':'🎮 ')+n+(n===pname()?' <em>(du)</em>':'')+'</li>'}).join('');
  for(var k=nm.length;k<max;k++)li+='<li class="empty">wartet auf Spieler …</li>';
  mod('<h2>'+g.emoji+' '+g.name+'</h2><div class="lbl">Lobby-Code</div><div class="codebig" id="mCodeBig">'+NET.code+'</div><div class="mrow"><button class="ghost" id="mCopy">🔗 Link kopieren</button></div>'+
    '<div class="lbl">Spieler '+nm.length+' / '+max+'</div><ul class="plist">'+li+'</ul>'+
    (host?'<button class="bigbtn" id="mStart"'+(nm.length<min?' disabled':'')+'>▶ Spiel starten'+(nm.length<min?' <small>(mind. '+min+' Spieler)</small>':'')+'</button>':'<p class="muted">Warte, bis der Host das Spiel startet …</p>')+
    '<div id="mErr"></div><button class="ghost" id="mLeave">Lobby verlassen</button>');
  $('#mCopy').onclick=function(){try{navigator.clipboard.writeText(link);mErr('Link kopiert: '+link,1)}catch(e){mErr(link,1)}};
  $('#mLeave').onclick=function(){leaveNet();modClose()};
  if(host)$('#mStart').onclick=hostStart;
}

/* ---- Einstieg: Link ?join=12345 und Button ---- */
var PENDING_JOIN=(location.search.match(/[?&]join=(\d{5})/)||[])[1]||'';
function onUnlock(){if(PENDING_JOIN){var c=PENDING_JOIN;PENDING_JOIN='';openMulti(null,c)}}
var jb=document.getElementById('joinBtn');if(jb)jb.onclick=function(){openMulti(null)};
if(typeof __locked!=='undefined'&&!__locked)setTimeout(onUnlock,300);
