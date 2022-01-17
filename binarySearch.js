// Binary search
function binarySearch(sortedArray, item) {
    let start = 0
    let end = sortedArray.length - 1;
    let result = -1;
    while (start <= end) {
        const middle = Math.ceil( (end + start) / 2);
        if (sortedArray[middle] === item) {
            result = middle;
            break;
        }
        if (sortedArray[middle] > item) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return result;
}

const sortedArray = [1, 5, 17, 27, 80, 150, 550, 660, 740, 1100, 10002, 90331, 130900];
for(let i = 0; i < sortedArray.length; i++) {
    const item = sortedArray[i];
    const foundIndex = binarySearch(sortedArray, item);
    console.log(`i=${i}, item=${item}, foundIndex=${foundIndex}, ${i!==foundIndex ? 'error' : 'ok'}`)
}

console.log(`item=${20}, foundIndex=${binarySearch(sortedArray, 20)}`);
console.log(`item=${-1}, foundIndex=${binarySearch(sortedArray, -1)}`);
console.log(`item=${150900}, foundIndex=${binarySearch(sortedArray, 150900)}`);
console.log(`item=${4}, foundIndex=${binarySearch(sortedArray, 4)}`);
console.log(`item=${90332}, foundIndex=${binarySearch(sortedArray, 90332)}`);
console.log(`item=${150900}, foundIndex=${binarySearch([], 150900)}`);
console.log(`item=${-20}, foundIndex=${binarySearch([], -20)}`);
console.log(`item='${5}', foundIndex=${binarySearch(sortedArray, '5')}`);