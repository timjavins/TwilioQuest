function calculatePower(arr) {
    const result = arr.map(num => num * 2).reduce((acc, curr) => acc + curr, 0);
    return result;
}
