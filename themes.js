"use strict";

const slider = document.querySelector(".slider");

const checkboxes = document.querySelectorAll(".switch-toggle__item");
const calcScreen = document.querySelector(".calc__screen--input");
const calcButton = document.querySelectorAll(".calc__row--col");
const calcToggle = document.querySelector(".slider");
const switchToggle = document.querySelector(".switch-toggle");
const credits = document.querySelector(".attribution");

//colors
const blueBG = "#3B4664";
const blueCalcBG = "#252D44";
const blueHeaderFont = "#FFFFFF";

const lightBG = "#E6E6E6";
const lightCalcBG = "#D3CDCD";
const lightHeaderFont = "#363731";

const partyBG = "#17062A";
const partyCalcBG = "#1D0833";
const partyHeaderFont = "#FFE679";

let currTheme = "blue";
let prevTheme;

[...checkboxes].forEach((box) =>
  box.addEventListener("click", function (e) {
    if (e.target.checked) {
      uncheckOthers(e.target);
      themeChange(e.target);
      moveSlider();
    }
  })
);

function uncheckOthers(clicked) {
  const name = clicked.getAttribute("type");
  [...checkboxes].forEach((other) => {
    if (other != clicked && other.getAttribute("type") == name)
      other.checked = false;
  });
}

function themeChange(clicked) {
  const theme = clicked.getAttribute("id");
  prevTheme = currTheme;
  currTheme = theme;

  document.body.style.backgroundColor = eval(`${currTheme}BG`);
  document.getElementById("header").style.color = eval(
    `${currTheme}HeaderFont`
  );
  document.getElementById("calc-bg").style.background = eval(
    `${currTheme}CalcBG`
  );

  calcScreen.classList.replace(
    `screen-input--${prevTheme}`,
    `screen-input--${currTheme}`
  );
  calcToggle.classList.replace(
    `slider-primary__${prevTheme}`,
    `slider-primary__${currTheme}`
  );
  switchToggle.classList.replace(
    `color__${prevTheme}bg`,
    `color__${currTheme}bg`
  );
  credits.classList.replace(
    `attribution__${prevTheme}`,
    `attribution__${currTheme}`
  );

  [...calcButton].forEach(function (btn) {
    btn.classList.replace(
      `calc__row--col-num-${prevTheme}`,
      `calc__row--col-num-${currTheme}`
    );
    btn.classList.replace(
      `calc__row--col-word-${prevTheme}`,
      `calc__row--col-word-${currTheme}`
    );
    btn.classList.replace(
      `calc__row--col-word2-${prevTheme}`,
      `calc__row--col-word2-${currTheme}`
    );
  });
}

function moveSlider() {
  slider.style.transition = "all 0.3s ease";
  //const name = clicked.getAttribute("type");
  if (currTheme === "blue") {
    slider.style.transform = "translateX(0px)";
  }
  if (currTheme === "light") {
    slider.style.transform = "translateX(21px)";
  }
  if (currTheme === "party") {
    slider.style.transform = "translateX(45px)";
  }
}
