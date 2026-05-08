document.querySelector('#app').innerHTML = `
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
`

requestAnimationFrame(() => {
  const overlay = document.getElementById("black-overlay");

  document.querySelectorAll(".fab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.target;
      console.log("navigating to:", target);
      if (overlay) {
        overlay.classList.add("active");
        setTimeout(() => {
          window.location.href = target;
        }, 1000);
      } else {
        window.location.href = target;
      }
    });
  });
});