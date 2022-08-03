function calculateMass(array1){
    const initialValue = "";
    let arrayString = array1.reduce((accumulator, currentElement) => accumulator + currentElement, initialValue);
    return arrayString.length;
}