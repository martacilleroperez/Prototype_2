import '../../public/style.css'

document.querySelector('#app').innerHTML = `
<section id="center">

  <div id="black-overlay"></div>

  <img 
    class="layer bg" 
    src="/images/intro_option_2.png" 
    alt="Background"
  >

</section>

<!-- buttons container -->
<div class="fab-container">

  <button 
    class="fab-btn" 
    data-target="/experiential_web/characters/Pull.html"
  >
    <img src="/images/btn_arlech.png" alt="Char 1">
  </button>
 
  <button 
    class="fab-btn" 
    data-target="/experiential_web/characters/Sold.html"
  >
    <img src="/images/btn_soldier.png" alt="Char 3">
  </button>

</div>
`

// Black overlay
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

}