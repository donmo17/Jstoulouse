// Création d'un cours
const python = {
    name: "Python",
    level: 1,
    statut: "non terminé"
}


function createCourse(course) {
    // étape n°1 : tranformer le cours (objet) en "string"
    const courseStr = JSON.stringify(course);

    // étape n°2 : on place le cours (sous formle de chaîne) dans le localStorage
    localStorage.setItem(course.name, courseStr)
}

function createCourse2(courseName, courseLevel, courseStatus) {
    // étape n°1 : créer la chaîne à stocker
    const courseStr = `{"name": ${courseName}, "level": ${courseLevel}, "statut": ${courseStatus}`;

    // étape n°2 : on place le cours (sous formle de chaîne) dans le localStorage 
    localStorage.setItem(courseName, courseStr)
}

function getCourse(courseKey) {
    // Récupération du cous sous forme de chaîne
    const courseStr = localStorage.getItem(courseKey);

    // Trasnformer ce cours sous forme d'un objet
    const courseObj = JSON.parse(courseStr);

    // Afficher à l'écran les données
    document.writeln(courseObj.name);
    document.writeln(courseObj.level);
    document.writeln(courseObj.statut);
    document.writeln('<br>');

    // Affichage des données de l'objet avec une boucle

    for (const key in courseObj) {
        document.writeln(`${key} : ${courseObj[key]} <br>`);
    }
}

createCourse(python);
createCourse2('JS', 'Avancé', 'En cours');
createCourse2('JS', 'Débutant', 'En cours');
getCourse('Python');
