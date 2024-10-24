// 1000 € en janvier 2024 -> ? € fin 2030 ? avec un taux de 3% par an

/*

Fin 2024 on aura :

1000 + (1000 * 3) / 100
= 1000 * (1 + 3/100)
= 1030

Fin 2025 :
1000 * (1 + 3/100) * (1 + 3 / 100)

Fin 2026
1000 * (1 + 3/100) * (1 + 3 / 100) * (1 + 3/100)
= 1000 * (1 + 3/100) ** 3

Après n années :
1000 * (1 + 3/100) ^ n

*/

// epargne(somme initiale, nombre d'années, taux) => résultat

function epargne(capital, annee, taux = 3) {
    let t = 1 + taux / 100;
    return capital * t ** annee;
}

console.log(epargne(1000, 6));

