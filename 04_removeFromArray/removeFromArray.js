const removeFromArray = function(list, numToRemove) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] == numToRemove) {
            list.splice(i, 1)
            break
        }
    }
    return list
};

// Do not edit below this line
module.exports = removeFromArray;
