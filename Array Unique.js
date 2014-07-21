Array.prototype.unique = function () {
    var exist = {},
        i;

    for (i = 0; i < this.length; i++) {
        if (exist[this[i]]) {
            this.splice(i, 1);
            i -= 1;
        } else {
            exist[this[i]] = true;
        }
    }
};
