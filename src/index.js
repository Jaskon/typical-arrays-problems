exports.min = function min(array) {
    if (!array || !array.length) {
        return 0;
    }
    return array.reduce((accum, one) => one < accum ? one : accum);
}

exports.max = function max(array) {
    if (!array || !array.length) {
        return 0;
    }
    return array.reduce((accum, one) => one > accum ? one : accum);
}

exports.avg = function avg(array) {
    if (!array || !array.length) {
        return 0;
    }
    return array.reduce((sum, one) => sum + one) / array.length;
}
