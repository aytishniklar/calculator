const btn = document.getElementById("xisoblash");
const summa = document.getElementById("summa");
const foiz = document.getElementById("foiz");
const jami = document.getElementById("jami");

function foizxisoblash(){
    const summa1 = summa.value;
    const foiz1 = foiz.value;
    const jami1 = summa1 * (1 + foiz1 / 100);
    jami.innerText = jami1.toFixed(2);
}
btn.addEventListener("click", foizxisoblash);