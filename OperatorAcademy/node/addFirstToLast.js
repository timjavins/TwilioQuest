function addFirstToLast(arrayIn){
    let firstLast = "";
    if (arrayIn.length > 0) {
        firstLast = arrayIn[0]+arrayIn[arrayIn.length -1];
        return firstLast;
    }
    return firstLast;
}
