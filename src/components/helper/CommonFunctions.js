// ROUND OFF A NUMBER IN A ARG OF DECIMAL PLACES
// USAGE: round(12345.6789, 1);
// OUTPUT: 12345.7
export function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

// PICK RANDOM NUMBERS IN GIVEN COUNT
// USAGE: pickRandomNumbers(2, 5); // Pick 2 numbers in a set of array size 5
// OUTPUT: [1, 2]
export function pickRandomNumbers(number, length) {
    const picked = new Set();
    while (picked.size < number) {
        const num = Math.floor(Math.random() * length) + 1;
        picked.add(num);
    }
    return Array.from(picked);
}
// export function pickRandomNumbers(number, length) {
//     let picked = [];
//     function pick() {
//         if (picked.length >= number) {
//             return null;
//         }
//         let num;
//         do {
//             num = Math.floor(Math.random() * length) + 1;
//         } while (picked.includes(num));
//         picked.push(num);
//         return num;
//     }
//     for (let i = 0; i < length; i++) pick();
//     return picked;
// }
