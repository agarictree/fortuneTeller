let result = document.getElementById("result");
let answer = document.getElementById("answer");
let button = document.getElementById("getAnswer");
let container = document.querySelector(".container");
let animationElement = document.getElementById("animation");

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

button.onclick = function() {
    let img = result.firstElementChild;
    img.remove();
    let answers = ["Да", "Нет", "Неизвестно"];
    let num = getRandomIntInclusive(0, answers.length - 1)
    let total = answers[num];
    let textBlock = document.createElement("div");
    let p = document.createElement("p");  
    p.textContent = total;
    textBlock.append(p);
    result.append(textBlock);
    textBlock.id = "answerText";
    setTimeout(() => {
        textBlock.remove();
        result.append(img);
    }, 10000);
}
