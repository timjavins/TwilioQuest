function getLaserSetting(magicWord) {
    let setting = "";
    if(magicWord === "please") {
        setting = "OFF";
    }
    else setting = "ON";
    return setting 
}

const currentSetting = getLaserSetting();
console.log("The current laser setting is " + currentSetting);