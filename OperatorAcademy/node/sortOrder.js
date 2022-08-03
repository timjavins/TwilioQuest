if (process.argv[2].toLowerCase() === process.argv[3].toLowerCase()) {
    console.log(0);
}
else {
    const unsorted = [process.argv[2], process.argv[3]];
    /*console.log("2 inputArgs " + inputArgs);
    console.log("2 unsorted " + unsorted);*/
    const sorted = [process.argv[2], process.argv[3]].sort();
    /*console.log("3 inputArgs = " + inputArgs);
    console.log("3 sorted " + sorted);
    console.log("3 unsorted[0] " + unsorted[0]);
    console.log("3 sorted[0] " + sorted[0]);*/
    console.log(unsorted[0] === sorted[0] ? -1 : 1);
}