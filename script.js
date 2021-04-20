let result = document.getElementById("result");
let button = document.getElementById("getAnswer");
button.onclick = function() {
    let img = result.firstElementChild;
    img.remove();
    let answers = ["Да", "Нет"];
    let num = Math.round(Math.random());
    let total = answers[num];
    result.textContent = total;
    console.log(num);
}