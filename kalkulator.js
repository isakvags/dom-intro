const inpTall1 = document.querySelector("#inpTall1");
const inpTall2 = document.querySelector("#inpTall2");
const btnPluss = document.querySelector("#btnPluss");
const btnMinus = document.querySelector("#btnMinus");
const btnGange = document.querySelector("#btnGange");
const btnDivade = document.querySelector("#btnDivade");
const btnOpphoyd = document.querySelector("#btnOpphoyd");
const btnClear = document.querySelector("#btnClear");
const divresultat = document.querySelector("#resultat");

btnPluss.onclick = function() {
    let tall1 = Number (inpTall1.value);
    let tall2 = Number (inpTall2.value);
    let sum = tall1 + tall2;
    divresultat.innerHTML = sum;
}

btnMinus.onclick = function() {
    let tall1 = Number (inpTall1.value);
    let tall2 = Number (inpTall2.value);
    let sum = tall1 - tall2;
    divresultat.innerHTML = sum;
}

btnGange.onclick = function() {
    let tall1 = Number (inpTall1.value);
    let tall2 = Number (inpTall2.value);
    let sum = tall1 * tall2;
    divresultat.innerHTML = sum;
}

btnDivade.onclick = function() {
    let tall1 = Number (inpTall1.value);
    let tall2 = Number (inpTall2.value);
    let sum = tall1 / tall2;
    divresultat.innerHTML = sum;
}

btnOpphoyd.onclick = function() {
    let tall1 = Number (inpTall1.value);
    let tall2 = Number (inpTall2.value);
    let sum = tall1 ** tall2;
    divresultat.innerHTML = sum;
}

btnClear.onclick = function() {
    inpTall1.value = "";
    inpTall2.value = "";
    divresultat.innerHTML = "= ";
    inpTall1.focus();
}

inpTall1.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        inpTall2.focus();
    }
});