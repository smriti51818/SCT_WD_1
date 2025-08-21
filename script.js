
window.addEventListener("scroll", function() {
  let navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


let menuToggle = document.getElementById("menu-toggle");
let navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function() {
  navLinks.classList.toggle("active");
});
