function scan(array){
    let i = 0;
    array.forEach(element => {
        if (element === "contraband") {
            i++;
        }
    });
    return i;
}