const button = document.querySelector(".btn");
const displayhex = document.querySelector(".hex-code");
const background = document.querySelector("body");


let getRandomHex = () => {
    const hexColor = '#' + Math.random().toString(16).slice(9);
    displayhex.textContent = hexColor;
    background.style.backgroundColor = hexColor;
}

button.addEventListener("click", getRandomHex);
window.addEventListener("load", getRandomHex);






// Solution for random hex code using for loop
// const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]
// let hexColor = "#"
// for(let i = 0; i < 6; i++) {
//     hexColor += hex[Math.floor(Math.random() * hex.length)]
// }


