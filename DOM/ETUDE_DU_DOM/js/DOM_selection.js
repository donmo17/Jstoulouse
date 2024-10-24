// document.getElementById()
const li_logo = document.getElementById('logo');
console.log(li_logo);

// document.getElementsByTagName()
const nav = document.getElementsByTagName('nav');
console.log(nav);

const lis = document.getElementsByTagName('li');
console.log(lis);

// document.getElementsByClassName()
const btns = document.getElementsByClassName('banner__button');
console.log(btns);

// document.querySelector()
const header2 = document.querySelector('header');
console.log(header2);

// document.querySelectorAll()
const headers = document.querySelectorAll('header');
console.log(headers);

// Selection du 2ème éléments de mla HTMLCollection "headers"
console.log(headers[1]);
