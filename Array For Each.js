Array.prototype.myForEach = function (fn) {
    var n = this.length,
        i,
        array = this;

    for (i = 0; i < n; i++) {
        fn.call(this, array[i], i, array);
    }
};
