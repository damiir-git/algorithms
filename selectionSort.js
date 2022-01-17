// Selection sort
function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let minIndx = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndx]) {
                minIndx = j;
            }
        }
        const swapItem = array[i];
        array[i] = array[minIndx];
        array[minIndx] = swapItem;
    }
    return array;
}

console.log(selectionSort([7, 5, 4, 13, 6, 7, 12, -1, 9, 15, 56, -30]));
console.log(selectionSort([100]));
console.log(selectionSort([100, -100]));
console.log(selectionSort([]));