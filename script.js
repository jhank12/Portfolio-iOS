const hamburgerIcon = document.querySelector("#landing svg");
const mobileNav = document.querySelector(".mobileNav");
const links = document.querySelector(".mobileNav ul");

hamburgerIcon.addEventListener("click", function (e) {
  mobileNav.classList.remove("hidden");
});

links.addEventListener("click", function (e) {
  setTimeout(() => {
    mobileNav.classList.add("hidden");
  }, 500);
});
