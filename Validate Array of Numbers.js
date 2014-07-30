function numbers() {
    var n = arguments.length,
        i;

    for (i = 0; i < n; i++) {
        if (Object.prototype.toString.call(arguments[i]) === '[object Number]') {
            return false;
        }
    }

    return true;
}

function numbers(){
    return Array.prototype.slice.call(arguments).every(function(i) {
        return Object.prototype.toString.call(i) === '[object Number]';
    });
}
