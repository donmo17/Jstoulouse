const form = document.querySelector('form');
const inputString = document.querySelector('#inputString')
const regex = /^[a-zA-Z\s]+$/;
const resultMessage = document.getElementById('resultMessage');

inputString.addEventListener('input', (e) => {
    e.preventDefault();

    //Récupérer la value de l'input #inputString
    console.log(inputString.value);


    // tester la valeur saisie dans l'input, si elle re tourne true... sinon ...
    if (regex.test(inputString.value)) {
        msg = "Chaine valide";
        resultMessage.style.color = "green";
    } else {
        msg = "Chaine invalide";
        resultMessage.style.color = "red";
    }
    resultMessage.innerText = msg
})