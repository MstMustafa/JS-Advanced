function validityChecker(x1, y1, x2, y2) {

    function checkValidity(x1, y1, x2, y2) {
        const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        if (Number.isInteger(distance)) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }

    checkValidity(x1, y1, 0, 0);

    checkValidity(x2, y2, 0, 0);

    checkValidity(x1, y1, x2, y2);
}
