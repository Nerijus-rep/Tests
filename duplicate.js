function duplicate(array) {
    var a = array;
    for (var i = 0; i < array.length; i++) {
    };
    var b = a.concat(array);
    return b;
};