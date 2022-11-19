/* eslint-disable */
import "bootstrap";
import "./style.css";

const numeros = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];
const palos = ["corazon", "diamante", "pica", "trebol"];

let topIcon = document.querySelector(".topIcon");
let numero = document.querySelector(".numero");
let lowerIcon = document.querySelector(".lowerIcon");
let myText = document.querySelector("h1");
let botones = document.getElementById("contenedordemenu");
let contenedorInput = document.getElementById("contenedorinput");

window.onload = function randomCardgenerator() {
  setTimeout(randomCardgenerator, 10000);
  let randomNum = numeros[Math.floor(Math.random() * (numeros.length - 1))];
  let currentClove = palos[Math.floor(Math.random() * palos.length)];
  botones.innerHTML = `<button type="button" id="randomCardgenerator" class="btn">Choose random card</button>`;
  contenedorInput.innerHTML = `<input placeholder="Set your own width"></input>`;

  numero.innerHTML = randomNum;
  myText.innerHTML = "Your lucky card";

  if (currentClove === "corazon") {
    topIcon.innerHTML = "♥";
    lowerIcon.innerHTML = "♥";
    topIcon.style.color = "lightpink";
    topIcon.style.textShadow = "5px 5px 1px #ff0000";
    lowerIcon.style.color = "lightpink";
    lowerIcon.style.textShadow = "5px 5px 1px #ff0000";
  }
  if (currentClove === "diamante") {
    topIcon.innerHTML = "♦";
    lowerIcon.innerHTML = "♦";
    topIcon.style.color = "lightpink";
    topIcon.style.textShadow = "5px 5px 1px #ff0000";
    lowerIcon.style.color = "lightpink";
    lowerIcon.style.textShadow = "5px 5px 1px #ff0000";
  }
  if (currentClove === "pica") {
    topIcon.innerHTML = "♠";
    lowerIcon.innerHTML = "♠";
    topIcon.style.color = "lightpink";
    topIcon.style.textShadow = "5px 5px 1px #000000";
    lowerIcon.style.color = "lightpink";
    lowerIcon.style.textShadow = "5px 5px 1px #000000";
  } else if (currentClove === "trebol") {
    topIcon.innerHTML = "♣";
    lowerIcon.innerHTML = "♣";
    topIcon.style.color = "lightpink";
    topIcon.style.textShadow = "5px 5px 1px #000000";
    lowerIcon.style.color = "lightpink";
    lowerIcon.style.textShadow = "5px 5px 1px #000000";
  }
  let mybutton = document.querySelector(".btn");
  mybutton.addEventListener("click", e => {
    randomCardgenerator();
  });
};
