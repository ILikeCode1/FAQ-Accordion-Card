let questionOne = document.getElementById("question1");
let answerOne = document.querySelector(".A1");
let arrowOne = document.querySelector(".arrow1");

let questionTwo = document.getElementById("question2");
let answerTwo = document.querySelector(".A2");
let arrowTwo = document.querySelector(".arrow2");

let questionThree = document.getElementById("question3");
let answerThree = document.querySelector(".A3");
let arrowThree = document.querySelector(".arrow3");

let questionFour = document.getElementById("question4");
let answerFour = document.querySelector(".A4");
let arrowFour = document.querySelector(".arrow4");

let questionFive = document.getElementById("question5");
let answerFive = document.querySelector(".A5");
let arrowFive = document.querySelector(".arrow5");

//FAQ
questionOne.addEventListener("click", q1Dropdown);

function q1Dropdown() {
  if (answerOne.style.display == "none") {
    answerOne.style.display = "block";
    arrowOne.style.rotate = "180deg";
  } else {
    answerOne.style.display = "none";
    arrowOne.style.rotate = "0deg";
  }
}

questionTwo.addEventListener("click", q2Dropdown);

function q2Dropdown() {
  if (answerTwo.style.display == "none") {
    answerTwo.style.display = "block";
    arrowTwo.style.rotate = "180deg";
  } else {
    answerTwo.style.display = "none";
    arrowTwo.style.rotate = "0deg";
  }
}

questionThree.addEventListener("click", q3Dropdown);

function q3Dropdown() {
  if (answerThree.style.display == "none") {
    answerThree.style.display = "block";
    arrowThree.style.rotate = "180deg";
  } else {
    answerThree.style.display = "none";
    arrowThree.style.rotate = "0deg";
  }
}

questionFour.addEventListener("click", q4Dropdown);

function q4Dropdown() {
  if (answerFour.style.display == "none") {
    answerFour.style.display = "block";
    arrowFour.style.rotate = "180deg";
  } else {
    answerFour.style.display = "none";
    arrowFour.style.rotate = "0deg";
  }
}

questionFive.addEventListener("click", q5Dropdown);

function q5Dropdown() {
  if (answerFive.style.display == "none") {
    answerFive.style.display = "block";
    arrowFive.style.rotate = "180deg";
  } else {
    answerFive.style.display = "none";
    arrowFive.style.rotate = "0deg";
  }
}
