input: [{a: 'a'}, 'b', ['c', 'd'], ['e', ['f']], 'g']
output: [{a: 'a'}, 'b', 'c', 'd', 'e', 'f', 'g']

function flattenArray(array) {
    var newArray = [],
        n = array.length,
        i;

    for (i = 0; i < n; i++) {
        if (Array.isArray(array[i])) {
            newArray.push.apply(newArray, flattenArray(array[i]));
        } else {
            newArray.push(array[i]);
        }
    }

    return newArray;
}

Object.prototype.toString.call(array[i]) === '[Object Array]';
