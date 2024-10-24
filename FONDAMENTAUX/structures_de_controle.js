'use strict';

/*===============================
LES STRUCTURES DE CONTROLE
================================*/

// IF ... ELSE
let age = 17;

if (age >= 18) {
    console.log('Vous êtes majeur !');
} else {
    console.log('Vous êtes mineur !');
}

// Opérateur ternaire : ?
// condition ? action si VRAI : action si FAUX 
// age >= 18 ? console.log('Vous êtes majeur !') : console.log('Vous êtes mineur !');


let message = age >= 18 ? 'Vous pouvez voter !' : 'Vous ne pouvez pas voter !';

console.log(message);

// if .. else if ... else
let emoticon = '🌞';

if (emoticon = '🌞') {
    console.log('Il fait chaud');
} else if (emoticon = '☁') {
    console.log('Il fait frais');
} else {
    console.log('Il fait froid');
}

// SWITCH

let fruit = '🍋';

switch (fruit) {
    case '🍎':
        console.log('apple');
        break;
    case '🥝':
        console.log('kiwi');
        break;
    case '🍇':
        console.log('grapes');
        break;
    default:
        console.log('lemon');
        break;
}
