/** active header when window scroll down to 100px **/
const header = document.querySelector("header");
const headerContainer = document.querySelector(".header-container");
const boxShadowValue = "5px 5px 5px hsla(216, 14%, 14%, 0.05)"
window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    header.style.backgroundColor = "#fff";
    header.style.paddingTop = "5px";
    header.style.paddingBottom = "5px";
    header.style.boxShadow = boxShadowValue;
    headerContainer.style.boxShadow = ""
    headerContainer.style.paddingLeft = "0px";
    headerContainer.style.paddingRight = "0px";
  } else {
    header.style.backgroundColor = "#f6f7f9";
    header.style.paddingTop = "15px";
    header.style.paddingBottom = "15px";
    header.style.boxShadow = ""
    headerContainer.style.boxShadow = boxShadowValue;
    headerContainer.style.paddingLeft = "20px";
    headerContainer.style.paddingRight = "20px";
  }
});

// Hamburger
const hamMenu = document.querySelector(".hamburger-menu");
const offScreenMenu = document.querySelector(".nav-links");
hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

// Footer Date Update
const currentYearContainer = document.querySelector(".currentYearContainer")
const date = new Date()
const currentYear = date.getFullYear()
currentYearContainer.innerText = currentYear