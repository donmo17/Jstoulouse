document.addEventListener("DOMContentLoaded", () => {
    const header = document.createElement("header");
    const main = document.createElement("main");
    const p = document.createElement("p");
    const txt = document.createTextNode("Je suis un noeud texte.");

    document.body.append(main);
    document.body.prepend(header);
    main.append(p);
    p.append(txt);

    const navItems = {
        accueil: "index.html",
        about: "about.html",
        services: "services.html",
        contact: "contact.html",
    };

    let nav = document.createElement("nav");
    header.appendChild(nav);
    let ul = document.createElement("ul");
    nav.appendChild(ul);
    for (const key in navItems) {
        const li = document.createElement("li");
        ul.appendChild(li);
        const a = document.createElement("a");
        a.href = navItems[key];
        a.textContent = key;
        li.appendChild(a);
    }

    // Création du code HTML de manière brute
    // const navbar = `
    // <nav>
    // <ul>
    //     <li><a href="">1</a></li>
    //     <li>item 2</li>
    //     <li>item 3</li>
    // </ul>
    // </nav>`;
    // header.innerHTML = navbar;
});