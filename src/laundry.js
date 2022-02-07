/**
 * Laundry Problem
 *
 * @param {number} noOfWashes
 * @param {number[]} cleanPile
 * @param {number[]} dirtyPile
 *
 * @returns {number}
 */
function getMaxPairs(noOfWashes, cleanPile, dirtyPile) {
    let cleanArray = {};
    let dirtyArray = {};
    for (const sock of cleanPile) {
        cleanArray[sock] = cleanArray[sock] + 1 || 1;
    }
    for (const sock of dirtyPile) {
        dirtyArray[sock] = dirtyArray[sock] + 1 || 1;
    }

    for (const sock of cleanPile) {
        if (cleanArray[sock] % 2 !== 0 && dirtyArray[sock] % 2 !== 0) {
            if (noOfWashes > dirtyArray[sock]) {
                cleanArray[sock] += dirtyArray[sock];
                dirtyArray[sock] -= dirtyArray[sock];
                noOfWashes -= dirtyArray[sock];
            }
        } else if (cleanArray[sock] % 2 === 1 && dirtyArray[sock]) {
            cleanArray[sock] += 1;
            dirtyArray[sock] -= 1;
            noOfWashes--;
        }
    }

    for (const sock of dirtyPile) {
        if (dirtyArray[sock] / 2 >= 1) {
            let times = Math.trunc(dirtyArray[sock] / 2) * 2;
            if (noOfWashes > times) {
                cleanArray[sock] = cleanArray[sock] + times || times;
                dirtyArray[sock] -= times;
                noOfWashes -= times;
                console.log(noOfWashes)
            } else {
                times = Math.trunc(noOfWashes / 2) * 2;
                cleanArray[sock] = cleanArray[sock] + times || times;
                dirtyArray[sock] -= times;
                noOfWashes -= times;
            }

        }
    }

    answer = Object.values(cleanArray).reduce((acc, key) => {
        return acc + Math.trunc(key / 2);
    }, 0)

    return answer
}

module.exports = getMaxPairs;
