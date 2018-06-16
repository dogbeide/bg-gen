var body = document.querySelector("body");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var css = document.querySelector("h4");
var hexabet = '01234567890abcdef';

function setBackground() {
    body.style.background = `\
        linear-gradient(to right, ${color1.value}, ${color2.value})`;
    css.textContent = body.style.background + ";";
}

function randomize() {
    var rgb1 = "#";
    var rgb2 = "#";
    for (var i = 0; i < 6; i++) {
        rgb1 += hexabet[Math.floor(Math.random() * 16)];
        rgb2 += hexabet[Math.floor(Math.random() * 16)];
    }
    color1.value = rgb1;
    color2.value = rgb2;
    setBackground();
}

setBackground();

// color1.addEventListener("input", setBackGround);
// color2.addEventListener("input", setBackGround);

