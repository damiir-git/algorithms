function* narayan([...a], infinitely = false) {
    const len = a.length;
    let count = 0;
    if (!infinitely) {
        for (let i = 2, count = 1; i <= len; i++) {
            count *= i;
        }
    }
    while(infinitely || count > 0) {
        // Шаг 1: найти такой наибольший j, для которого aj < aj+1
        let maxJ = -1;
        for (let j = 0; j < len; j++) {
            if (a[j] < a[j+1] && j > maxJ) {
                maxJ = j;
            }
        }

        // Шаг 2: увеличить aj. Для этого надо найти наибольшее l > j, для которого al > aj. Затем поменять местами aj и al.
        let maxL = -1;
        for (let l = maxJ + 1; l < len; l++) {
            if (a[l] > a[maxJ] && l > maxL) {
                maxL = l;
            }
        }
        const jVal = a[maxJ];
        a[maxJ] = a[maxL];
        a[maxL] = jVal;

        // Шаг 3: записать последовательность aj+1,...,an в обратном порядке.
        const rest = a.slice(maxJ + 1, len).reverse();
        a.splice(maxJ + 1)
        a = a.concat(rest);
        if (count--) {
            yield a;
        }
        else {
            return a
        }
    }
}

const gen = narayan(['a', 'b', 'c']);

for (let comb of gen) {
    console.log(comb);
}