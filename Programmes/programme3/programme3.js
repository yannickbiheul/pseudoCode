let readline = require("readline-sync");

let age = readline.questionInt("Entrez votre age : ");

if (age >= 18) {
    console.log("majeur");
} else {
    console.log("mineur");
}
