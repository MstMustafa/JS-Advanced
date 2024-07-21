function sortSpecial(arr) {
    
    arr.sort((a, b) => a - b);

    let result = [];
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        if (left <= right) {
            result.push(arr[left]);
            left++;
        }
        if (left <= right) {
            result.push(arr[right]);
            right--;
        }
    }

    return result;
}
