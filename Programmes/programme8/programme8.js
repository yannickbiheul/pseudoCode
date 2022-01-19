function calculMoyenne(tab) {
    let resultat = 0;
    for (let i = 0; i < tab.length; i++) {
        resultat += tab[i];
    }
    resultat /= tab.length;
    return resultat;
}

let tableau = [];
for (let i = 0; i < 5; i++) {
    tableau[i] = Math.floor(Math.random() * 20);
}

let moyenne = calculMoyenne(tableau);

console.log(tableau);
console.log("La moyenne est de : " + moyenne);