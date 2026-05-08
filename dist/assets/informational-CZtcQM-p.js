(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),document.querySelector(`#app`).innerHTML=`
<section id="center">
  <img class="layer bg" src="/Prototype_2/images/intro_option_2.png" alt="Background">
</section>
<div class="fab-container">
  <button class="fab-btn" data-target="/Prototype_2/information_web/characters/Pull.html">
    <img src="/Prototype_2/images/btn_arlech.png" alt="Char 1">
  </button>
  <button class="fab-btn" data-target="/Prototype_2/information_web/characters/Sold.html">
    <img src="/Prototype_2/images/btn_soldier.png" alt="Char 3">
  </button>
</div>
`,requestAnimationFrame(()=>{let e=document.getElementById(`black-overlay`);document.querySelectorAll(`.fab-btn`).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.dataset.target;console.log(`navigating to:`,n),e?(e.classList.add(`active`),setTimeout(()=>{window.location.href=n},1e3)):window.location.href=n})})});