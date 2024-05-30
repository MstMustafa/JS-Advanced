function processStrings(strA, strB, strC) {
    const lengthA = strA.length;
    const lengthB = strB.length;
    const lengthC = strC.length;
    
    const totalLength = lengthA + lengthB + lengthC;
    const averageLength = Math.floor(totalLength / 3);
    
    console.log(totalLength);
    console.log(averageLength);
}
