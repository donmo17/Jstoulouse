// CODE SYNCHRONE
console.log('Bonjour');
console.log('Bonsoir');

// CODE ASYNCHRONE

// on déclenche une fonction "bonjour" après 3 secondes

const bonjour = () => {
    setTimeout(() => console.log('Bonjour depuis setTimeOut !'),
        3000);
}

bonjour();
console.log('Bonsoir');