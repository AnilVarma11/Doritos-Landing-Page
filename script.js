const main = document.getElementById("myImage");
const body = document.getElementsByTagName("BODY")[0];
const content = document.querySelector(".content");
const all = document.querySelector(".all");

const black = document.querySelector(".black");
const yellow = document.querySelector(".yellow");
const red = document.querySelector(".red");
const brown = document.querySelector(".brown");


function change() {
    main.src = "images/black.png";
    body.style.backgroundColor = "black";
    body.style.color = "#fff";
    all.style.color = "#000";
    all.style.backgroundColor = "#fff";
}

function change1() {
    main.src = "images/Blue.png";
    body.style.backgroundColor = "#006aa5";
    body.style.color = "#fff";
    all.style.color = "#fff";
    all.style.backgroundColor = "#000";
}

function change2() {
    main.src = "images/Yellow.png";
    body.style.backgroundColor = "yellow";
    body.style.color = "#000";
    all.style.color = "#fff";
    all.style.backgroundColor = "#000";
}

function change3() {
    main.src = "images/Red.png";
    body.style.backgroundColor = "red";
    body.style.color = "#fff";
    all.style.color = "#fff";
    all.style.backgroundColor = "#000";
}

function change4() {
    main.src = "images/Brown.png";
    body.style.backgroundColor = "#7b1b19";
    body.style.color = "#fff";
    all.style.color = "#fff";
    all.style.backgroundColor = "#000";
}