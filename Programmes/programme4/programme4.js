let readline = require("../node_modules/readline-sync");

let mois = readline.questionInt("Entrez le numero du mois : ");

switch (mois) {
    case 1:
        console.log("Janvier");
        break;
    case 2:
        console.log("Février");
        break;
    case 3:
        console.log("Mars");
        break;
    case 4:
        console.log("Avril");
        break;
    case 5:
        console.log("Mai");
        break;
    case 6: 
        console.log("Juin");
        break;
    case 7:
        console.log("Juillet");
        break;
    case 8:
        console.log("Aout");
        break;
    case 9:
        console.log("Septembre");
        break;
    case 10:
        console.log("Octobre");
        break;
    case 11:
        console.log("Novembre");
        break;
    case 12:
        console.log("Décembre");
        break;
    default:
        console.log("Pas compris");
}