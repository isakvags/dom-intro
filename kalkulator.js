const inpTall1 = document.querySelector("#inpTall1");
const inpTall2 = document.querySelector("#inpTall2");
const btnPluss = document.querySelector("#btnPluss");
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