function factorielle(nombre) {
    if (nombre == 1) {
        return 1
    } else {
        return nombre * factorielle(nombre - 1);
    }
}

console.log(factorielle(2));