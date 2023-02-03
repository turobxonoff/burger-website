// Navbar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

// Darkmode
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("darkmode").addEventListener("click", () => {
    document.body.classList.toggle("active");

    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark") ? "dark" : "light"
    );
  });

  if (localStorage.getItem("theme" === "dark")) {
    document.body.classList.add("dark");
  }
});

// Scroll Reveal
const sr = ScrollReveal( {
    origin: 'top',
    distance: '40px',
    duration: 1000,
    reset: true
});
sr.reveal('.home-text, .home-img, .about-text, .box, .services-box, .connect-box, .btn, .contact-box', {interval:200});