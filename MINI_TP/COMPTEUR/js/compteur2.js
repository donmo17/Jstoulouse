const substract = document.querySelector('#substract');
const add = document.querySelector('#add');
const reset = document.querySelector('#reset');
const count = document.querySelector('#count');
const theme = document.querySelector('#theme');

let counter = 0

const displayCount = () => {
    count.innerText = counter;
    if (counter < 0) {
        count.style.color = 'orangered';
    } else if (counter > 0) {
        count.style.color = 'green';
    } else {
        count.style.color = 'white';
    }
}


substract.addEventListener('click', () => {
    counter = counter - 1;
    displayCount();
});

add.addEventListener('click', () => {
    counter = counter + 1;
    displayCount();
});

reset.addEventListener('click', () => {
    counter = 0;
    displayCount();
    count.style.color = 'white';
});

theme.addEventListener('click', (e) => {
    console.log(e.target.innerText);
    document.body.classList.toggle('nightMode');
    if (document.body.classList.contains('nightMode')) {
        // e.target.innerHTML= './'
    }
});

