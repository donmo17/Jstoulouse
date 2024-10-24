'use strict';

/*===============================
LES BOUCLES
================================*/


/*-------------------------------
Boucle FOR
-------------------------------*/


// Un nombre N est pair si  N%2 =0
// Afficher tous les nombres pairs entre 30 et 56 non inclus avec une boucle for.

for (let i = 30; i < 56; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
};


for (let i = 30; i < 56; i++) {
    (i % 2 === 0) ? console.log(i) : null;
};

// Un nombre N est pair si  N%2 =0
// Afficher tous les nombres pairs entre 30 et 56 non inclus avec une boucle for.
// Affichage de sortie attendu : 30-32-34- ..... -54

let n = 0;
let pattern = '-';

for (let i = 30; i < 56; i++) {
    if (i % 2 === 0) {
        if (i === 54) {
            pattern = '';
        }
        n = n + i + pattern;
    }
};

console.log(n);



/*-------------------------------
Boucle WHILE
-------------------------------*/

// Afficher tous les nombres divisibles par 4 compris entre 0 et 26

let w = 0;

while (w >= 0 && w <= 26) {
    if (w % 4 === 0) {
        console.log('w=', w);
    } w++;
}

/*-------------------------------
Boucle DO...WHILE
-------------------------------*/

// Afficher tous les nombres divisibles par 4 compris entre 0 et 26

w = 0;

do {
    if (w % 4 === 0) {
        console.log('w=', w);
    } w++;
} while (w >= 0 && w <= 26);


/*-------------------------------
mot clé "continue"
-------------------------------*/

// Afficher tous les nombres pairs entre 0 et 50 multiples de 9 en utilisant le mot clé "continue" :
// résultat attendu : 0, 18, 36

for (let i = 0; i <= 50; i++) {
    if (i % 9 === 0 && i % 2 === 0) {
        console.log(i);
    } else {
        continue;
    }
}

/*-------------------------------
mot clé "break"
-------------------------------*/

// Parcourir tous les nombres de 0 à 100 et afficher le premier nombre pair plus grand que 13 en utilisant le mot clé "break"
// résultat attendu : 14

let j = 0;
while (j < 100) {
    if (j === 14) {
        break;
    }
    j = j + 1;
}

console.log(j);


/*-------------------------------
Portée des variables
-------------------------------*/

if (true) {
    var var_Variable = "Je suis une variable var";
    let let_Variable = "Je suis une variable let";
    console.log(var_Variable); // "Je suis une variable var"
    console.log(let_Variable); // "Je suis une variable let"
}

console.log(var_Variable); // Affichera : "Je suis une variable var"
// console.log(let_Variable); // Erreur : letVariable n'est pas définie en dehors du bloc


/*
Var est une variable GLOBALE, elle est accessible en dehors du bloc if.
Let est une variable LOCALE, elle n'est pas accessible en dehors du bloc if.
*/