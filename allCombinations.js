// All Combinations from Array
function* getCombinations(a) {
    const countOfCombination = Math.pow(2, a.length);
    for (let i = 0; i < countOfCombination; i++) {
        const binary = i.toString(2);
        const binaryLast = binary.length - 1;
        yield a.filter((item, index) => binary[binaryLast - index] === '1');
    }
}

const arr = [1,2,3,4];
const gen = getCombinations(arr);
console.log('array =', arr);
for (let comb of gen) {
    console.log(comb);
}
