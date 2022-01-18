let readline = require("readline-sync");

let chiffre1 = readline.questionInt("Entrez le chiffre 1 : ");
let chiffre2 = readline.questionInt("Entrez le chiffre 2 : ");

resultat = chiffre1 + chiffre2;
console.log("Le résultat est : " + resultat);