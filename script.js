let result = document.getElementById("result");
let answer = document.getElementById("answer");
let button = document.getElementById("getAnswer");
let animationElement = document.getElementById("animation");

let coords = answer.getBoundingClientRect();
console.log(coords);

let resultCoords = result.getBoundingClientRect();
console.log(resultCoords);

result.style.top = (coords.height / 2) - (resultCoords.height / 2) + "px";
result.style.left = (coords.width / 2) - (resultCoords.width / 2) + "px";

let animationElementCoords = animationElement.getBoundingClientRect();

animationElement.style.top = (coords.height / 2) - (animationElementCoords.height / 2) + "px";
animationElement.style.left = (coords.width / 2) - (animationElementCoords.width / 2) + "px"

window.onresize = () => {
    let coords = answer.getBoundingClientRect();
    let resultCoords = result.getBoundingClientRect();
    result.style.top = (coords.height / 2) - (resultCoords.height / 2) + "px";
    result.style.left = (coords.width / 2) - (resultCoords.width / 2) + "px";

    animationElement.style.top = (coords.height / 2) - (animationElementCoords.height / 2) + "px";
    animationElement.style.left = (coords.width / 2) - (animationElementCoords.width / 2) + "px"
}

window.onload = function() {
    let rotate = 0;
    animationElement.classList.add("animation");
    setInterval(() => {
        rotate+=10;
        animationElement.style.transform = `rotate(${rotate}deg)`
    }, 60);
}

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
        // let img = document.createElement("img");
        // img.src = "images/03.png";
        // img.id = "getAnswer";
        result.append(img);
    }, 1000);
}
