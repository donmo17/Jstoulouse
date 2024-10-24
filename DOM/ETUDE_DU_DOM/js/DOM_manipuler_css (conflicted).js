// Changement de la couleur de fond du premier bouton

const btn1 = document.querySelector('.banner__button--primary');
//btn1.style.backgroundColor = '#00f';

btn1.classList.add('banner__button--updated');

btn1.classList.remove('banner__button--updated');

const btn2 = document.querySelector('.banner__button--secondary');
btn2.classList.replace('banner__button--secondary', 'banner__button--updated');

const bool = btn2.classList.contains('banner__button--btn2');
console.log('bool', bool);

btn2.classList.toggle()