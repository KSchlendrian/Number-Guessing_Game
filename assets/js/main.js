"use strict";

const radioBtns = document.querySelector("#buttons");
const btns = document.querySelectorAll("#buttons input");
const btnD = document.querySelector("#d");
const custom = document.querySelector(".custom");
const userPick = document.querySelector("#user_pick");
const output = document.querySelector("#output");
const guess = document.querySelector("#guess");
const restart = document.querySelector("#restart");

let roundNum = 0;
let roundMax;
let ranNum;

// # Numberrandomizer
const ranNumGen = () => {
  return Math.ceil(Math.random() * 100);
};

// # Costumeingabe
btnD.addEventListener("click", () => {
  custom.insertAdjacentHTML(
    "beforeend",
    `<input type="number" id="customPick"></input>`
  );
  let customPick = document.querySelector("#customPick").value;
});

// # Rundenauswahl
const roundPick = () => {
  if (btns[0].checked) {
    roundMax = 4;
  } else if (btns[1].checked) {
    roundMax = 5;
  } else if (btns[2].checked) {
    roundMax = 6;
  } else if (btns[3].checked) {
    roundMax = customPick;
  }
};

// # Radiobuttons ersetzen
const radioButtonsVanish = () => {
  radioBtns.innerHTML = `${roundNum} / ${roundMax}`;
};

// # Vergleich User v CPU
const comparisonUserComp = () => {
  const userPickVal = Number(userPick.value);

  if (userPickVal === ranNum) {
    output.insertAdjacentHTML(
      "beforeend",
      `<p>You picked ${userPickVal}! You Win!</p>`
    );
  } else if (userPickVal < ranNum) {
    output.insertAdjacentHTML(
      "beforeend",
      `<p>You picked ${userPickVal}! Go higher!</p>`
    );
  } else {
    output.insertAdjacentHTML(
      "beforeend",
      `<p>You picked ${userPickVal}! Go lower!</p>`
    );
  }
  console.log(ranNum);
};

// # Restart
restart.addEventListener("click", () => {
  roundNum = 0;
});

// # Gamelogic
const gameLogic = () => {
  if (roundNum === 0) {
    ranNum = ranNumGen();
    roundPick();
  }
  if (roundNum === roundMax) {
    return;
  }
  comparisonUserComp();
  roundNum++;
  radioButtonsVanish();
  // restart();
};

// # Ausführen der Gamelogic
guess.addEventListener("click", gameLogic);
