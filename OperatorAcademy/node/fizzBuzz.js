const inputArg = process.argv[2];
const div3 = inputArg % 3;
const div5 = inputArg % 5;
let fizzbuzz = "";

/*
console.log("inputArg = " + inputArg);
console.log("div3 = " + div3);
console.log("div5 = " + div5);
console.log("fizzbuzz = " + fizzbuzz);
*/

if (div3 && div5){
   fizzbuzz = inputArg;
}
else if (!div3 && !div5){
   fizzbuzz = "JavaScript";
}
else fizzbuzz = (!div3 ? "Java" : "Script");
console.log(fizzbuzz);