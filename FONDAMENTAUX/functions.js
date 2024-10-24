'use strict';

/*===============================
LES FONCTIONS
================================*/

// Déclarer une fonction


const sum = add(2, 3);
//console.log('Somme = ', sum);

// Expression de fonction
const multiply = function (a, b) {
    return a * b;
}

const result = multiply(2, 3);
//console.log("Produit = ", result);

/*--------------------------------
 Fonctions fléchées
---------------------------------*/

// 0 paramètre
let bonjour = () => {
    console.log('bonjour !');
};

//bonjour();

// 1 paramètre
let parity = n => {
    const message = n % 2 === 0 ? 'nombre pair' : 'nombre impair';
    console.log(message);
};

//parity(7); // nombre impair


// 2 paramètres
let substract = (a, b) => {
    return a - b;
};

let result2 = substract(5, 7);
//console.log(result2); // -2

/*--------------------------------
 Fonction IIFE
---------------------------------*/
// Immediately Invoked Function Expression

(function () {
    console.log('Bienvenue !');
})();

/*--------------------------------
 Fonction récursive
---------------------------------*/
// 5! = 5*4*3*2*1

function factorielle(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorielle(n - 1);
}

//console.log(factorielle(5)); // 120

/*-------------------------------------
 Fonction callback (fonction de rappel)
--------------------------------------*/

function calculate(a, b, callback) {
    return callback(a, b);
};

function add(a, b) {
    return a + b;
}

const add2 = calculate(2, 3, add);
const product2 = calculate(2, 3, multiply);

console.log(add2, product2);
