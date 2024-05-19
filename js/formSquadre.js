const nomeTag = document.querySelector("input#nome");
const cognomeTag = document.querySelector("input#cognome");
const etaTag = document.querySelector("input#eta");
const squadreTag = document.querySelectorAll(
  "div.squadre input"
);
const buttonTag = document.querySelector("button#bottone");
const erroreTag = document.querySelector("h1.stato");
const paginaCarta = document.querySelector(
  "div.paginaCarta"
);
const cardTag = document.querySelector("div#carta");
const formTag = document.querySelector("form#login");
const imgToken = document.querySelector("img#token");

let nomeValore = formTag.elements["nome"];
let cognomeValore = formTag.elements["cognome"];
let etaValore = formTag.elements["eta"];
let squadreValore = formTag.elements["squadra"];

let regNome = new RegExp();
let regCognome = new RegExp();
let regEta = new RegExp();

regNome = /^[A-Z]{1}[a-z]*(\s{1}[A-Z]{1}[a-z]*)?$/;
regCognome = /^([A-Z]{1}[a-z]*)$/;
regEta = /^[1-9]|[1-9][0-9]|[1][0-4][0-9]|150$/;

formTag.addEventListener("submit", submit);

function submit(event) {
  event.preventDefault();

  if (
    regNome.test(nomeValore.value) &&
    regCognome.test(cognomeValore.value) &&
    regEta.test(etaValore.value)
  ) {
    paginaCartaF();
  } else {
    erroreTag.innerHTML = "Dati immessi non validi!";
  }
}

function paginaCartaF() {
  paginaCarta.style.display = "block";
  let numeroT = Math.floor(Math.random() * 3) + 1;
  if (numeroT === 1) {
    imgToken.src = "../object/pngegg1.png";
  } else if (numeroT === 2) {
    imgToken.src = "../object/pngegg2.png";
  } else {
    imgToken.src = "../object/pngegg3.png";
  }

  cardTag.textContent = `
  Ciao
${nomeValore.value} ${cognomeValore.value}.
di anni ${etaValore.value}.
tifoso della:
 ${squadre()}`;
}

function squadre() {
  let squadra = "";
  for (let i = 0; i < squadreValore.length; i++) {
    if (squadreValore[i].checked) {
      squadra += `${squadreValore[i].value}\n`;
    }
  }
  return squadra;
}
