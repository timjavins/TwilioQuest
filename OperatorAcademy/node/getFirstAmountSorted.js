function getFirstAmountSorted(arg1,arg2){
    let sorted = arg1.sort();
    let output = sorted.slice(0, (arg2+1));
    return output;
}