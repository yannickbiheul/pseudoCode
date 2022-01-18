let chiffre1;
let chiffre2;
let resultat;

chiffre1 = Math.floor(Math.random() * 20 + 1);
chiffre2 = Math.floor(Math.random() * 20 + 1);
resultat = chiffre1 - chiffre2;
console.log("1er chiffre: " + chiffre1 + ", 2ème chiffre: ", chiffre2 + ". Résultat: " + resultat);