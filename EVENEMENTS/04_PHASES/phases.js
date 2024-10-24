
const parent1 = document.getElementsByClassName('parent')[0];
const enfant1 = document.getElementsByClassName('enfant')[0];
const btn1 = document.querySelectorAll('button')[0];


const parent2 = document.getElementsByClassName('parent')[1];
const enfant2 = document.getElementsByClassName('enfant')[1];
const btn2 = document.querySelectorAll('button')[1];


// BUBBLING

btn2.addEventListener('click', (e) => {
    console.log('BUBBLING');
    console.log('Bouton cliqué !');
    e.stopPropagation();
});

enfant2.addEventListener('click', () => {
    console.log('L\'enfant a écouté le click !');
});

parent2.addEventListener('click', () => {
    console.log('Le parent a écouté le click !');
});


// CAPTURING

btn1.addEventListener('click', () => {
    console.log('CAPTURING');
    console.log('Bouton cliqué !');
}, true);

enfant1.addEventListener('click', () => {
    console.log('L\'enfant a écouté le click !');
}, true);

parent1.addEventListener('click', (e) => {
    console.log('Le parent a écouté le click !');
    e.stopPropagation();
}, true);