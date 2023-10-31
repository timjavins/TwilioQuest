function scanAndFilter(arrayIn, stringIn) {
    return arrayIn.filter(_ => _ != stringIn);
}

/* test code
const cargo = ['apples', 'ray guns', 'oranges', 'tacos', 'ray guns'];

const filteredCargo = scanAndFilter(cargo, 'ray guns');
console.log(filteredCargo);
*/