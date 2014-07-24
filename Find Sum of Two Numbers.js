// function findSum(array, z) {
//     var n = array.length,
//         m,
//         i,
//         j,
//         numbers = {},
//         newArray = [],
//         currentSum;

//     for (i = 0; i < n; i++) {
//         if (!numbers[array[i]]) {
//             numbers[array[i]] = true;
//             newArray.push(array[i]);
//         }
//     }

//     m = newArray.length;

//     for (i = 0; i < m; i++) {
//         for (j = m - 1; j >= i; j--) {
//             currentSum = newArray[i] + newArray[j];
//             if (currentSum === z) {
//                 return [array.indexOf(newArray[i]), array.indexOf(newArray[j])];
//             }
//             if (currentSum < z) {
//                 break;
//             }
//         }
//     }
// }

function findSum(array, z) {
    var n = array.length,
        i,
        numbers = {};

    for (i = 0; i < n; i++) {
        if (numbers[array[i]] === undefined) {
            numbers[array[i]] = i;
        }
    }

    for (i in numbers) {
        if (numbers[z - i]) {
            return [numbers[i], numbers[z - i]];
        }
    }
}
