const catalog=[
{id:'snake',name:'Snake',cat:'Arcade',emoji:'🐍',desc:'Sammle Punkte und wachse.',colors:['#174d39','#1d8a55'],retro:true},
{id:'pong',name:'Pong',cat:'Arcade',emoji:'🏓',desc:'Halte den Ball im Spiel.',colors:['#183a55','#246b91'],retro:true},
{id:'breakout',name:'Brick Breaker',cat:'Arcade',emoji:'🧱',desc:'Zerstöre alle Blöcke.',colors:['#56305f','#a34d77'],retro:true},
{id:'memory',name:'Memory',cat:'Puzzle',emoji:'🧠',desc:'Finde alle Kartenpaare.',colors:['#514020','#a17b36'],retro:true},
{id:'2048',name:'2048',cat:'Puzzle',emoji:'🔢',desc:'Verbinde gleiche Zahlen.',colors:['#59432b','#a77b42'],retro:true},
{id:'tictactoe',name:'Tic Tac Toe',cat:'Puzzle',emoji:'⭕',desc:'Drei in eine Reihe.',colors:['#253d64','#436db0'],retro:true},
{id:'reaction',name:'Reaktionstest',cat:'Geschick',emoji:'⚡',desc:'Reagiere so schnell du kannst.',colors:['#4b294e','#8e4b8e'],retro:true},
{id:'clicker',name:'Stern-Klicker',cat:'Geschick',emoji:'⭐',desc:'Sammle Sterne in 20 Sekunden.',colors:['#51431d','#a98b32'],retro:true},
{id:'d-tunnel',name:'Neon-Tunnel',cat:'3D',tags:['3D', 'Action'],emoji:'🌀',desc:'Rase durch Neon-Lücken.',colors:['#12335a','#2a8fd0'],src:'a3d',start:'tunnel'},
{id:'d-maze',name:'Labyrinth-Flucht',cat:'3D',tags:['3D', 'Puzzle'],emoji:'🧭',desc:'Finde den Ausgang in 3D.',colors:['#2a2f66','#5560c8'],src:'a3d',start:'maze'},
{id:'d-fighter',name:'Star Fighter',cat:'3D',tags:['3D', 'Action'],emoji:'🚀',desc:'Weltraumkampf in 3D.',colors:['#4a1a2c','#b03a5a'],src:'a3d',start:'fighter'},
{id:'d-zig',name:'Zigzag-Himmel',cat:'3D',tags:['3D', 'Geschick'],emoji:'💎',desc:'Wechsle die Richtung.',colors:['#5a2a52','#c46aa8'],src:'a3d',start:'zig'},
{id:'d-snake',name:'Snake Chase',cat:'3D',tags:['3D', 'Arcade'],emoji:'🐍',desc:'Snake mit Verfolgerkamera.',colors:['#17423a','#2fa078'],src:'a3d',start:'snake'},
{id:'d-stack',name:'Stack 3D',cat:'3D',tags:['3D', 'Geschick'],emoji:'🏗️',desc:'Baue den höchsten Turm.',colors:['#5a4a1a','#c9a53a'],src:'a3d',start:'stack'},
{id:'d-pong',name:'Tunnel-Pong',cat:'3D',tags:['3D', 'Arcade'],emoji:'🏓',desc:'3D-Pong gegen die CPU.',colors:['#143e52','#2a8aa8'],src:'a3d',start:'pong3'},
{id:'d-helix',name:'Turm-Sturz',cat:'3D',tags:['3D', 'Geschick'],emoji:'🗼',desc:'Fall durch die Lücken.',colors:['#3a2a66','#7a5ad0'],src:'a3d',start:'helix'},
{id:'d-hover',name:'Hover-Straße',cat:'3D',tags:['3D', 'Rennen'],emoji:'🛸',desc:'Schwebe über Lücken.',colors:['#4a2060','#b050c8'],src:'a3d',start:'hover'},
{id:'d-aster',name:'Asteroidenfeld',cat:'3D',tags:['3D', 'Action'],emoji:'☄️',desc:'Weich den Felsen aus.',colors:['#4a3018','#c07a38'],src:'a3d',start:'aster'},
{id:'d-gallery',name:'Schießbude',cat:'3D',tags:['3D', 'Geschick'],emoji:'🎯',desc:'Triff Scheiben, keine Bomben.',colors:['#5a2020','#c04848'],src:'a3d',start:'gallery'},
{id:'d-cuberush',name:'Cube Rush',cat:'3D',tags:['3D', 'Action'],emoji:'🧊',desc:'3D-Runner: Spur, Sprung, Rutschen.',colors:['#5a1a4a','#d0508a'],src:'a3d',start:'cuberush',isNew:true},
{id:'d-highway',name:'Highway',cat:'3D',tags:['3D', 'Rennen'],emoji:'🚗',desc:'Gegenverkehr im Dunkeln.',colors:['#3a2a14','#c08a3a'],src:'a3d',start:'highway',isNew:true},
{id:'d-dash3',name:'Dash 3D',cat:'3D',tags:['3D', 'Action'],emoji:'🔷',desc:'Stacheln, Blöcke und Lücken.',colors:['#4a4a1a','#c8c83a'],src:'a3d',start:'dash3',isNew:true},
{id:'d-gaterun',name:'Tor-Lauf',cat:'3D',tags:['3D', 'Action'],emoji:'💰',desc:'Wähle das bessere Tor.',colors:['#1a4a2a','#3ab05a'],src:'a3d',start:'gaterun',isNew:true},
{id:'d-golf',name:'Minigolf 3D',cat:'3D',tags:['3D', 'Sport'],emoji:'⛳',desc:'3 Bahnen mit Hindernissen.',colors:['#1a4a2a','#4ab05a'],src:'a3d',start:'golf',isNew:true},
{id:'d-hoops',name:'Basketball 3D',cat:'3D',tags:['3D', 'Sport'],emoji:'🏀',desc:'Triff den Korb mit Timing.',colors:['#5a3010','#d0782a'],src:'a3d',start:'hoops',isNew:true},
{id:'d-skyjump',name:'Sky Jump 3D',cat:'3D',tags:['3D', 'Geschick'],emoji:'☁️',desc:'Hüpf immer weiter nach oben.',colors:['#1a3a6a','#5a9ae0'],src:'a3d',start:'skyjump',isNew:true},
{id:'d-whack',name:'Maulwurf-Jagd',cat:'3D',tags:['3D', 'Geschick'],emoji:'🔨',desc:'Treffe Maulwürfe, keine Bomben.',colors:['#4a3018','#b08050'],src:'a3d',start:'whack',isNew:true},
{id:'d-bowling',name:'Bowling 3D',cat:'3D',tags:['3D', 'Sport'],emoji:'🎳',desc:'5 Frames mit Effet.',colors:['#2a1a5a','#7a5ad0'],src:'a3d',start:'bowling',isNew:true},
{id:'m-connect4',name:'Vier gewinnt',cat:'Multiplayer',tags:['Multiplayer', 'Puzzle'],emoji:'🔴',desc:'Online mit Freunden oder gegen den Bot.',colors:['#5a1a2a','#e04a5a'],src:'mp',start:'connect4',mp:{min:2,max:2,solo:2},isNew:true},
{id:'m-tron',name:'Tron-Arena',cat:'Multiplayer',tags:['Multiplayer', 'Action'],emoji:'⚡',desc:'2 bis 4 Spieler, wer die Spur kreuzt, verliert.',colors:['#0f2a5a','#2a8fe0'],src:'mp',start:'tron',mp:{min:2,max:4,solo:3},isNew:true},
{id:'m-hockey',name:'Air-Hockey',cat:'Multiplayer',tags:['Multiplayer', 'Sport'],emoji:'🏒',desc:'Duell bis 7 Tore.',colors:['#0f3a5a','#2aa0d0'],src:'mp',start:'hockey',mp:{min:2,max:2,solo:2},isNew:true},
{id:'m-sumo',name:'Sumo-Arena 3D',cat:'Multiplayer',tags:['Multiplayer', '3D', 'Action'],emoji:'🤼',desc:'2 bis 4 Spieler, schubse alle vom Feld.',colors:['#3a1a5a','#9a5ae0'],src:'mp',start:'sumo',mp:{min:2,max:4,solo:3},isNew:true},
{id:'m-react',name:'Reaktions-Duell',cat:'Multiplayer',tags:['Multiplayer', 'Geschick'],emoji:'⏱️',desc:'Wer reagiert am schnellsten? Bis zu 6 Spieler.',colors:['#5a3a0a','#e0a02a'],src:'mp',start:'react',mp:{min:2,max:6,solo:3},isNew:true},
{id:'m-shooter',name:'Pixel-Shooter',cat:'Multiplayer',tags:['Multiplayer', 'Action'],emoji:'🔫',desc:'Nur Tastatur: WASD laufen, Pfeile schießen.',colors:['#4a1a1a','#e05a3a'],src:'mp',start:'shooter',mp:{min:2,max:4,solo:3},isNew:true},
{id:'m-mathq',name:'Kopfrechen-Duell',cat:'Multiplayer',tags:['Multiplayer', 'Puzzle'],emoji:'🧮',desc:'Wer rechnet am schnellsten richtig?',colors:['#1a2a5a','#4a6ae0'],src:'mp',start:'mathq',mp:{min:2,max:6,solo:3},isNew:true},
{id:'m-typing',name:'Tipp-Rennen',cat:'Multiplayer',tags:['Multiplayer', 'Geschick'],emoji:'⌨️',desc:'Tippe den Satz schneller als die anderen.',colors:['#0f3a4a','#2aa0b0'],src:'mp',start:'typing',mp:{min:2,max:6,solo:3},isNew:true},
{id:'m-potato',name:'Heiße Kartoffel',cat:'Multiplayer',tags:['Multiplayer', 'Action'],emoji:'💣',desc:'Wirf die Bombe weiter, bevor sie platzt.',colors:['#5a2a0f','#e0742a'],src:'mp',start:'potato',mp:{min:3,max:6,solo:4},isNew:true},
{id:'m-memory',name:'Memory-Duell',cat:'Multiplayer',tags:['Multiplayer', 'Puzzle'],emoji:'🃏',desc:'Finde mehr Paare als deine Gegner.',colors:['#2a1a5a','#7a5ae0'],src:'mp',start:'memoryduel',mp:{min:2,max:4,solo:2},isNew:true},
{id:'d-arena',name:'Arena-Flucht',cat:'3D',tags:['3D', 'Action'],emoji:'🧊',desc:'Münzen sammeln, Würfeln entkommen.',colors:['#1a4a30','#3aa86a'],src:'a3d',start:'arena'},
{id:'poly',name:'Poly Rush',cat:'Rennen',tags:['Rennen', '3D'],emoji:'🏁',desc:'Low-Poly-Zeitfahren auf 3 Strecken.',colors:['#4a2418','#d0643a'],src:'poly'},
{id:'p-cookie',name:'Keks-Klicker',cat:'Geschick',tags:['Geschick'],emoji:'🍪',desc:'Klick den Keks, kauf Upgrades.',colors:['#5a3a1a','#c48a3a'],src:'pa',start:'cookie',retro:true},
{id:'p-space',name:'Star Blaster',cat:'Action',tags:['Action'],emoji:'🛰️',desc:'Space Shooter mit Wellen.',colors:['#1a2a5a','#4a6ad0'],src:'pa',start:'space',retro:true},
{id:'p-wheelie',name:'Wheelie King',cat:'Rennen',tags:['Rennen'],emoji:'🏍️',desc:'Balanciere auf dem Hinterrad.',colors:['#5a4a1a','#d0b03a'],src:'pa',start:'wheelie',retro:true},
{id:'p-race',name:'Speed Track',cat:'Rennen',tags:['Rennen'],emoji:'🏎️',desc:'Rennen gegen die Zeit.',colors:['#1a4a5a','#3ab0d0'],src:'pa',start:'race',retro:true},
{id:'p-stack',name:'Turm-Stapler',cat:'Geschick',tags:['Geschick'],emoji:'🧱',desc:'Block für Block nach oben.',colors:['#5a2a4a','#c85aa8'],src:'pa',start:'stack',retro:true},
{id:'p-paper',name:'Gebietsjagd',cat:'Arcade',tags:['Arcade'],emoji:'📄',desc:'Erobere Fläche, meide Rot.',colors:['#1a3a5a','#4a8ad0'],src:'pa',start:'paper',retro:true},
{id:'p-hook',name:'Haken-Schwung',cat:'Geschick',tags:['Geschick'],emoji:'🪝',desc:'Schwing dich von Haken zu Haken.',colors:['#5a3a1a','#d0802a'],src:'pa',start:'hook',retro:true},
{id:'p-blast',name:'Block-Puzzle',cat:'Puzzle',tags:['Puzzle'],emoji:'🟦',desc:'Teile setzen, Reihen löschen.',colors:['#1a2a5a','#4a5ad0'],src:'pa',start:'blast',retro:true},
{id:'ns',name:'Neon Survivor',cat:'Action',tags:['Action'],emoji:'💥',desc:'Überlebe die Neon-Horde.',colors:['#3a1a4a','#a03ad0'],src:'ns',retro:true},
{id:'tk',name:'Turbo Kick',cat:'Sport',tags:['Sport'],emoji:'⚽',desc:'4 gegen 4, mit 2-Spieler-Modus.',colors:['#1a4a2a','#3aa84a'],src:'tk',retro:true}
];
const $=s=>document.querySelector(s), store=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}, load=k=>{try{return JSON.parse(localStorage.getItem(k)||'[]')}catch{return[]}};
let category='Alle',favorites=load('pp-favs'),recent=load('pp-recent'),favMode=false,current=null;
const cats=['Alle','3D','Multiplayer','Retro','Rennen','Action','Arcade','Puzzle','Geschick','Sport','Favoriten'];
function renderTabs(){var n=c=>c==='Alle'?catalog.length:c==='Favoriten'?favorites.length:catalog.filter(g=>tagsOf(g).includes(c)).length;$('#tabs').innerHTML=cats.map(c=>`<button class="tab ${category===c?'active':''}" data-cat="${c}">${c} <em>${n(c)}</em></button>`).join('')}
function tagsOf(g){var t=g.tags||[g.cat];return g.retro?t.concat('Retro'):t}
function fmtRec(g){var v=BEST[g.id];return v===undefined?'':`<i class="rec">🏆 ${v}${UNIT[g.id]||''}</i>`}
function card(g,i){var d=dailyGame().id===g.id;return `<article class="game${d?' daily':''}" style="--i:${Math.min(i||0,24)}"><div class="art" style="--c1:${g.colors[0]};--c2:${g.colors[1]}"><span class="em">${g.emoji}</span>${d?'<i class="star">⭐</i>':''}${g.isNew?'<i class="new">NEU</i>':''}${fmtRec(g)}<small>${tagsOf(g).join(' · ')}</small></div><div class="gbody"><div class="gtitle">${g.name}</div><div class="gmeta">${g.desc}</div><div class="gfoot"><button class="play" data-play="${g.id}">Spielen</button><button class="fav ${favorites.includes(g.id)?'on':''}" data-fav="${g.id}" aria-label="Favorit">${favorites.includes(g.id)?'★':'☆'}</button></div></div></article>`}
function render(){
 const q=$('#search').value.trim().toLowerCase();
 let items=catalog.filter(g=>(category==='Alle'||tagsOf(g).includes(category)||(category==='Favoriten'&&favorites.includes(g.id)))&&(!favMode||favorites.includes(g.id))&&(g.name+' '+g.desc+' '+tagsOf(g).join(' ')).toLowerCase().includes(q));
 $('#heading').textContent=favMode||category==='Favoriten'?'Deine Favoriten':category==='Alle'?'Alle Spiele':category;
 $('#count').textContent=items.length+' Spiele';
 $('#games').innerHTML=items.length?items.map(card).join(''):'<div class="empty">Keine passenden Spiele gefunden.</div>';
 let rc=recent.map(id=>catalog.find(g=>g.id===id)).filter(Boolean).slice(0,6);
 $('#recentBox').innerHTML=(category==='Alle'&&!q&&!favMode&&rc.length)?'<div class="sectionhead"><h2>Zuletzt gespielt</h2></div><div class="grid">'+rc.map(card).join('')+'</div>':'';
 renderTabs();
}
$('#tabs').addEventListener('click',e=>{let b=e.target.closest('[data-cat]');if(!b)return;category=b.dataset.cat;favMode=false;$('#favOnly').textContent='☆ Favoriten';renderTabs();render()});
$('#search').addEventListener('input',render);
$('#favOnly').onclick=()=>{favMode=!favMode;category='Alle';$('#favOnly').textContent=favMode?'★ Alle Spiele':'☆ Favoriten';renderTabs();render()};
document.querySelector('main').addEventListener('click',e=>{let f=e.target.closest('[data-fav]');if(f){let id=f.dataset.fav;favorites=favorites.includes(id)?favorites.filter(x=>x!==id):[...favorites,id];store('pp-favs',favorites);render();return}let p=e.target.closest('[data-play]');if(p)launch(p.dataset.play)});
function launch(id,sk){var g=catalog.find(x=>x.id===id);if(g.mp&&!sk){openMode(g);return}current=id;$('#gameName').textContent=g.name;$('#gameHint').textContent=g.src?'Klick ins Spiel · P Pause · 0 Panic · Backspace schließt':'';$('#overlay').classList.add('open');document.body.classList.add('playing');bgSet();recent=[id,...recent.filter(x=>x!==id)].slice(0,8);store('pp-recent',recent);STATS.plays[id]=(STATS.plays[id]||0)+1;jset('pp-stats',STATS);endPlay();playStart=Date.now();startGame(id)}
$('#close').onclick=closeGame;
$('#restart').onclick=()=>current&&startGame(current);
function startGame(id){let s=$('#stage');cleanup();let gm=catalog.find(x=>x.id===id);if(gm.src){mountFrame(gm,s);return}s.className='stage';s.innerHTML='<div class="gamebox" id="box"></div>';let b=$('#box');if(id==='snake')snake(b);if(id==='pong')pong(b);if(id==='breakout')breakout(b);if(id==='memory')memory(b);if(id==='2048')game2048(b);if(id==='tictactoe')ttt(b);if(id==='reaction')reaction(b);if(id==='clicker')clicker(b)}
function snake(b){
 b.innerHTML='<h2>Snake</h2><p>Pfeiltasten oder die Knöpfe benutzen.</p><div class="status" id="score">Punkte: 0</div><canvas id="cv" width="400" height="400"></canvas><div class="controls"><button data-dir="up">↑</button><button data-dir="left">←</button><button data-dir="down">↓</button><button data-dir="right">→</button></div>';
 let c=$('#cv'),x=c.getContext('2d'),snake=[{x:8,y:8}],d={x:1,y:0},next=d,food={x:13,y:8},score=0,dead=false;
 function turn(v){if(v.x!==-d.x||v.y!==-d.y)next=v}b.querySelectorAll('[data-dir]').forEach(z=>z.onclick=()=>{let m={up:{x:0,y:-1},down:{x:0,y:1},left:{x:-1,y:0},right:{x:1,y:0}};turn(m[z.dataset.dir])});
 const key=e=>{let m={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}};if(m[e.key]){e.preventDefault();turn(m[e.key])}};on('keydown',key);
 let timer=iv(()=>{if(dead)return;d=next;let h={x:(snake[0].x+d.x+20)%20,y:(snake[0].y+d.y+20)%20};if(snake.some(p=>p.x===h.x&&p.y===h.y)){dead=true;$('#score').textContent='Spiel vorbei · Punkte: '+score;rec('snake',score);clearInterval(timer);window.removeEventListener('keydown',key);return}snake.unshift(h);if(h.x===food.x&&h.y===food.y){score++;$('#score').textContent='Punkte: '+score;food={x:Math.floor(Math.random()*20),y:Math.floor(Math.random()*20)}}else snake.pop();x.fillStyle='#090d14';x.fillRect(0,0,400,400);x.fillStyle='#a6ff4d';snake.forEach(p=>x.fillRect(p.x*20+1,p.y*20+1,18,18));x.fillStyle='#ff657a';x.fillRect(food.x*20+3,food.y*20+3,14,14)},115);
}
function pong(b){b.innerHTML='<h2>Pong</h2><p>Bewege den unteren Schläger mit Maus, Finger oder ← →. Gegen den Computer.</p><div class="status" id="score">0 : 0</div><canvas id="cv" width="600" height="360"></canvas>';let c=$('#cv'),x=c.getContext('2d'),py=155,cy=155,ball={x:300,y:180,vx:4,vy:3},score=[0,0],run=true;function move(e){let r=c.getBoundingClientRect(),v=(e.clientY-r.top)*360/r.height;py=Math.max(0,Math.min(290,v-35))}c.addEventListener('pointermove',move);let key=e=>{if(e.key==='ArrowLeft')py=Math.max(0,py-22);if(e.key==='ArrowRight')py=Math.min(290,py+22)};on('keydown',key);let t=iv(()=>{ball.x+=ball.vx;ball.y+=ball.vy;if(ball.y<8||ball.y>352)ball.vy*=-1;cy+=((ball.y-35)-cy)*.055;if(ball.x<28&&ball.y>py&&ball.y<py+70){ball.vx=Math.abs(ball.vx)*1.04}if(ball.x>572&&ball.y>cy&&ball.y<cy+70)ball.vx=-Math.abs(ball.vx)*1.04;if(ball.x<0||ball.x>600){score[ball.x<0?1:0]++;rec('pong',score[0]);$('#score').textContent=score.join(' : ');ball={x:300,y:180,vx:ball.x<0?4:-4,vy:3}}x.clearRect(0,0,600,360);x.setLineDash([8,8]);x.strokeStyle='#64718a';x.beginPath();x.moveTo(300,0);x.lineTo(300,360);x.stroke();x.setLineDash([]);x.fillStyle='#a6ff4d';x.fillRect(12,py,12,70);x.fillStyle='#8bc8ff';x.fillRect(576,cy,12,70);x.beginPath();x.arc(ball.x,ball.y,8,0,7);x.fillStyle='white';x.fill()},16)}
function breakout(b){b.innerHTML='<h2>Brick Breaker</h2><p>Bewege den Schläger mit dem Finger oder der Maus.</p><div class="status" id="score">Punkte: 0</div><canvas id="cv" width="600" height="420"></canvas>';let c=$('#cv'),x=c.getContext('2d'),px=250,ball={x:300,y:350,vx:3,vy:-4},br=[] ,score=0;for(let r=0;r<5;r++)for(let q=0;q<9;q++)br.push({x:18+q*64,y:25+r*27,on:true});function move(e){let r=c.getBoundingClientRect();px=Math.max(0,Math.min(510,(e.clientX-r.left)*600/r.width-45))}c.addEventListener('pointermove',move);let t=iv(()=>{ball.x+=ball.vx;ball.y+=ball.vy;if(ball.x<8||ball.x>592)ball.vx*=-1;if(ball.y<8)ball.vy*=-1;if(ball.y>380&&ball.x>px&&ball.x<px+90)ball.vy=-Math.abs(ball.vy);br.forEach(z=>{if(z.on&&ball.x>z.x&&ball.x<z.x+56&&ball.y>z.y&&ball.y<z.y+18){z.on=false;ball.vy*=-1;score++;$('#score').textContent='Punkte: '+score}});if(ball.y>420||br.every(z=>!z.on)){clearInterval(t);rec('breakout',score);$('#score').textContent=br.every(z=>!z.on)?'Gewonnen! Punkte: '+score:'Versuch vorbei · Punkte: '+score}x.clearRect(0,0,600,420);br.forEach((z,i)=>{if(z.on){x.fillStyle=['#ff6b6b','#ffb86b','#f5e66b','#83d68b','#77bfff'][Math.floor(i/9)];x.fillRect(z.x,z.y,56,18)}});x.fillStyle='#a6ff4d';x.fillRect(px,390,90,10);x.beginPath();x.arc(ball.x,ball.y,8,0,7);x.fillStyle='white';x.fill()},16)}
function memory(b){let vals=['🐸','🚀','🍉','🦊','🎮','🌈','🐼','⚽'],a=[...vals,...vals].sort(()=>Math.random()-.5),open=[],done=0,moves=0;b.innerHTML='<h2>Memory</h2><p>Finde alle Paare.</p><div class="status" id="score">Züge: 0 · Paare: 0/8</div><div class="board" id="board" style="grid-template-columns:repeat(4,1fr)"></div>';let board=$('#board');a.forEach((v,i)=>{let z=document.createElement('button');z.className='cell';z.textContent='?';z.onclick=()=>{if(z.dataset.lock||open.includes(i)||open.length===2)return;z.textContent=v;open.push(i);if(open.length===2){moves++;let [p,q]=open;if(a[p]===a[q]){[p,q].forEach(k=>board.children[k].dataset.lock='1');done++;open=[];if(done===8)rec('memory',moves,true)}else to(()=>{[p,q].forEach(k=>board.children[k].textContent='?');open=[]},650);$('#score').textContent=`Züge: ${moves} · Paare: ${done}/8`}};board.append(z)})}
function game2048(b){let a=Array(16).fill(0),score=0;b.innerHTML='<h2>2048</h2><p>Mit Pfeiltasten oder Wischbewegung spielen.</p><div class="status" id="score">Punkte: 0</div><div class="board" id="board" style="grid-template-columns:repeat(4,1fr)"></div><div class="controls"><button id="up">↑</button><button id="left">←</button><button id="down">↓</button><button id="right">→</button></div>';let board=$('#board');function add(){let e=a.map((v,i)=>v?null:i).filter(v=>v!==null);if(e.length)a[e[Math.floor(Math.random()*e.length)]]=Math.random()<.9?2:4}function draw(){board.innerHTML=a.map(v=>`<div class="cell" style="display:grid;place-items:center;background:${v?'#'+({2:'eee4da',4:'ede0c8',8:'f2b179',16:'f59563',32:'f67c5f',64:'f65e3b',128:'edcf72',256:'edcc61',512:'edc850',1024:'edc53f',2048:'edc22e'}[v]||'8c7a64'):' #30394b'};color:${v>4?'white':'#3a3027'}">${v||''}</div>`).join('');$('#score').textContent='Punkte: '+score;rec('2048',score)}function move(dir){let old=a.join(',');for(let n=0;n<4;n++){let ids=Array.from({length:4},(_,i)=>dir==='left'?n*4+i:dir==='right'?n*4+3-i:dir==='up'?i*4+n:(3-i)*4+n),v=ids.map(i=>a[i]).filter(Boolean),out=[];for(let i=0;i<v.length;i++){if(v[i]===v[i+1]){out.push(v[i]*2);score+=v[i]*2;i++}else out.push(v[i])}while(out.length<4)out.push(0);ids.forEach((id,i)=>a[id]=out[i])}if(old!==a.join(','))add();draw()}['up','down','left','right'].forEach(d=>$('#'+d).onclick=()=>move(d));on('keydown',e=>{let d={ArrowUp:'up',ArrowDown:'down',ArrowLeft:'left',ArrowRight:'right'}[e.key];if(d&&current==='2048'){e.preventDefault();move(d)}});let sx=0,sy=0;board.addEventListener('touchstart',e=>{sx=e.touches[0].clientX;sy=e.touches[0].clientY},{passive:true});board.addEventListener('touchend',e=>{let dx=e.changedTouches[0].clientX-sx,dy=e.changedTouches[0].clientY-sy;if(Math.max(Math.abs(dx),Math.abs(dy))>25)move(Math.abs(dx)>Math.abs(dy)?(dx>0?'right':'left'):(dy>0?'down':'up'))},{passive:true});add();add();draw()}
function ttt(b){let a=Array(9).fill(''),turn='X',ended=false;b.innerHTML='<h2>Tic Tac Toe</h2><p>Du spielst X, der Computer O.</p><div class="status" id="score">Du bist dran.</div><div class="board" id="board" style="grid-template-columns:repeat(3,1fr);max-width:300px"></div>';let board=$('#board');function win(p){return [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]].some(line=>line.every(i=>a[i]===p))}function draw(){board.innerHTML=a.map((v,i)=>`<button class="cell" data-i="${i}">${v}</button>`).join('');board.querySelectorAll('button').forEach(z=>z.onclick=()=>play(+z.dataset.i));}function play(i){if(ended||a[i])return;a[i]='X';if(win('X')){ended=true;$('#score').textContent='Du hast gewonnen!'}else if(a.every(Boolean)){ended=true;$('#score').textContent='Unentschieden.'}else{let opts=a.map((v,i)=>v?null:i).filter(v=>v!==null);let best=opts.find(i=>{a[i]='O';let w=win('O');a[i]='';return w});if(best===undefined)best=opts.find(i=>{a[i]='X';let w=win('X');a[i]='';return w});if(best===undefined)best=opts[Math.floor(Math.random()*opts.length)];a[best]='O';if(win('O')){ended=true;$('#score').textContent='Der Computer gewinnt.'}else if(a.every(Boolean)){ended=true;$('#score').textContent='Unentschieden.'}}draw()}draw()}
function reaction(b){b.innerHTML='<h2>Reaktionstest</h2><p>Drücke Start. Sobald das Feld grün wird, tippe so schnell du kannst.</p><div id="zone" style="padding:65px 15px;border-radius:16px;background:#344052;font-size:22px;font-weight:800">Bereit?</div><div class="status" id="score"></div><div class="controls"><button id="start" class="bigbtn">Start</button></div>';let zone=$('#zone'),timer=null,started=0,ready=false;$('#start').onclick=()=>{clearTimeout(timer);ready=false;zone.style.background='#344052';zone.textContent='Warte auf Grün …';$('#score').textContent='';timer=to(()=>{ready=true;started=performance.now();zone.style.background='#2a9d59';zone.textContent='JETZT TIPPEN!'},1000+Math.random()*3000)};zone.onclick=()=>{if(ready){let ms=Math.round(performance.now()-started);rec('reaction',ms,true);$('#score').textContent='Deine Zeit: '+ms+' ms';zone.textContent='Geschafft!';zone.style.background='#344052';ready=false;clearTimeout(timer)}else if(timer){clearTimeout(timer);timer=null;zone.textContent='Zu früh!';$('#score').textContent='Warte bis das Feld grün wird.'}}}
function clicker(b){b.innerHTML='<h2>Stern-Klicker</h2><p>Tippe so oft wie möglich auf den Stern – du hast 20 Sekunden.</p><div class="status" id="score">Punkte: 0 · Zeit: 20</div><div style="padding:30px"><button id="star" style="font-size:90px;background:none;border:0">⭐</button></div><button class="bigbtn" id="go">Los geht’s</button>';let score=0,left=20,run=false,t;$('#star').disabled=true;$('#go').onclick=()=>{if(run)return;score=0;left=20;run=true;$('#star').disabled=false;$('#go').disabled=true;$('#score').textContent='Punkte: 0 · Zeit: 20';t=iv(()=>{left--;$('#score').textContent=`Punkte: ${score} · Zeit: ${left}`;if(left<=0){clearInterval(t);rec('clicker',score);run=false;$('#star').disabled=true;$('#go').disabled=false;$('#go').textContent='Nochmal spielen'}},1000)};$('#star').onclick=()=>{if(run){score++;$('#score').textContent=`Punkte: ${score} · Zeit: ${left}`}}}
var TMR=[],LST=[],frameEl=null;
function iv(f,m){var t=setInterval(f,m);TMR.push(t);return t}
function to(f,m){var t=setTimeout(f,m);TMR.push(t);return t}
function on(t,f){window.addEventListener(t,f);LST.push([t,f]);return f}
function cleanup(){TMR.forEach(function(t){clearInterval(t);clearTimeout(t)});TMR=[];LST.forEach(function(a){window.removeEventListener(a[0],a[1])});LST=[];frameEl=null}
function closeGame(){if(typeof leaveNet=='function')leaveNet();cleanup();endPlay();document.body.classList.remove('playing');bgSet();$('#overlay').classList.remove('open');$('#stage').className='stage';$('#stage').innerHTML='';current=null;render()}
var INJ='(function(){var r=window.requestAnimationFrame.bind(window),ov=null;window.requestAnimationFrame=function(cb){return r(function(t){if(window.__pz)window.requestAnimationFrame(cb);else cb(t)})};'+
'function pz(v){window.__pz=v;if(v&&!ov&&document.body){ov=document.createElement("div");ov.style.cssText="position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;background:rgba(6,9,16,.74);color:#fff;font:800 26px system-ui,sans-serif;z-index:2147483647;cursor:pointer;text-align:center";ov.textContent="⏸ Pause – klicken oder P drücken";ov.onclick=function(){pz(false)};document.body.appendChild(ov)}else if(!v&&ov){ov.remove();ov=null}}window.__pzf=pz;'+
'addEventListener("keydown",function(e){var nb=window.__nobs;if((e.code=="Digit0"||e.code=="Numpad0")&&(!nb||e.ctrlKey)){e.stopImmediatePropagation();e.preventDefault();parent.postMessage({pp:1,k:"panic"},"*")}else if((e.code=="Backspace"&&!nb)||e.code=="Escape"){e.stopImmediatePropagation();e.preventDefault();parent.postMessage({pp:1,k:"close"},"*")}else if(e.code=="KeyP"&&!e.repeat&&!nb){pz(!window.__pz)}},true);'+
'addEventListener("blur",function(){pz(true)});'+
'try{if(parent.__frameInit)parent.__frameInit(window)}catch(e){}})();';
var FILES={mp:'games/multi.html',a3d:'games/arcade-3d.html',pa:'games/pausen-arcade.html',poly:'games/poly-rush.html',ns:'games/neon-survivor.html',tk:'games/turbo-kick.html'};
function mountFrame(gm,s){
  var f=document.createElement('iframe'),url=FILES[gm.src],done=false;f.title=gm.name;f.setAttribute('allow','fullscreen');
  frameEl=f;s.className='stage';s.innerHTML='<div class="gamebox"><p>Lade …</p></div>';
  fetch(url).then(function(r){if(!r.ok)throw 0;return r.text()}).then(function(t){
    if(frameEl!==f)return;
    var inj='<style>#back,#panic{display:none!important}</style><script>'+INJ+'<\/script>';
    var html=t.replace('<head>',function(){return '<head>'+inj});
    s.className='stage frame';s.innerHTML='';
    function go(){
      if(done||frameEl!==f)return;done=true;
      var doc=f.contentDocument;doc.open();doc.write(html);doc.close();
      try{var w=f.contentWindow;if(gm.start&&w.__arcade)w.__arcade.start(gm.start);else if(gm.start&&w.__mp)w.__mp.start(gm.start);w.focus()}catch(e){}
    }
    f.onload=go;s.appendChild(f);setTimeout(go,300);
  }).catch(function(){
    if(frameEl!==f)return;
    s.innerHTML='<div class="gamebox"><h2>Datei fehlt</h2><p>Lege die Datei <b>'+url+'</b> in dein GitHub-Repository (neben index.html).</p></div>';
  });
}
addEventListener('message',function(e){if(!e.data||e.data.pp!==1)return;if(e.data.k=='panic')panic();if(e.data.k=='close'&&frameEl)closeGame()});
/* ===== Version 2: Widgets, Hintergrund, Statistik ===== */
var ZONE='Europe/Zurich',LAT=47.3083,LON=8.7567;
var UNIT={snake:' Pkt',pong:' Pkt',breakout:' Pkt',clicker:' Pkt','2048':' Pkt',reaction:' ms',memory:' Züge'};
function jget(k,d){try{var v=JSON.parse(localStorage.getItem(k));return v==null?d:v}catch(e){return d}}
function jset(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
var BEST=jget('pp-best',{}),STATS=jget('pp-stats',{tot:0,day:{},plays:{}}),playStart=0;
function rec(id,v,low){if(typeof v!=='number')return;var o=BEST[id];if(o===undefined||(low?v<o:v>o)){BEST[id]=v;jset('pp-best',BEST)}}
function today(){return new Date().toLocaleDateString('sv-SE',{timeZone:ZONE})}
function dailyGame(){var s=today(),h=0;for(var i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))>>>0;return catalog[h%catalog.length]}
function drawStats(){
  var m=function(s){return Math.round(s/60)};
  $('#stToday').textContent=m(STATS.day[today()]||0);$('#stTotal').textContent=m(STATS.tot);$('#stGames').textContent=Object.keys(STATS.plays).length;
  var plays=0;for(var k in STATS.plays)plays+=STATS.plays[k];
  var xp=Math.round(STATS.tot/6)+plays*5+Object.keys(BEST).length*25,lv=Math.floor(Math.sqrt(xp/25))+1,a=25*(lv-1)*(lv-1),b=25*lv*lv,TT=['Neuling','Spieler','Zocker','Profi','Meister','Legende'];
  $('#xpt').textContent='Level '+lv+' · '+TT[Math.min(5,Math.floor((lv-1)/2))]+' · '+xp+' XP';$('#xpf').style.width=Math.round((xp-a)/(b-a)*100)+'%';
  var bars='',mx=5,vals=[],i;
  for(i=6;i>=0;i--){var dt=new Date(Date.now()-i*864e5),key=dt.toLocaleDateString('sv-SE',{timeZone:ZONE}),mi=m(STATS.day[key]||0);vals.push([dt.toLocaleDateString('de-CH',{weekday:'short',timeZone:ZONE}).slice(0,2),mi]);mx=Math.max(mx,mi)}
  vals.forEach(function(v){bars+='<div class="bar1" title="'+v[1]+' Min."><i style="height:'+Math.max(4,Math.round(v[1]/mx*100))+'%"></i><span>'+v[0]+'</span></div>'});
  $('#wk').innerHTML=bars;
  var top=Object.keys(STATS.plays).sort(function(x,y){return STATS.plays[y]-STATS.plays[x]}).slice(0,3).map(function(id){var g=catalog.find(function(c){return c.id===id});return g?g.emoji+' '+g.name+' <b>×'+STATS.plays[id]+'</b>':''}).filter(Boolean);
  $('#topg').innerHTML=top.length?top.join('<br>'):'Spiel etwas, dann erscheinen hier deine Favoriten.';
}
function isoWeek(d){var t=new Date(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())),n=t.getUTCDay()||7;t.setUTCDate(t.getUTCDate()+4-n);var y0=new Date(Date.UTC(t.getUTCFullYear(),0,1));return Math.ceil(((t-y0)/864e5+1)/7)}
function dayLen(a,b){var m=(parseInt(b.slice(11,13),10)*60+parseInt(b.slice(14,16),10))-(parseInt(a.slice(11,13),10)*60+parseInt(a.slice(14,16),10));return Math.floor(m/60)+' h '+(m%60)+' min'}
function endPlay(){if(!playStart)return;var s=Math.round((Date.now()-playStart)/1000);playStart=0;if(s<2)return;STATS.tot+=s;var t=today();STATS.day[t]=(STATS.day[t]||0)+s;jset('pp-stats',STATS);drawStats()}

/* Uhr, Datum, Begrüssung, Wochenende */
function tick(){
  var n=new Date(),f=function(o){return new Intl.DateTimeFormat('de-CH',Object.assign({timeZone:ZONE},o)).format(n)};
  $('#clock').textContent=f({hour:'2-digit',minute:'2-digit',second:'2-digit'});
  $('#date').textContent=f({weekday:'long',day:'numeric',month:'long'});
  var h=parseInt(f({hour:'numeric',hour12:false}),10)%24;
  $('#hello').textContent=(h<5?'Gute Nacht':h<11?'Guten Morgen':h<17?'Guten Tag':h<22?'Guten Abend':'Gute Nacht')+' 👋';
  var d=new Date(n.toLocaleString('en-US',{timeZone:ZONE})).getDay();
  $('#weekend').textContent=(d==0||d==6)?'Wochenende! 🎉':(d==5?'Morgen ist Wochenende':'Noch '+(6-d)+' Tage bis zum Wochenende');
  var L=new Date(n.toLocaleString('en-US',{timeZone:ZONE}));$('#kw').textContent='KW '+isoWeek(L)+' · Tag '+Math.floor((L-new Date(L.getFullYear(),0,0))/864e5)+' des Jahres';
}

/* Wetter Gossau ZH (Open-Meteo, ohne Schlüssel) */
function wxInfo(c,day){return c==0?(day?['☀️','Klar']:['🌙','Klare Nacht']):c<=2?['⛅','Teils bewölkt']:c==3?['☁️','Bedeckt']:c<=48?['🌫️','Nebel']:c<=57?['🌦️','Nieselregen']:c<=67?['🌧️','Regen']:c<=77?['❄️','Schnee']:c<=82?['🌦️','Schauer']:c<=86?['🌨️','Schneeschauer']:['⛈️','Gewitter']}
function showWx(d){
  var c=d.current_weather,dl=d.daily,i=wxInfo(c.weathercode,c.is_day);
  $('#wxi').textContent=i[0];$('#wxt').textContent=Math.round(c.temperature)+'°C';
  $('#wxd').textContent=i[1]+' · Hoch '+Math.round(dl.temperature_2m_max[0])+'° / Tief '+Math.round(dl.temperature_2m_min[0])+'°';
  $('#wxs').textContent='Wind '+Math.round(c.windspeed)+' km/h · ↑ '+dl.sunrise[0].slice(11,16)+'  ↓ '+dl.sunset[0].slice(11,16)+' · Tag '+dayLen(dl.sunrise[0],dl.sunset[0]);
}
function showHours(d){
  var h=d.hourly,key=today()+'T'+new Intl.DateTimeFormat('de-CH',{timeZone:ZONE,hour:'2-digit',hour12:false}).format(new Date()).slice(0,2)+':00',i=h.time.indexOf(key);if(i<0)i=0;
  var o='';for(var k=i+1;k<=i+6&&k<h.time.length;k++){var w=wxInfo(h.weather_code[k],1);o+='<div class="hr"><b>'+h.time[k].slice(11,16)+'</b><span>'+w[0]+'</span><em>'+Math.round(h.temperature_2m[k])+'°</em><small>'+(h.precipitation_probability?h.precipitation_probability[k]:0)+'%</small></div>'}
  $('#hrs').innerHTML=o;
}
function loadHours(){
  var c=jget('pp-hrs',null);if(c){try{showHours(c.d)}catch(e){}}
  if(c&&Date.now()-c.t<9e5)return;
  fetch('https://api.open-meteo.com/v1/forecast?latitude='+LAT+'&longitude='+LON+'&hourly=temperature_2m,precipitation_probability,weather_code&forecast_days=2&timezone=Europe%2FZurich')
   .then(function(r){return r.json()}).then(function(d){showHours(d);jset('pp-hrs',{t:Date.now(),d:d})}).catch(function(){if(!c)$('#hrs').textContent='Keine Stundenwerte verfügbar'});
}
function loadWx(){loadHours();
  var c=jget('pp-wx',null);if(c){try{showWx(c.d)}catch(e){}}
  if(c&&Date.now()-c.t<9e5)return;
  fetch('https://api.open-meteo.com/v1/forecast?latitude='+LAT+'&longitude='+LON+'&current_weather=true&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=Europe%2FZurich')
   .then(function(r){return r.json()}).then(function(d){showWx(d);jset('pp-wx',{t:Date.now(),d:d})})
   .catch(function(){if(!c)$('#wxd').textContent='Wetter gerade nicht verfügbar'});
}

/* Animierter Hintergrund */
(function(){
  var c=$('#bgfx'),x=c.getContext('2d'),W,H,P=[],run=false,mx=0,my=0,t=0,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches;
  function hexA(h,al){var n=parseInt(h.slice(1),16);return 'rgba('+(n>>16)+','+((n>>8)&255)+','+(n&255)+','+al+')'}
  function acc(){return getComputedStyle(document.documentElement).getPropertyValue('--accent').trim()||'#a6ff4d'}
  function rs(){W=c.width=innerWidth;H=c.height=innerHeight;P=[];for(var i=0;i<Math.min(80,W*H/20000);i++)P.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,r:1+Math.random()*1.8})}
  function frame(){
    if(!run)return;t+=.004;x.clearRect(0,0,W,H);var a=acc();
    [[.2,.25,a,.13],[.8,.35,'#5aa0ff',.10],[.5,.9,'#b46bff',.09]].forEach(function(b,i){
      var bx=W*(b[0]+Math.sin(t*(1+i*.6)+i)*.12),by=H*(b[1]+Math.cos(t*(.8+i*.5)+i)*.1),g=x.createRadialGradient(bx,by,0,bx,by,Math.max(W,H)*.45);
      g.addColorStop(0,hexA(b[2],b[3]));g.addColorStop(1,'rgba(0,0,0,0)');x.fillStyle=g;x.fillRect(0,0,W,H)});
    x.fillStyle=hexA(a,.55);
    P.forEach(function(p,i){
      p.x+=p.vx+mx*.02;p.y+=p.vy+my*.02;if(p.x<0)p.x=W;if(p.x>W)p.x=0;if(p.y<0)p.y=H;if(p.y>H)p.y=0;
      x.beginPath();x.arc(p.x,p.y,p.r,0,7);x.fill();
      for(var j=i+1;j<P.length;j++){var q=P[j],d=Math.hypot(p.x-q.x,p.y-q.y);if(d<110){x.strokeStyle=hexA(a,.16*(1-d/110));x.beginPath();x.moveTo(p.x,p.y);x.lineTo(q.x,q.y);x.stroke()}}
    });
    requestAnimationFrame(frame);
  }
  window.bgSet=function(){
    var want=jget('pp-bg',true)&&!rm&&!document.hidden&&!document.body.classList.contains('playing');
    if(want&&!run){run=true;frame()}else if(!want){run=false;x.clearRect(0,0,W,H)}
  };
  addEventListener('resize',rs);addEventListener('mousemove',function(e){mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5});
  document.addEventListener('visibilitychange',window.bgSet);rs();
})();

/* Einstellungen, Zufall, Spiel des Tages, Vollbild */
var ACC=['#a6ff4d','#4dc3ff','#ff6fb5','#ffb14d','#b48bff'];
function setAcc(h){document.documentElement.style.setProperty('--accent',h);jset('pp-acc',h);[].forEach.call(document.querySelectorAll('.sw'),function(s){s.classList.toggle('on',s.dataset.c===h)})}
$('#swatches').innerHTML=ACC.map(function(h){return '<span class="sw" data-c="'+h+'" style="background:'+h+'"></span>'}).join('');
$('#swatches').onclick=function(e){if(e.target.dataset.c)setAcc(e.target.dataset.c)};
setAcc(jget('pp-acc',ACC[0]));
$('#bgToggle').checked=jget('pp-bg',true);$('#bgToggle').onchange=function(){jset('pp-bg',this.checked);bgSet()};
$('#setBtn').onclick=function(e){e.stopPropagation();$('#settings').classList.toggle('open')};
document.addEventListener('click',function(e){if(!e.target.closest('#settings'))$('#settings').classList.remove('open')});
$('#resetStats').onclick=function(){if(confirm('Statistik und Rekorde wirklich löschen?')){STATS={tot:0,day:{},plays:{}};BEST={};jset('pp-stats',STATS);jset('pp-best',BEST);drawStats();render()}};
$('#randomBtn').onclick=function(){launch(catalog[Math.floor(Math.random()*catalog.length)].id)};
$('#dailyBtn').onclick=function(){launch(dailyGame().id)};
$('#dailyBtn').textContent='⭐ Spiel des Tages: '+dailyGame().name;
$('#fs').onclick=function(){var o=$('#overlay');(o.requestFullscreen||o.webkitRequestFullscreen||function(){}).call(o)};
addEventListener('keydown',function(e){if(e.key==='/'&&!/INPUT|TEXTAREA/.test((e.target||{}).tagName||'')&&!__locked){e.preventDefault();$('#search').focus()}});
drawStats();tick();setInterval(tick,1000);loadWx();setInterval(loadWx,9e5);bgSet();

var n3=catalog.filter(function(g){return tagsOf(g).indexOf('3D')>=0}).length;
$('#heroP').textContent=catalog.length+' Spiele: '+n3+' in 3D und '+catalog.filter(function(g){return g.retro}).length+' Retro-Klassiker. Direkt spielbar, ohne Installation.';
var TIPS=['Mit P pausierst du jedes Spiel, es pausiert auch von selbst, wenn du woanders klickst.','Die Taste 0 ist dein Panic-Knopf. Mit zweimal Tippen kommst du zurück.','Mit / springst du direkt ins Suchfeld.','Beim Basketball zählt das Timing: Wirf, wenn der Balken im grünen Bereich ist.','Beim Bowling kannst du den Ball mit A und D noch in der Kurve lenken.','Im Neon-Tunnel hilft es, schon früh auf die Lücke zuzusteuern.','Bei Dash 3D kannst du auf den orangen Blöcken landen, nicht nur drüber springen.','Wähle oben rechts über das Zahnrad deine Lieblingsfarbe.','Beim Minigolf reicht oft ein Schlag mit etwa 70 % Kraft.','Sammle Rekorde 🏆, sie geben dir extra XP für dein Level.','Multiplayer: Lobby erstellen, den 5-stelligen Code an Freunde schicken, fertig. Es geht auch per Link.','Auf dem Handy erscheint eine Touch-Steuerung, mit 🎮 schaltest du sie ab.'];
$('#tip').textContent='💡 '+TIPS[Math.floor(Date.now()/864e5)%TIPS.length];
$('#newrow').innerHTML='<span class="muted">Neu:</span> '+catalog.filter(function(g){return g.isNew}).map(function(g){return '<button class="chip" data-play="'+g.id+'">'+g.emoji+' '+g.name+'</button>'}).join('');
renderTabs();render();

var __paused=false,__locked=true;
function panic(){
  var f=document.getElementById('fake'),fr=(typeof frameEl!=='undefined'&&frameEl&&frameEl.contentWindow)?frameEl.contentWindow:null;
  if(f.style.display==='block'){f.style.display='none';__paused=false;document.title='PixelPlay – Spiele';return}
  try{window.open('https://gossau.escola.ch/escola/login','_blank')}catch(e){}
  f.style.display='block';__paused=true;document.title='Referat - Dokumente';if(fr&&fr.__pzf)fr.__pzf(true);
}
(function(){
  var L=document.getElementById('pplock'),D=document.getElementById('lkd'),E=document.getElementById('lke'),B=L.firstElementChild,CODE='8625',cur='';
  try{if(sessionStorage.getItem('pp_ok')=='1'){L.style.display='none';__locked=false}}catch(e){}
  function show(){var s='';for(var i=0;i<4;i++)s+=(i<cur.length?'●':'○')+(i<3?' ':'');D.textContent=s}
  function add(c){
    if(!__locked)return;E.textContent='';if(cur.length<4)cur+=c;show();
    if(cur.length==4)setTimeout(function(){
      if(cur===CODE){__locked=false;L.style.display='none';try{sessionStorage.setItem('pp_ok','1')}catch(e){}if(window.onUnlock)onUnlock()}
      else{E.textContent='Falsches Passwort';cur='';show();B.classList.remove('lks');void B.offsetWidth;B.classList.add('lks')}
    },120);
  }
  function del(){cur=cur.slice(0,-1);show()}
  var P=document.getElementById('lkpad');
  ['1','2','3','4','5','6','7','8','9','⌫','0',''].forEach(function(k){
    var b=document.createElement('button');b.textContent=k;
    if(!k)b.style.visibility='hidden';else b.onclick=function(){if(k=='⌫')del();else add(k)};
    P.appendChild(b);
  });
  show();
  window.addEventListener('keydown',function(e){
    if(!__locked)return;
    e.stopImmediatePropagation();e.preventDefault();
    if(/^[0-9]$/.test(e.key))add(e.key);else if(e.key==='Backspace')del();
  },true);
  window.addEventListener('keyup',function(e){if(__locked)e.stopImmediatePropagation()},true);
  window.addEventListener('keydown',function(e){
    if(__locked)return;
    if(e.target&&/INPUT|TEXTAREA/.test(e.target.tagName))return;
    if(e.code=='Digit0'||e.code=='Numpad0'){panic();return}
    if(e.key=='Escape'&&document.getElementById('overlay').classList.contains('open'))closeGame();
  });
  document.getElementById('panicBtn').onclick=panic;
  var lt=0;
  window.addEventListener('pointerup',function(e){
    var t=e.target;if(!t||!t.closest||!t.closest('#fake'))return;
    var n=Date.now();if(n-lt<450){panic();lt=0}else lt=n;
  });
})();
