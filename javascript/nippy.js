// Scroll To The Top
const mybutton = document.getElementById("myBtn");

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user scrolls down 500px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// MODAL  Popup
// Get All Elements
const modal = document.getElementById("nippy-modal");
const seeMoreBtn = document.getElementById("nippy-modalBtn");
const closeBtn = document.getElementById("nippy-closeBtn");

// function to open modal
function openModal() {
  modal.style.display = "block";
}
// function to Close modal
function closeModal() {
  modal.style.display = "none";
}

// Listen for open click
seeMoreBtn.addEventListener("click", openModal);
// Listen For Close click
closeBtn.addEventListener("click", closeModal);

//Light and Dark Mode (Get all variables)
const ldIcon = document.querySelector(".fa-sun");
const siteTitle = document.querySelector(".title");
const siteTns = document.querySelector(".tns");
const siteHireME = document.querySelector(".hire-me");
const siteConnectSection = document.querySelector(".connect-section");
const siteFormBGColor = document.querySelectorAll(".form-control");
const siteNavBar = document.querySelector(".navbar-dark");
const hireMeDiv = document.querySelectorAll(".hire-spec");
const footSection = document.querySelector(".footer-section");

//function to switch to Light Mode
function switchToLight() {
  //Toggle the Mode Icons
  ldIcon.classList.toggle("fa-moon");
  ldIcon.classList.toggle("fa-sun");

  //Toggle Navbar
  siteNavBar.classList.toggle("navbar-light");
  siteNavBar.classList.toggle("navbar-dark");

  //Toggle the title Section
  siteTitle.classList.toggle("light-mode");
  siteTitle.classList.toggle("title");

  //Toggle the tech & Skills Section
  siteTns.classList.toggle("light-mode");
  siteTns.classList.toggle("tns");

  //Toggle the hire-me section
  siteHireME.classList.toggle("light-mode");
  siteHireME.classList.toggle("hire-me");

  //Toggle the Connect Section
  siteConnectSection.classList.toggle("light-mode");
  siteConnectSection.classList.toggle("connect-section");

  //Toggle Footer Section
  footSection.classList.toggle("light-mode");
  footSection.classList.toggle("footer-section");
  footSection.style.textAlign = "center";
  footSection.style.fontFamily = "Source Sans Pro";
  footSection.style.fontSize = "1.2rem";
  footSection.style.padding = "20px 0";

  //Change Form Input Bg-color, Brand Logo
  if (document.getElementById("ld-icon").classList.contains("fa-moon")) {
    siteTns.style.padding = "5rem 0";

    //For Form Inputs
    siteFormBGColor.forEach((siteFormBGColor) => {
      siteFormBGColor.style.backgroundColor = "#f2f2f2";
    });

    //For Hire Me Div Specs
    hireMeDiv.forEach((hireMeDiv) => {
      hireMeDiv.style.backgroundColor = "#f2f2f2";
    });

    //For Brand Logo
    document.getElementById("nippylogoswitch").src =
      "images/Brand/NIPPYSKY-BRAND-LOGO-DARK.svg";
  } else {
    //For Form Inputs
    siteFormBGColor.forEach((siteFormBGColor) => {
      siteFormBGColor.style.backgroundColor = "#090809";
    });

    //For Hire Me Div Specs
    hireMeDiv.forEach((hireMeDiv) => {
      hireMeDiv.style.backgroundColor = "#090809";
    });

    //For Brand Logo
    document.getElementById("nippylogoswitch").src =
      "images/Brand/NIPPYSKY-BRAND-LOGO.svg";
  }
}

var date = new Date().getFullYear();
var footDateElement = document.getElementById("dynamic-date");
footDateElement.innerHTML = "NIPPYSKY @ " + date;
