// Quick Sort
function quickSort(array) {
    if (array.length > 1) {
        const midIndx = Math.floor(array.length / 2);
        const left = []
        const middle = [];
        const right = [];
        array.forEach((item) => {
            if (item < array[midIndx]) {
                left.push(item);
            } else if (item > array[midIndx]) {
                right.push(item)
            } else {
                middle.push(item);
            }
        })
        quickSort(left);
        quickSort(right);
        for (let i = 0; i < left.length; i++) {
            array[i] = left[i]
        }
        for (let i = 0; i < middle.length; i++) {
            array[i + left.length] = middle[i]
        }
        for (let i = 0; i < right.length; i++) {
            array[i + left.length + middle.length] = right[i];
        }
    }
    return array;
}

console.log(quickSort([-60, 70, 53, 51, 50, 40, 3, -40, -60, 51, 5, 3, 2, 120, 60]));
console.log(quickSort([-60]));
console.log(quickSort([60, -60]));
console.log(quickSort([-1, -2, -3]));
console.log(quickSort([]));
