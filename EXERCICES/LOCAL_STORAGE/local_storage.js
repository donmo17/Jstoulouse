// créer une clé
window.localStorage.setItem('user', 'Alex');
window.localStorage.setItem('user2', 'Alice');

// récupérer une clé
const alex = window.localStorage.getItem('user');
console.log(alex);

// Supprimer une clé
localStorage.removeItem('user');

// Purger le localStorage
localStorage.clear();

// création d'un objet customer1
const customerObj = {
    firstname: "Sophie",
    age: 27
}

// Transformer l'objet en chaîne
const customerStr = JSON.stringify(customerObj);

// On place cet objet "chaînifié" dans le localStorage
localStorage.setItem('customer1', customerStr);

// Récupération de l chaîne de caractère de carctère stockée dans la zone de stockage locale

const customerDataString = localStorage.getItem('customer1');

console.log('customerDataString:');
console.log(customerDataString);


// On transforme la chaîne récupérée en un objet
const customerDataObject = JSON.parse(customerDataString);

console.log('customerDataObject:');
console.table(customerDataObject);