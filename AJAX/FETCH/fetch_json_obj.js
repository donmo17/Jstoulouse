// ciblage du bouton & de la zone d'affichage
const btn = document.getElementById('btnJSONObj');
const resultat = document.getElementById('resultat');


// Construction de la fonction getDataTxt
const getDataJson = () => {
    fetch('./data/data.json')
        .then(response => {
            if (!response.ok) {
                console.log('ressource non trouvéeeeee !');
                return;
            }
            //console.log(typeof response);
            //console.log(response);
            return response.json();
        })
        .then(data => {
            //console.log(data);
            resultat.innerText = data.pays;
        })
        .catch((error) => {
            console.log(error)
        });
};


// On place un écouteur d'événement sur le bouton
btn.addEventListener('click', getDataJson);
