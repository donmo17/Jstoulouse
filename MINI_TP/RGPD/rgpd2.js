document.addEventListener("DOMContentLoaded", () => {
    //Création des noeuds d'éléments
    const header = document.createElement("header");
    const footer = document.createElement("footer");
    const div = document.createElement("div");

    //Injection des noeudsdans le noeud body
    document.body.appendChild(header);
    document.body.appendChild(footer);
    document.body.appendChild(div);

    // Création du code HTML brut de Header
    const navbar = `
    <nav>
    <ul>
        <h2>Home</h2>
        <h2>About</h2>
        <h2>Services</h2>
        <h2>Contact</h2>
    </ul>
</nav>
    `;
    header.innerHTML = navbar;

    //Création du code HMTL brut de footer
    const btns = `
    <button type="button">Colonne 1</button>
    <button type="button">Colonne 2</button>
    <button type="button">Colonne 3</button>
    <button type="button">Colonne 4</button>
    `;
    footer.innerHTML = btns;

    //Création de la Modal et de l'overlay
    const modalOverlay = `
    <div class="overlay" id="overlay"></div>
    <div class="modal" id="modal">
      <h2>RGPD</h2>
      <p>Veuillez accepter les règles RGPD en cliquant sur le bouton ci-dessous.</p>
      <button id="closeModal">Accepter</button>
    </div>
    `;
    div.innerHTML = modalOverlay;

    //Gestion de la Modale RGPD et de l'Overlay
    const btn = document.getElementById("closeModal");
    const modal = document.getElementById("modal");
    const overlay = document.getElementById("overlay");

    btn.addEventListener("click", () => {
        modal.style.display = "none";
        overlay.style.display = "none";
        //Création du booléen qui servira à vérifier si les règles RGPD ont déja été accepté
        localStorage.setItem("RGPD", "true");
    });
    //Si règles RGPD déja accepté alors il faut cacher la modal et l'overlay
    if (localStorage.getItem("RGPD") === "true") {
        modal.style.display = "none";
        overlay.style.display = "none";
    }
});
