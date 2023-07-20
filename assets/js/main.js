"use strict";

const btns = document.querySelectorAll("#buttons");
const userPick = document.querySelector("#user_pick");
const output = document.querySelector("#output");
const guess = document.querySelector("#guess");
let roundNum = 0;
let roundMax;
let ranNum;

// # Numberrandomizer
const ranNumGen = () => {
  return Math.ceil(Math.random() * 100);
};

// # Runden
const roundPick = () => {
  roundMax = document.querySelector("input:checked").value;
  console.log(roundMax);
};

// # Vergleich User v CPU
const comparisonUserComp = () => {
  const userPickVal = Number(userPick.value);

  if (userPickVal === ranNum) {
    output.textContent = `You Win!`;
  } else if (userPickVal < ranNum) {
    output.textContent = `go higher`;
  } else {
    output.textContent = `go lower`;
  }
  console.log(ranNum);
};

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
};

// # Ausführen der Gamelogic
guess.addEventListener("click", gameLogic);
