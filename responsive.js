/* ===== Geräte-Anpassung (Handy, Tablet, Desktop) und Touch-Steuerung ===== */
var DEV='desktop',NOPAD=['d-whack','d-hoops','d-golf','d-gallery','d-bowling','d-stack','d-zig','p-cookie','p-blast','p-hook','p-stack','p-paper','m-connect4','m-react','m-hockey'];
function detect(){
  var coarse=window.matchMedia&&matchMedia('(pointer:coarse)').matches,m=Math.min(innerWidth,innerHeight);
  DEV=coarse?(m<600?'phone':'tablet'):'desktop';
  document.body.dataset.dev=DEV;document.body.dataset.ori=innerHeight>innerWidth?'portrait':'landscape';
  setPad();
}
function curGame(){return current&&catalog.find(function(x){return x.id===current})}
function padWanted(){var g=curGame();return !!(g&&g.src&&NOPAD.indexOf(g.id)<0&&DEV!=='desktop'&&jget('pp-pad','on')!=='off')}
function setPad(){document.body.classList.toggle('padon',$('#overlay').classList.contains('open')&&padWanted())}
function toast(t){var e=$('#toast');e.textContent=t;e.classList.add('show');setTimeout(function(){e.classList.remove('show')},4200)}
new MutationObserver(function(){
  setPad();
  var g=curGame();
  if($('#overlay').classList.contains('open')&&g&&g.src&&DEV==='phone'&&document.body.dataset.ori==='portrait'&&!sessionStorage.getItem('pp-rot')){try{sessionStorage.setItem('pp-rot','1')}catch(e){}toast('↻ Tipp: Dreh dein Handy ins Querformat für mehr Platz')}
}).observe($('#overlay'),{attributes:true,attributeFilter:['class']});
var KM={Space:' ',KeyE:'e'};
function padKey(code,down){var w=frameEl&&frameEl.contentWindow;if(!w)return;try{w.dispatchEvent(new w.KeyboardEvent(down?'keydown':'keyup',{code:code,key:KM[code]||code,bubbles:true}))}catch(e){}}
var held={};
$('#pad').addEventListener('pointerdown',function(e){
  var b=e.target.closest('[data-k]');if(!b)return;e.preventDefault();
  try{b.setPointerCapture(e.pointerId)}catch(x){}
  held[e.pointerId]=b.dataset.k;b.classList.add('on');padKey(b.dataset.k,true);
});
['pointerup','pointercancel'].forEach(function(ev){$('#pad').addEventListener(ev,function(e){
  var k=held[e.pointerId];if(!k)return;delete held[e.pointerId];padKey(k,false);
  var b=$('#pad').querySelector('[data-k="'+k+'"]');if(b)b.classList.remove('on');
})});
$('#padBtn').onclick=function(){jset('pp-pad',jget('pp-pad','on')==='off'?'on':'off');setPad()};
window.addEventListener('resize',detect);window.addEventListener('orientationchange',detect);
detect();
