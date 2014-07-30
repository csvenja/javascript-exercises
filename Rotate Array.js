function rotateArray(array, N) {
    var newArray = [],
        len = array.length,
        i;

    for (i = 0; i < len; i++) {
        newArray[(i + N) % len] = array[i];
    }

    return newArray;
}
