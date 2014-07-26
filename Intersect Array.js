// function intersectArray(arrayA, arrayB) {
//     var nA = arrayA.length,
//         nB = arrayB.length,
//         i = 0,
//         j = 0,
//         intersectDict = {},
//         intersection = [];

//     arrayA.sort();
//     arrayB.sort();

//     while (i < nA && j < nB) {
//         if (arrayA[i] < arrayB[j]) {
//             i++;
//         } else if (arrayA[i] > arrayB[j]) {
//             j++;
//         } else {
//             if (!intersectDict[arrayA[i]]) {
//                 intersection.push(arrayA[i]);
//                 intersectDict[arrayA[i]] = true;
//             }
//             i++;
//             j++;
//         }
//     }

//     return intersection;
// }

function intersectArray(arrayA, arrayB) {
    var nA = arrayA.length,
        nB = arrayB.length,
        i,
        arrayADict = {},
        intersectDict = {},
        intersection = [];

    for (i = 0; i < nA; i++) {
        arrayADict[arrayA[i]] = true;
    }

    for (i = 0; i < nB; i++) {
        if (arrayADict[arrayB[i]] && !intersectDict[arrayB[i]]) {
            intersection.push(arrayB[i]);
            intersectDict[arrayB[i]] = true;
        }
    }

    return intersection;
}
