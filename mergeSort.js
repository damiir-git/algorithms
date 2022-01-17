// Merge Sort
function mergeSort(array) {
    if (array.length > 1) {
        const mid = Math.ceil(array.length / 2);
        const one = array.slice(0, mid);
        const two = array.slice(mid);
        mergeSort(one);
        mergeSort(two);
        let i = 0;
        let j = 0;
        while (i < one.length || j < two.length) {
            if ((i < one.length && one[i] < two[j]) || j === two.length) {
                array[i + j] = one[i];
                i++;
            } else {
                array[i + j] = two[j];
                j++;
            }
        }
    }
    return array;
}

console.log(mergeSort([-60, 70, 53, 51, 50, 40, 3, -40, -60, 51, 5, 3, 2, 120, 60]));
console.log(mergeSort([-60]));
console.log(mergeSort([60, -60]));
console.log(mergeSort([-1, -2, -3]));
console.log(mergeSort([]));