const btns = document.querySelectorAll('button');
console.log(btns);

btns.forEach((btn) => {
    // récupération de la chaîne de caractère située à l'intérieure du bouton
    let action = btn.innerText;
    console.log(action);
    btn.addEventListener(action, () => {
        btn.style.width = '400px';
    });
});

for (let index = 0; index < btns.length; index++) {
    let action = btns[index].innerText;
    btns[index].addEventListener(action, () => {
        btns[index].style.width = '400px';
    });
}

