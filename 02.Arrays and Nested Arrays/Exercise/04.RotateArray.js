function rotateArray(array, rotations) {
    let effectiveRotations = rotations % array.length;
    
    for (let i = 0; i < effectiveRotations; i++) {
        array.unshift(array.pop());
    }
    
    console.log(array.join(' '));
}
