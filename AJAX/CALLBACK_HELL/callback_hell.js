const languages = [];

let valueshowLangages = ""


const addLanguage = (language, view) => {
    languages.push(language);
    view();
}

const showLanguages = () => {
    console.table(languages);
}

addLanguage('CSS', showLanguages);


// Callback de callback de callback ... = callback Hell

function allLanguages() {
    setTimeout(() => {
        addLanguage('HTML', showLanguages);
        setTimeout(() => {
            addLanguage('JAVASCRIPT', showLanguages);
        }, 3000)
    }, 3000);
}

allLanguages();





const calcul = (a, b, operation) => {
    operation(a, b);
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

//calcul(2,3, add);