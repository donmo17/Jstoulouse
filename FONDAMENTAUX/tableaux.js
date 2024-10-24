'use strict';

/*===============================
LES TABLEAUX
================================*/

const animals = [];
const vegetables = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑', '🍆', '🌶️', '🧄'];
const fruits = ['🍏', '🍌', '🍒', '🍎', '🥝', '🍐', '🍓', '🍉', '🍇', '🍍', '🥥'];
const sweets = ['🍩', '🍪', '🧁', '🍰', '🍦', '🎂'];
let domestic = ['🐶', '🐱', '🐷', '🐮', '🐭', '🐹', '🐔', '', '', ''];
let wild = ['🦁', '🐯', '🦊', '🦝', '🐻', '🐼', '🦆', '🦢', '🐸', '', '', ''];
let jungle = ['🙉', '🦁', '🐯', '🐘', '🦜', '🐍', '', '', ''];
let sea = ['🐋', '🐬', '🐟', '🐠', '🦈', '🐙'];
let insects = ['🐛', '🐜', '🐞', '🕷️', '🦂', '🦋', '🐝', '🦗', '', ''];


// Ajouter un élément à la fin du tableau
animals.push('🐶');
console.table(animals);

// Retirer le premier élément d'un tableau
vegetables.shift();
console.table(vegetables);

// MAP (méthode immuable = ne modifie pas le tableau sur lequel elle est appliquée)
const squares = ['🟥', '🟨', '🟩'];
// résultat attendu : ['🟥🔵', '🟨🔵', '🟩🔵'];

const newSquares = squares.map(m => m + '🔵');
console.table(squares);
console.table(newSquares);


// FILTER (méthode immuable = ne modifie pas le tableau sur lequel elle est appliquée)
const frutas = ['🍏', '🍌', '🍒🍏', '🍎🍏', '🥝', '🍐', '🍓'];

// résultat attendu :  ['🍏', '🍒🍏', '🍎🍏'];

// coup de pouce : includes()

const filterFrutas1 = frutas.filter(function (fruit) {
    return fruit.includes('🍏');
});

const filterFrutas2 = frutas.filter(f => f.includes('🍏'));
console.table(filterFrutas2);

const filterFrutas3 = frutas.filter(f => f.indexOf('🍏') != -1);
console.table(filterFrutas3);


// REDUCE
const notes = [1, 2, 3, 4, 5];
// résultat attendu : 1+2+3+4+5 = 15
const somme = notes.reduce((acc, value) => acc + value, 0);

console.log(somme); // 15
