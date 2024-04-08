{
  {
    let tagSx = document.getElementById("sinistra");
    let tagDx = document.getElementById("destra");
    let tagBottom = document.getElementById("button");
    let Yell = "yellow";
    let Viol = "blueviolet";
    let Yell1 = "yellow";
    let Viol1 = "blueviolet";
    let tondoSx = document.getElementById("sx");
    let tondoDx = document.getElementById("dx");

    tagBottom.addEventListener("click", function (event) {
      let temp = Yell;
      Yell = Viol;
      Viol = temp;

      tagSx.style.background = Yell;
      tagDx.style.background = Viol;

      let temp1 = Viol1;
      Viol1 = Yell1;
      Yell1 = temp1;

      tondoSx.style.background = Viol1;
      tondoDx.style.background = Yell1;
    });
  }
}
