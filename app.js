const halloDiv = document.querySelector("#hallo")
const btnClick = document.querySelector("#btnClick")
const inpName = document.querySelector("#inpName")


btnClick.onclick = function() {
    halloDiv.innerHTML = `Hei ${inpName.value}, håper du har en fin dag!`
    halloDiv.style.color = "red"
    halloDiv.style.position = "absolute"
    halloDiv.style.bottom = "10"
    btnClick.style.display = "none"
}


// const halloDiv = document.querySelector("#hallo")
// const btnClick = document.querySelector("#btnClick")


// btnClick.onclick = function() {
//     if (halloDiv.innerHTML === "<h1>Hallo</h1>")
//         halloDiv.innerHTML = "";
//       else {
//         halloDiv.innerHTML = "<h1>Hallo</h1>";
//     }
// };
