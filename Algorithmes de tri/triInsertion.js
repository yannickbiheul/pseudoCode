function sortedTabAsc(tab) {
    for (let i = 1; i < tab.length; i++) {
        let valeur = tab[i];
        let cpt = i;
        while (cpt > 0 && tab[cpt-1] > valeur) {
            tab[cpt] = tab[cpt-1];
            cpt--;
        }
        tab[cpt] = valeur;
    }
    return tab;
}

let tableau = [];
for (let i = 0; i < 10; i++) {
    tableau[i] = Math.floor(Math.random() * 10);
}
console.log(tableau);
console.log(sortedTabAsc(tableau));
