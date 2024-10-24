const square = document.getElementById('square');

const btn2 = document.querySelectorAll('button')[1];

const btn3 = document.querySelectorAll('button')[2];

btn2.onclick = function () {
    square.style.backgroundColor = "#0f0";
}

// Ecouteurs d'événéments
btn3.addEventListener('click', morphing);

function morphing() {
    // Si square est un disque alors on applique un borderRadius à 0% sinon on applique un borderRadius à 50%
    if (square.style.borderRadius === '50%') {
        square.style.borderRadius = '0%';
    } else {
        square.style.borderRadius = '50%';
    }
}

square.addEventListener('click', () => {
    square.classList.toggle('disk');
});