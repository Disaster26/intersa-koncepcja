(function(){
  var b=document.querySelector('.burger');
  if(b){b.addEventListener('click',function(){
    var o=document.documentElement.classList.toggle('menu-open');
    b.setAttribute('aria-expanded',o?'true':'false');
  });}
  document.querySelectorAll('.mnav a').forEach(function(a){a.addEventListener('click',function(){document.documentElement.classList.remove('menu-open');});});
  // przeciąganie myszą
  document.querySelectorAll('.rail,.gal').forEach(function(r){
    var down=false,sx=0,sl=0,moved=false;
    r.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;moved=false;sx=e.clientX;sl=r.scrollLeft;});
    window.addEventListener('pointermove',function(e){if(!down)return;var d=e.clientX-sx;if(Math.abs(d)>5){moved=true;r.classList.add('drag');}r.scrollLeft=sl-d;});
    window.addEventListener('pointerup',function(){if(!down)return;down=false;setTimeout(function(){r.classList.remove('drag');},0);});
    r.addEventListener('click',function(e){if(moved){e.preventDefault();moved=false;}},true);
    r.addEventListener('dragstart',function(e){e.preventDefault();});
  });
  document.querySelectorAll('[data-rail]').forEach(function(n){
    var r=document.getElementById(n.getAttribute('data-rail'));
    n.querySelectorAll('button').forEach(function(btn){btn.addEventListener('click',function(){
      var c=r.querySelector('.card');var w=c?c.getBoundingClientRect().width+16:300;
      r.scrollBy({left:(btn.dataset.dir==='prev'?-1:1)*w,behavior:'smooth'});
    });});
  });
  // pasek telefonu po zjechaniu z pierwszego ekranu
  var cb=document.querySelector('.callbar');
  if(cb){var f=function(){cb.classList.toggle('on',window.scrollY>window.innerHeight*.8);};window.addEventListener('scroll',f,{passive:true});f();}
  // formularz pokazowy
  var fm=document.querySelector('.form');
  if(fm){fm.addEventListener('submit',function(e){e.preventDefault();var d=fm.querySelector('.demo');if(d)d.textContent='To jest wersja pokazowa - formularz zacznie wysyłać wiadomości na stronie docelowej.';});}
})();
