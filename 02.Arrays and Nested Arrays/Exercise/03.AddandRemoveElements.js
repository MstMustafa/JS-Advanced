function addAndRemoveElements(commands) {
    let result = [];
    let currentNumber = 1;
    
    for (let command of commands) {
        if (command === "add") {
            result.push(currentNumber);
        } else if (command === "remove") {
            result.pop();
        }
        currentNumber++;
    }
    
    if (result.length === 0) {
        console.log("Empty");
    } else {
        result.forEach(element => console.log(element));
    }
}
