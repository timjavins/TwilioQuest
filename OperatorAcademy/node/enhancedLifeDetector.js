const inputArg = process.argv[2];
const lifeObject = {0:"alive", 1:"flowering", 2:"shedding"};

if (inputArg > 2){
   console.log("other");
}
else console.log(lifeObject[inputArg]);