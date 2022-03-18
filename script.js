"use strict";

let secretNum = Math.floor(Math.random() * 20) + 1;
let val = 20; //chances
let high = 0;
const displaymssg = function (mssg) {
  document.querySelector(".message").textContent = mssg;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    displaymssg("No number Entered!!!!");
  } else if (guess < 0) {
    displaymssg("enter positive number between 1 and 20");
    val--;
    document.querySelector(".score").textContent = val;
  } else if (guess !== secretNum) {
    if (val <= 1) {
      displaymssg("Game lost");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.background = "red";
    } else {
      displaymssg(guess > secretNum ? "high" : "low");
      val--;
      document.querySelector(".score").textContent = val;
    }
  } else if (guess === secretNum) {
    if (val > 1) {
      document.querySelector(".number").textContent = secretNum;
      document.querySelector("body").style.background = "green";
      document.querySelector(".number").style.width = "25rem";
      displaymssg("Correct Number");
      if (val > high) {
        high = val;
        document.querySelector(".highscore").textContent = high;
      }
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  val = 20;
  document.querySelector(".score").textContent = 20;
  secretNum = Math.floor(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "#222";
  displaymssg("Start guessing");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
});
