"use strict";

window.addEventListener("load", init());

// Customer data
function init() {
  console.log("initiate");
  loop();
}
function loop() {
  let model = [];
  console.log("loop");
  let i;

  for (i = 0; i <= 39; i++) {
    let bar;
    bar = document.createElement("div");
    bar.classList.add("bar");
    let randomNum = Math.floor(Math.random() * 32);
    bar.style.height = randomNum + "px";
    model.unshift(randomNum);
    document.querySelector("#bars").appendChild(bar);
    console.log(model);
  }
}

/* // Not needed??
function getRandomNumberOfCustomers() {
  let randomNum = Math.floor(Math.random() * 32);
  console.log(randomNum);
} */

// Not sure what to use these functions for?
function displayData() {}
function modifyModel() {}
