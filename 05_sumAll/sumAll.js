const sumAll = function(start, stop) {
    if (typeof(start) != 'number' || typeof stop != 'number' || start < 0 || stop < 0) {
        return 'ERROR'
    }
    if (stop < start) {
        [start, stop] = [stop, start]
    }
    total = 0
    for (let i = start; i < stop + 1; i++) {
        total += i
    }
    return total
};

// Do not edit below this line
module.exports = sumAll;
