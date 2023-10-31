function scan(arr) {
    const contrabandIndexes = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'contraband') {
            contrabandIndexes.push(i);
        }
    }
    return contrabandIndexes;
}
