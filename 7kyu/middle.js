//You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.
//If the string's length is odd, return the middle character.
//If the string's length is even, return the middle 2 characters.
//Examples:
//"test" --> "es"
//"testing" --> "t"
//"middle" --> "dd"
//"A" --> "A"

function getMiddle(s) {
    //Code goes here!
    const mid = Math.floor(s.length / 2);
    return s.length % 2 === 0 ? s[mid - 1] + s[mid] : s[mid];
}
console.log(getMiddle('meat'));
console.log(getMiddle('hello'));