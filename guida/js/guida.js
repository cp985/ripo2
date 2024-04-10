{
  {
    {
    }
    let buttonTag = document.getElementById("bottone");
    let esitoTag = document.getElementById("esito");
    let inputTag = document.getElementById("eta");
    buttonTag.addEventListener("click", function () {
      let input = inputTag.value;
      let tagErrore = document.getElementById("errore");
      if (input > 14) {
        esitoTag.innerHTML =
          "Puoi guidare il motorino....se te lo comprano ;)";
         tagErrore.style.opacity = 0;;
         esitoTag.style.opacity = 1;
          if (input > 17) {
          esitoTag.innerHTML =
            "Puoi guidare un auto......o anche un carro armato volendo ;)";
            tagErrore.style.opacity = 0;
            esitoTag.style.opacity = 1;
          }
      } else {
        esitoTag.innerHTML =
          "Per ora vai a piedi che ti fa bene ;)";
          tagErrore.style.opacity = 0;
          esitoTag.style.opacity = 1;
        }
      if (input <=-1) {
        esitoTag.innerHTML = "Età non valida";
        tagErrore.style.opacity = 0;
        esitoTag.style.opacity = 1;
      }
      if (isNaN(input)) {
        esitoTag.innerHTML = "Inserisci un numero!";
        tagErrore.style.opacity = 0;
        esitoTag.style.opacity = 1;
      }
      if (input.length ===0) {

        tagErrore.style.opacity = 1;
        esitoTag.style.opacity = 0;
        tagErrore.innerHTML =`\b Errore: inserisci un valore valido`;

      }
    });
  }
}
