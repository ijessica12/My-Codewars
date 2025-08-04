function sortArray(array) {
    const odd = array.filter(p => p % 2 !== 0).sort((a, b) => a - b);
    let index = 0;
    return array.map(n => {
        if (n % 2 !== 0) {
            return odd[index++];
        }
        return n;
    });
}
console.log(sortArray([2, 9, 4, 3, 7, 6, 1, 8]));