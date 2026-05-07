import './style.css'

document.querySelector('#app').innerHTML = `
<section id="center">
  <img class="layer bg" src="./public/images/intro_option_3.png" alt="Background">
</section>

<!-- buttons container -->
<div class="fab-container">

  <button class="fab-btn" data-target="./characters/Pull">
    <img src="./public/images/btn_arlech.png" alt="Char 1">
  </button>
 
  <button class="fab-btn" data-target="./characters/Sold">
    <img src="./public/images/btn_soldier.png" alt="Char 3">
  </button>

</div>`

//Mask buttons + balck screen 
const overlay = document.getElementById("black-overlay");

if (overlay) {
  document.querySelectorAll(".fab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.target;

      overlay.classList.add("active");

      setTimeout(() => {
        window.location.href = target;
      }, 1000);
    });
  });
};