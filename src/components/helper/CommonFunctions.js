// ROUND OFF A NUMBER IN A ARG OF DECIMAL PLACES
// USAGE: round(12345.6789, 1);
// OUTPUT: 12345.7
export function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

// PICK RANDOM NUMBERS IN GIVEN COUNT
// USAGE: pickRandomNumbers(2, 5);
// OUTPUT: [1, 2]
export function pickRandomNumbers(count, max) {
    let picked = [];
    function pick() {
        if (picked.length >= count) {
            return null;
        }
        let num;
        do {
            num = Math.floor(Math.random() * max) + 1;
        } while (picked.includes(num));
        picked.push(num);
        return num;
    }
    return () => pick();
}
