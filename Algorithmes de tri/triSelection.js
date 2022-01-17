function sortedTabAsc(tab) {

    for (let i = 0; i < tab.length-2; i++) {
        let min = i;
        for (let j = i+1; j < tab.length; j++) {
            if (tab[j] < tab[min]) {
                min = j;
            }
        }
        if (min != i) {
            let tmp = tab[i];
            tab[i] = tab[min];
            tab[min] = tmp;
        }
    }
    return tab;
}

let tableau = [3,6,5,1,4,2];
console.log(tableau);
console.log(sortedTabAsc(tableau));