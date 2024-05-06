const h2Tag = document.querySelector("h2");
const ulTag = document.querySelector("ul");
const liTag = document.querySelectorAll("li");
const h3Tag = document.querySelectorAll("h3");
const divTag = document.querySelector("div");
const arrayColori = [
  "colore1",
  "colore2",
  "colore3",
  "colore4",
  "colore5",
  "colore6",
];

for (let i = 0; i < liTag.length; i++) {
  for (let u = 0; u < arrayColori.length; u++) {
    liTag[i].classList.add(arrayColori[i]);

    for (let y = 0; y < h3Tag.length; y++) {
      h3Tag[y].textContent = `${getComputedStyle(
        liTag[i]
      ).getPropertyValue("background-color")}`;
      liTag[i].addEventListener("mouseover", onMouseOver);
    }
  }
}

function onMouseOver(e) {
  h2Tag.className = "";
  divTag.className = "";
  divTag.classList.add(e.currentTarget.classList);
  h2Tag.classList.add(e.currentTarget.classList);
}
