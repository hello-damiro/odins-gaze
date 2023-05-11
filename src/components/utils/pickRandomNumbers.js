// PICK RANDOM NUMBERS IN GIVEN COUNT
// USAGE: pickRandomNumbers(arrayOfIDs, 5); // Pick 2 numbers in a set of array arrayOfIDs
// OUTPUT: [asasfasf, afawfa]
export function pickRandomIDs(IDs, numValues) {
    const randomIDs = [];
    const availableIDs = [...IDs]; // Create a copy of the IDs array

    for (let i = 0; i < numValues; i++) {
        const randomIndex = Math.floor(Math.random() * availableIDs.length);
        const randomID = availableIDs.splice(randomIndex, 1)[0];

        randomIDs.push(randomID);

        if (availableIDs.length === 0) {
            break; // Break the loop if all IDs have been selected
        }
    }

    return randomIDs;
}
