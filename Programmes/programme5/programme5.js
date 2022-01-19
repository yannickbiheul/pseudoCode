let readline = require("../node_modules/readline-sync");

let chiffreSaisi = readline.questionInt("Entrez un chiffre : ");
let resultat = 1;

for (let i = 1; i <= chiffreSaisi; i++) {
    resultat *= i;
}

console.log(resultat);