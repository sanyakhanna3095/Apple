const menuIcon = document.getElementById("menu-icon");
const mobileNavbar = document.getElementById("mobile-navbar");

menuIcon.addEventListener("click", function () {
  mobileNavbar.classList.toggle("active");
  if (mobileNavbar.classList.contains("active") && window.innerWidth<1240) {
    mobileNavbar.style.display = "block";
  } else {
    mobileNavbar.style.display = "none";
  }
});


