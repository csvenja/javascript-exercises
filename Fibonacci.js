// function fibonacci(n) {
//     var fib = {
//         1: 1,
//         2: 1
//     };

//     function fibNumber(x) {
//         if (!fib[x]) {
//             fib[x] = fibNumber(x - 1) + fibNumber(x - 2);
//         }
//         return fib[x];
//     }

//     return fibNumber(n);
// }

// function fib(n) {
//     var fibDict = {
//         1: 1,
//         2: 1
//     },
//         i;

//     for (i = 3; i <= n; i++) {
//         fibDict[i] = fibDict[i - 1] + fibDict[i - 2];
//     }

//     return fibDict[n];
// }

function fibonacci(n) {
    var fib1 = 1,
        fib2 = 1,
        tmp,
        i;

    for (i = 3; i <= n; i++) {
        tmp = fib2;
        fib2 = fib1;
        fib1 = tmp + fib2;
    }

    return fib1;
}
