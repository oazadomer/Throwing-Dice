let randomNum1 = Math.floor(Math.random() * 6) + 1;
let randomImage1 = "dice" + randomNum1 + ".png";
let randomSource1 = "images/" + randomImage1;

let randomNum2 = Math.floor(Math.random() * 6) + 1;
let randomImage2 = "images/dice" + randomNum2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomSource1);
document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

if (randomNum1 > randomNum2) {
  document.querySelector("h1").textContent = " 🚩 Player 1 wins";
} else if (randomNum2 > randomNum1) {
  document.querySelector("h1").textContent = " 🚩 Player 2 wins";
} else {
  document.querySelector("h1").textContent = "Draw";
}

let button = document.querySelector("button");

button.addEventListener("click", () => location.reload());
