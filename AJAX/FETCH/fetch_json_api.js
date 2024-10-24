// ciblage du bouton & de la zone d'affichage
const btn = document.getElementById('btnAPI');
const resultat = document.getElementById('resultat');

function getImage(id, images) {

    images.forEach(image => {
        if (image.id === id) {
            resultat.innerHTML = `
            <p>${image.author}</p>`
        }
    });
}

// Construction de la fonction getDataTxt
const getDataApi = () => {
    fetch('https://picsum.photos/list')
        .then(response => {
            if (!response.ok) {
                console.log('ressource non trouvée !');
                return;
            }
            //console.log(typeof response);
            console.log(response);
            return response.json();
        })
        .then(data => {
            console.log(data);
            getImage(3, data);
        })
        .catch((error) => {
            console.log(error)
        });
};


// On place un écouteur d'événement sur le bouton
btn.addEventListener('click', getDataApi);
