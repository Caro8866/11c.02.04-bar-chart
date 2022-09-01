"use strict";

window.addEventListener("load", init());

// Customer data
const model = [17, 16, 19, 18, 8, 32, 25, 26, 22, 29, 16, 25, 10, 32, 4, 31, 1, 21, 23, 8, 22, 27, 3, 32, 1, 6, 8, 27, 1, 19, 1, 17, 25, 4, 0, 22, 28, 19, 32, 1];
let randomNum = "";
function init() {
  console.log("initiate");
  loop();
}
function loop() {
  console.log("loop");
  let i;

  for (i = 0; i <= 40; i++) {
    console.log("looping");
    let bar;
    bar = document.createElement("div");
    bar.classList.add("bar");
    getRandomNumberOfCustomers();
    // bar.style.height = randomNum + "px";
    document.querySelector("#bars").appendChild(bar);
  }
}

function getRandomNumberOfCustomers() {
  let randomNum = Math.floor(Math.random() * 32);
  console.log(randomNum);
}

function displayData() {}
function modifyModel() {}
