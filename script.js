let result = document.getElementById("result");
let button = document.getElementById("getAnswer");
let animationElement = document.getElementById("animation");
window.onload = function() {
    let rotate = 0;
    animationElement.classList.add("animation");
    setInterval(() => {
        rotate+=10;
        animationElement.style.transform = `rotate(${rotate}deg)`
    }, 60)
}
button.onclick = function() {
    let img = result.firstElementChild;
    img.remove();
    let answers = ["Да", "Нет"];
    let num = Math.round(Math.random());
    let total = answers[num];
    result.textContent = total;
    console.log(num);
}