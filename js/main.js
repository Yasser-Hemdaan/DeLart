let collapse = document.querySelector(".icon-navicon");
let navBody = document.querySelector(".navBody");
let closeBtn = document.querySelector(".icon-close");
let pageParent = document.querySelector(".pageParent");
let nav = document.querySelector(".nav");
let homeNav = document.querySelector(".homeNav");
let upArrow = document.querySelector(".icon-arrow-up");
let downArrow = document.querySelector(".icon-arrow-down");
let sliedCollection = document.querySelector(".sliedCollection");
let slideMove = 0;

collapse.addEventListener("click", (ev) => {
  navBody.style.top = "0";
  pageParent.style.filter = "blur(0.75rem)";
});

closeBtn.addEventListener("click", (ev) => {
  navBody.style.top = "";
  pageParent.style.filter = "";
});

window.addEventListener("scroll", (ev) => {
  if (window.scrollY > 20) {
    nav.style.top = "0";
  } else {
    nav.style.top = "";
  }
});

upArrow.addEventListener("click", (ev) => {
  if (slideMove > "-465") {
    slideMove = slideMove - 155;
    sliedCollection.style.top = slideMove + "px";
    console.log(slideMove);
  }
});

downArrow.addEventListener("click", (ev) => {
  if (slideMove < "0") {
    slideMove = slideMove + 155;
    sliedCollection.style.top = slideMove + "px";
    console.log(slideMove);
  }
});
