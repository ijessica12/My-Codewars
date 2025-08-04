function sumDigits(number) {
    let num = Math.abs(number).toString();
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[i] >= 0 && num[i] <= 9) {
            sum += Number(num[i]);
        }
    }
    return sum;
}