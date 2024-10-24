'use strict';

/*===============================
LES TYPES DE DONNEES
================================*/


/*--------------------------------
Les données Primitives
---------------------------------*/

/*
Une donnée primitive est une donnée qui n'est pas un objet et qui n'a pas de méthode.
Les données primitives sont stockées directement dans la pile (heap).
Il est impossible de modifier une donnée primitive.
Il est possible de copier une donnée primitive par valeur.
*/


// Number
let n = 10;
console.log('typeOf n =', typeof n);

// String 
let str = 'bonjour';
console.log('typeOf str =', typeof str);
let maj = str.toUpperCase();
console.log('maj :', maj); // BONJOUR
console.log('str :', str); // bonjour

// Boolean
let bool = false;
console.log('typeOf bool =', typeof bool);

// BigInt
let big = 55555555555513212314231212n;
console.log('typeOf big =', typeof big);

// Symbol
let client1 = Symbol('Alex');
let client2 = Symbol('Alex');
console.log(client1 === client2); // false
console.log(client1 == client2); // false

let a = 5;
let b = '5';
console.log(a == b); // true
console.log(a === b); // false

// undefined
let nonDefini = undefined;
console.log('typeOf nonDefini =', typeof nonDefini); // undefined


/*--------------------------------
Les Objets (non primitifs)
---------------------------------*/

// null
let age = null;
console.log('typeOf age =', typeof age); // object

// création d'un objet littéral

let customer = {
    firstname: 'John',
    lastname: 'Smith',
    age: 25,
    available: true,
    address: {
        streetName: 'main street',
        zipCode: 115243,
        country: 'Los Angeles'
    }
}

// Afficher toutes les propriétés d'un objet dans la console
console.table(customer);

// Accéder à une propriété
console.log('customer.firstname', customer.firstname);

// Modifier une propriété
customer.age = 32;
console.log(customer.age); // 32

// Ajouter une propriété
customer.phoneNumber = '0342334243';
customer.address.streetNumber = 32;
console.table(customer);

// Supprimer une propriété
delete customer.age;
console.table(customer);

// Geler un objet
Object.freeze(customer);
//customer.firstname = 'Alex'; // interdit la modification d'une propriété
// customer.age = 32; // interdit l'ajout d'une propriété
// delete customer.firstname; // interdit la suppression d'une propriété
console.table(customer);
customer.address.state = "California"; // possible d'ajouter une propriété à un sous-objet d'un objet gelé
console.table(customer);

// Sceller un objet
const dog1 = {
    breed: "labrador",
    age: 5,
    vaccinated: true
}

Object.seal(dog1);
dog1.breed = "chihuahua"; // autorise la modification d'une propriété
console.table(dog1);
// delete dog.age; // interdit la suppression d'une propriété
console.table(dog1);
//dog1.color = "beige";
console.table(dog1); // interdit l'ajout d'une propriété


// Copier un objet
const dog2 = dog1; // copie par référence
dog1.age = 10;
console.log('dog1:');
console.table(dog1);

// Copie par valeur
let c = 3;
let d = c;
c = 30;
console.log('d=', d);

// BIEN copier un objet
const dog3 = { ...dog1 }; // ... s'appelle le spread operateur (opérateur de décomposition)
dog1.age = 13;
console.log('dog1:');
console.table(dog1)
console.log('dog3:');
console.table(dog3);

// DESTRUCTURING
const phone = {
    brand: 'apple',
    model: 'iphone15',
    price: 1200,
    guarantee: true
}

let brandName = phone.brand;
let modelName = phone.model;

const { brand, model } = phone;
console.log('brand :', brand);

const { price: phonePrice, model: phoneModel } = phone;
console.log('phonePrice :', phonePrice);

