// Ciblage de la balise ul de la barre de navigation
const ul = document.querySelector('header nav ul');
console.log('ul', ul);

// Ciblage de du nom du site
const siteName = ul.children[1];
console.log('li', siteName);
siteName.innerHTML = '<em>New Site Name</em>';

// Ciblage du premier enfant du premier enfant de "ul"
const logo = ul.firstElementChild.firstElementChild;
console.log('logo', logo);

// Modification du logo du site
logo.src = 'https://www.1min30.com/wp-content/uploads/2018/01/FNAC-logo-500x281.jpg';

logo.setAttribute('alt', "FNAC");