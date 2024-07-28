function generateOrbitMatrix([width, height, x, y]) {
    
    let matrix = Array.from({ length: height }, () => Array(width).fill(0));
    
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++)
            let distance = Math.max(Math.abs(i - x), Math.abs(j - y)) + 1;
            matrix[i][j] = distance;
        }
    }
    
    for (let row of matrix) {
        console.log(row.join(' '));
    }
}
