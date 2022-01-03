var menuIcon = document.querySelector(".icon-hamburger");
var header = document.querySelector("section.header");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  header.classList.toggle("active");
});

var mobileNav = document.querySelector("mobile-nav-links");
var links = mobileNav.children;

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", () => {
    menuIcon.classList.remove(".active");
    header.classList.remove(".active");
  });
}
