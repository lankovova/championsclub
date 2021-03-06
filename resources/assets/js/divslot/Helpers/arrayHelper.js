/**
 * Get next number from given array
 * @param {Array} array Array to get an item from
 * @param {Number} item Current item
 * @returns {Number} Next item
 */
export function getNextArrayItem(array, item) {
    const currentIndex = array.indexOf(item);
    const newIndex = (currentIndex === array.length - 1) ? 0 : currentIndex + 1;

    return array[newIndex];
}


/**
 * Get two closest numbers in arrays which multiplying is the closest and lower to given value
 * @param {Number} value Value to be close to
 * @param {Array<Number>} firstArr Array where to find first value
 * @param {Array<Number>} secondArr Array where to find second value
 * @returns {Object} Return object with two best numbers
 */
export function getMultiplyNearestLowerNumbers(value, firstArr, secondArr) {
    // Init first values
    let best = {
        firstNumber: firstArr[0],
        secondNumber: secondArr[0]
    };

    // Loop from end for better perfomance/optimization
    for (let i = firstArr.length - 1; i >= 0; i--) {
        for (let j = secondArr.length - 1; j >= 0; j--) {
            // Skip case when multiply of two numbers is greater than value
            if (firstArr[i] * secondArr[j] > value) continue;

            // Remember current result if it is closer to value than best result
            if (firstArr[i] * secondArr[j] > best.firstNumber * best.secondNumber) {
                best = {
                    firstNumber: firstArr[i],
                    secondNumber: secondArr[j]
                };
            }
        }
    }
    return best;
}


/**
 * Shuffles array in place
 * @param {Array} a items An array containing the items.
 */
export function shuffleArray(array) {
    let resultArray = array.slice();
    for (let i = resultArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [resultArray[i], resultArray[j]] = [resultArray[j], resultArray[i]];
    }
    return resultArray;
}