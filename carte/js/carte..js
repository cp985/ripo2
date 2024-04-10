{
  {
    let tagBottone = document.getElementById("bottone");
    let tagPlayer = document.getElementById("player");
    let tagCpu = document.getElementById("cpu");
    let tagVittoria = document.getElementById("vittoria");
    let tagSconfitta = document.getElementById("sconfitta");

    tagBottone.addEventListener("click", function () {
      let numeroPlayer = (tagPlayer.innerHTML =
        Math.floor(Math.random() * 10) + 1);
      let numeroCpu = (tagCpu.innerHTML =
        Math.floor(Math.random() * 10) + 1);
      // let stileSconfitta = tagSconfitta.innerHTML

      if (numeroPlayer > numeroCpu) {
        tagVittoria.innerHTML = "Hai vinto!";
        tagSconfitta.innerHTML = "Cpu perde!";
        tagVittoria.style.textDecoration =
          "underline double";
        tagSconfitta.style.textDecoration = "none";
      }
      if (numeroPlayer < numeroCpu) {
        tagVittoria.innerHTML = "Hai perso!";
        tagSconfitta.innerHTML = "Cpu vince!";
        tagSconfitta.style.textDecoration =
          "underline double";
        tagVittoria.style.textDecoration = "none";
      }

      if (numeroPlayer == numeroCpu) {
        tagSconfitta.innerHTML = "Patta";
        tagVittoria.innerHTML = "Patta";
        tagVittoria.style.textDecoration = "none";
        tagSconfitta.style.textDecoration = "none";
      }
    });
  }
}
