const formation = new Promise((resolve, reject) => {
    let inscrit = false;
    setTimeout(() => {
        if (inscrit) {
            resolve('Inscription réussie, bienvenue dans la formation !')
        } else {
            reject('Désolé, votre demande d\'inscription n\'a pas été retenue.')
        }
    }, 5000);

});

//console.log(formation);

// const formation2 = new Promise((resolve, reject) => {
// });

// console.log(formation2);

formation
    .then(message => console.log(message))
    .catch(erreur => console.log(erreur));

