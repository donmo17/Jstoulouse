// ciblage du bouton & de la zone d'affichage
const btn = document.getElementById('btnTxt');
const resultat = document.getElementById('resultat');


// Construction de la fonction getDataTxt
const getDataTxt = () => {
    fetch('./data/dataa.txt')
        .then(response => {
            if (!response.ok) {
                console.log('ressource non trouvée !');
                return;
            }
            //console.log(typeof response);
            //console.log(response);
            return response.text();
        })
        .then(data => {
            //console.log(data);
            resultat.innerText = data;
        })
        .catch(() => {
            throw new Error('Ressource non trouvée !')
        });
};

const getDataTxt2 = () => {

    fetch('./data/data.txt')
        .then(response => {
            resultat.innerTxt = response.text();
        })
}

// On place un écouteur d'événement sur le bouton
btn.addEventListener('click', getDataTxt);
