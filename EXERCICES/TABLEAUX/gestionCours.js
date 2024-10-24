let cours = [];

// fonction creerCours(nom du cours, niveau du cours) => remplir le tableau "cours" avec ces données sous forme d'un objet

/*
creerCours('Python',1) rempli le tableau cours comme ceci :

[{
name: "Python",
level: 1,
statut: "non terminé"   
}]

*/

function createCourse(courseName, level, statut) {
    return cours.push({ courseName, level, statut })
};

createCourse('JS', 'avancé', 'non terminé');
console.table(createCourse);


creerCours = (courseName, courseLevel) => {
    // Création du nouvel objet (nouveau cours)
    let newCourse = {
        name: courseName,
        level: courseLevel,
        statut: "non terminé"
    };

    cours.push(newCourse);
};

creerCours("Python pour débutants", "débutant");
creerCours("Les grilles CSS", "intermédaire");
creerCours("HTML : accessibilité", "avancé");
creerCours("CSS Flexbox", "avancé");
console.table(cours);

// Supprimer un cours

/**
 * Fonction qui supprime un cours.
 * Il prend en paramètre le nom du "cours" que l'on souhaite supprimer
 * @param {string} name 
 * @returns 
 */
function deleteCours(name) {
    const newCours = cours.filter((c) => c.name != name);
    cours = newCours;
    return cours;
}

deleteCours("CSS Flexbox");
console.table(cours);


function deleteCoursByTagName(name) {
    const newCours = cours.filter((c) => c.name != name || c.statut != name);
    cours = newCours;
    return cours;
}

// Afficher tous les cours

function afficherCours() {
    cours.forEach(c => {
        console.log(`
        Titre du cours: ${c.name}\n 
        Niveau :${c.level}\n 
        Statut :${c.statut}\n
        ---------------------
        `);
    })
};

afficherCours();


// Rechercher un cours par mot clé (eventuellement avec map et filter)

function searchCourse(courseName) {
    // Parcourir le tableau "cours" avec la methode filter./
    // Sur chacun des objets rencontré, vérifier que la valmauier de laproprité "name" de l'objet correpsonde à la valeurt passé en argument à la focntion.

    const searchCourse = cours.filter(c => c.name === courseName);
    console.table(searchCourse);
}

searchCourse("python");
console.table(cours);



// Changer le statut d'un cours à "terminé" (find)

/*
- Parcourir le tableau "cours" avec la méthode find()
- Sur chacun des objets rencontrés lors du parcours du tableau, vérifier que la valeur de la propriété "name" correponde au nom à la valeur passé en argument à la fonction.
- selectionner la propriété "statut" de l'objet
- changer sa valeur sur "terminé"
- mettre à jour le tzbleau "cours" avec le nouveau cours désormais "termin"
*/

creerCours("PHP", "avancé");
console.table(cours);

function findCourse(courseName) {
    const foundCourse = cours.find(c => c.name === courseName);
    foundCourse.statut = "terminé";
    return foundCourse;
}

console.log(findCourse('Python pour débutants'));

console.table(cours);


// Compter le nombre de cours terminés (avec reduce)

function countCompletedCourses() {
    return cours.reduce((acc, currentValue) =>
        acc + (currentValue.statut === "terminé" ? 1 : 0)
        , 0);
}

console.log(countCompletedCourses());
