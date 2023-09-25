const removeFromArray = function(list, ...numToRemove) {
    ans = []
    for (let i = 0; i < list.length; i++) {
        if (!numToRemove.includes(list[i])) {
            ans.push(list[i])
        }
    }
    return ans
};

// Do not edit below this line
module.exports = removeFromArray;
