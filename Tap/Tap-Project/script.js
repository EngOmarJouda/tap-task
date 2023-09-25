

function toggleNav() {
  var navLinks = document.querySelector(".nav-mobile");
  var bg = document.querySelector(".bg");
  navLinks.classList.toggle("active");
  bg.classList.toggle("active");
 
}
let nav_logo = document.getElementById("nav-logo");
let nav_toggler = document.querySelector(".nav-toggler");
if (window.innerWidth <= 992) {
  

  nav_toggler.style.color="#008aaa";
} else {
  nav_toggler.style.color="#008aaa";
}
window.addEventListener("resize", function () {
  if (window.innerWidth <= 992) {

    nav_toggler.style.color="#008aaa";

  } else {
    nav_toggler.style.color="#008aaa";
  }
});

window.addEventListener("scroll", function () {
  if (window.innerWidth <= 992) {
   
    if (window.scrollY >= 140) {
      let header = document.querySelector("header");
      nav_toggler.style.color="#008aaa";

    } else {
      nav_toggler.style.color="#008aaa";
    }
  } else {
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const readMoreLinks = document.querySelectorAll(".read-more");

  readMoreLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const moreContent = this.previousElementSibling;
      moreContent.classList.toggle("show");
      if (moreContent.classList.contains("show")) {
        this.textContent = "see Less";
      } else {
        this.textContent = "see More";
      }
    });
  });
});



