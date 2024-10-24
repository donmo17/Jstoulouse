//VARIABLES

const body = document.querySelector("body");
const compteur = document.querySelector("#count");
const sub = document.querySelector("#substract");
const add = document.getElementById("add");
const reset = document.querySelector("#reset");
const darkMode = document.querySelector("#theme");
let afterCount = 0;

//FONCTIONS

call = () => {
    if (afterCount < 0) {
        compteur.classList.remove("reset");
        compteur.classList.remove("add");
        compteur.classList.add("sub");
    } else if (afterCount > 0) {
        compteur.classList.remove("reset");
        compteur.classList.remove("sub");
        compteur.classList.add("add");
    } else {
        compteur.classList.remove("sub");
        compteur.classList.remove("add");
        compteur.classList.add("reset");
    }
    console.log(afterCount);
};

//EVENTS

sub.addEventListener("click", () => {
    compteur.innerHTML--;
    afterCount = compteur.innerHTML;
    call();
});

add.addEventListener("click", () => {
    compteur.innerHTML++;
    afterCount = compteur.innerHTML;
    call();
});

reset.addEventListener("click", () => {
    compteur.innerHTML = 0;
    afterCount = compteur.innerHTML;
    call();
});

darkMode.addEventListener("click", () => {
    body.classList.toggle("nightMode");
    if (body.classList.contains("nightMode")) {
        darkMode.innerHTML = "🌞";
    } else {
        darkMode.innerHTML = "🌜";
    }
});
