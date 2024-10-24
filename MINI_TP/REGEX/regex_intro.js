const str = "Bonjour";
// Définition du motif recherche
const regex1 = /ou/; // objet
const verif = regex1.test(str);
console.log(verif); // true


// Rechercher une majuscule ou @,&,*
const str2 = 'abcdL';
const regex2 = /^[a-zA-Z\s]+$/;
const verif2 = regex2.test(str2);
console.log('regex2:', verif2);
