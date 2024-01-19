// JavaScript source code

class Duck {
    constructor(name, color, age, weight, photo) {
        this.name = name;
        this.color = color;
        this.age = age;
        this.weight = weight;
        this.photo = photo;
    }

    show() {
        return `Name: ${this.name} Color: ${this.color}  Age: ${this.age} Weight: ${this.weight}<br><img src="${URL.createObjectURL(this.photo)}" alt="${this.name}" width="50" height="50">`;
    }

    quack() {
        const quackCount = Math.round((this.age * this.weight) / 2);
        let quacks = "";

        for (let i = 0; i < quackCount; i++) {
            quacks += "Quack ";
        }
        quacks = quacks.trim();
        return quacks;
    }
}

let duck;
const duckDetailsParagraph = document.getElementById("duckDetails");
const showButton = document.getElementById("showButton");
const quackButton = document.getElementById("quackButton");
const createButton = document.querySelector("#duckForm button");

function createDuck() {
    const name = document.getElementById("name").value;
    const color = document.getElementById("color").value;
    const age = parseInt(document.getElementById("age").value);
    const weight = parseInt(document.getElementById("weight").value);
    const photoInput = document.getElementById("photo");
    const photo = photoInput.files[0];

    if (!name || !color || isNaN(age) || isNaN(weight) || !photo) {
        alert("Please fill in all the fields, including selecting a photo.");
        return;
    }

    duck = new Duck(name, color, age, weight, photo);
    duckDetailsParagraph.innerHTML = "";
    showButton.disabled = false;
    quackButton.disabled = false;
    createButton.disabled = true;
}

function showDuckDetails() {
    duckDetailsParagraph.innerHTML = duck.show();
}

function quack() {
    duckDetailsParagraph.innerHTML = duck.quack();
    let audio1 = new Audio("Quack.mp3");
    let audio2 = new Audio("Quack.mp3");
    let audio3 = new Audio("Quack.mp3");
    audio1.play();
    audio1.addEventListener("ended", () => {
        audio2.play();
    });
    audio2.addEventListener("ended", () => {
        audio3.play();
    });
}
