{
  {
    const sceltaSassoTag = document.querySelector(
      "img:nth-of-type(1)"
    );
    const sceltaCartaTag = document.querySelector(
      "img:nth-of-type(2)"
    );
    const sceltaForbiciTag = document.querySelector(
      "img:nth-of-type(3)"
    );
    const imgCpuTag = document.querySelector(
      ".scelta .imgCpu"
    );
    sceltaSassoTag.addEventListener("click", sceltasasso);

    const contatorePlayer = document.getElementById(
      "contatorePlayer"
    );
    const contatoreCpu =
      document.getElementById("contatoreCpu");
    function sceltasasso() {
      const risultato =
        document.getElementById("risultato");

      const numeroCasuale =
        Math.floor(Math.random() * 3) + 1;
      const bottoneResetTag =
        document.getElementById("resetButton");
      const contCpu = Number(contatoreCpu.textContent);
      const contPl = Number(contatorePlayer.textContent);

      sceltaCartaTag.style.display = "none";
      sceltaForbiciTag.style.display = "none";
      sceltaSassoTag.classList.remove("sasso");
      sceltaSassoTag.classList.add("dopoClick");
      imgCpuTag.classList.add("dopoClickCpu");
      imgCpuTag.classList.remove("imgCpu");
      bottoneResetTag.style.display = "block";

      if (numeroCasuale === 1) {
        imgCpuTag.src = "../object/sasso.png";
        risultato.innerHTML = "Pari";
      }
      if (numeroCasuale === 2) {
        imgCpuTag.src = "../object/carta.png";
        risultato.innerHTML = "Hai Perso!";
        contatoreCpu.textContent = contCpu + 1;
        imgCpuTag.classList.add("dopoClickCpuCarta");
      }
      if (numeroCasuale === 3) {
        imgCpuTag.src = "../object/forbice.png";
        risultato.innerHTML = "Hai Vinto!";
        contatorePlayer.textContent = contPl + 1;
      }
    }

    sceltaCartaTag.addEventListener("click", sceltacarta);

    function sceltacarta() {
      const risultato =
        document.getElementById("risultato");

      const numeroCasuale =
        Math.floor(Math.random() * 3) + 1;
      const bottoneResetTag =
        document.getElementById("resetButton");
      const contCpu = Number(contatoreCpu.textContent);
      const contPl = Number(contatorePlayer.textContent);

      sceltaSassoTag.style.display = "none";
      sceltaForbiciTag.style.display = "none";
      sceltaCartaTag.classList.remove("carta");
      sceltaCartaTag.classList.add("dopoClickCarta");
      imgCpuTag.classList.add("dopoClickCpu");
      imgCpuTag.classList.remove("imgCpu");
      bottoneResetTag.style.display = "block";

      if (numeroCasuale === 1) {
        imgCpuTag.src = "../object/sasso.png";
        risultato.innerHTML = "Hai Vinto!";
        contatorePlayer.textContent = contPl + 1;
      }
      if (numeroCasuale === 2) {
        imgCpuTag.src = "../object/carta.png";
        risultato.innerHTML = "Pari!";
        imgCpuTag.classList.add("dopoClickCpuCarta");
      }
      if (numeroCasuale === 3) {
        imgCpuTag.src = "../object/forbice.png";
        risultato.innerHTML = "Hai Perso!";
        contatoreCpu.textContent = contCpu + 1;
      }
    }

    sceltaForbiciTag.addEventListener(
      "click",
      sceltaforbici
    );

    function sceltaforbici() {
      const risultato =
        document.getElementById("risultato");

      const numeroCasuale =
        Math.floor(Math.random() * 3) + 1;
      const bottoneResetTag =
        document.getElementById("resetButton");
      const contCpu = Number(contatoreCpu.textContent);
      const contPl = Number(contatorePlayer.textContent);

      sceltaSassoTag.style.display = "none";
      sceltaCartaTag.style.display = "none";
      sceltaForbiciTag.classList.remove("forbici");
      sceltaForbiciTag.classList.add("dopoClick");
      imgCpuTag.classList.add("dopoClickCpu");
      imgCpuTag.classList.remove("imgCpu");
      bottoneResetTag.style.display = "block";

      if (numeroCasuale === 1) {
        imgCpuTag.src = "../object/sasso.png";
        risultato.innerHTML = "Hai Perso!";
        contatoreCpu.textContent = contCpu + 1;
      }
      if (numeroCasuale === 2) {
        imgCpuTag.src = "../object/carta.png";
        risultato.innerHTML = "Hai Vinto!!";
        contatorePlayer.textContent = contPl + 1;
        imgCpuTag.classList.add("dopoClickCpuCarta");
      }
      if (numeroCasuale === 3) {
        imgCpuTag.src = "../object/forbice.png";
        risultato.innerHTML = "Pari!";
      }
    }
    const bottoneResetTag =
      document.getElementById("resetButton");

    bottoneResetTag.addEventListener("click", reset);

    function reset() {
      sceltaSassoTag.style.display = "block";
      sceltaCartaTag.style.display = "block";
      sceltaForbiciTag.style.display = "block";
      sceltaForbiciTag.classList.remove("dopoClick");
      sceltaForbiciTag.classList.add("forbici");
      sceltaSassoTag.classList.remove("dopoClick");
      sceltaSassoTag.classList.add("sasso");
      sceltaCartaTag.classList.remove("dopoClickCarta");
      sceltaCartaTag.classList.add("carta");

      imgCpuTag.classList.remove("dopoClickCpuCarta");
      imgCpuTag.classList.add("imgCpu");
      imgCpuTag.classList.remove("dopoClickCpu");
      imgCpuTag.src = "../object/interrogativo.png";
      bottoneResetTag.style.display = "none";
    }
  }
}
