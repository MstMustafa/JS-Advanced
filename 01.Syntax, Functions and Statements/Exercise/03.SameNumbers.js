function checkSameNumbers(number) {
    const numberString = number.toString();
    
    const firstDigit = numberString[0];
    
    let sum = 0;
    
    let allSame = true;
    
    for (let i = 0; i < numberString.length; i++) {
     
        sum += parseInt(numberString[i]);
  
        if (numberString[i] !== firstDigit) {
            allSame = false;
        }
    }
    
    console.log(allSame);
    console.log(sum);
}
