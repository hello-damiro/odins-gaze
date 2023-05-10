// ROUND OFF A NUMBER IN A ARG OF DECIMAL PLACES
// USAGE: round(12345.6789, 1);
// OUTPUT: 12345.7
export function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}
