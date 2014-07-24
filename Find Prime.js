function findPrime() {
    var i,
        j,
        eliminated = {},
        prime = [];

    for (i = 2; i <= 5000; i++) {
        for (j = 2; j <= 10000 / i; j++) {
            eliminated[i * j] = true;
        }
    }

    for (i = 2; i <= 10000; i++) {
        if (!eliminated[i]) {
            prime.push(i);
        }
    }

    return prime;
}
