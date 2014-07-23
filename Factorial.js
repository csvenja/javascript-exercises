function factorial(n) {
    var i,
        fact = 1;

    for (i = n; i > 1; i--) {
        fact *= i;
    }

    return fact;
}
