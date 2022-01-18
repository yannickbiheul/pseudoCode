let readline = require("../node_modules/readline-sync");

do {
    var chiffre = readline.questionInt("Saisir un chiffre entre 10 et 20 : ");
    if (chiffre < 10) {
        console.log("Le chiffre est trop petit");
    } else if (chiffre > 20) {
        console.log("Le chiffre est trop grand");
    } else {
        console.log("Le chiffre est bien compris entre 10 et 20 !");
    }
} while (chiffre < 10 || chiffre > 20);