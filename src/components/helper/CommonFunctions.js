// ROund off a number in a arg of decimal places
// USAGE: round(12345.6789, 1) // 12345.7
export function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}
