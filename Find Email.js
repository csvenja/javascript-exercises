function findEmail(str) {
    var re = /[a-zA-Z0-9\.]+@[a-zA-Z0-9\.]+/g;
    return str.match(re);
}
