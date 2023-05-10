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
