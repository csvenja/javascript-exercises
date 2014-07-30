function spacify(str) {
    return str.split('').join(' ');
}

String.prototype.spacify = function () {
    return this.split('').join(' ');
};
