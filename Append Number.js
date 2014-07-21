function appendNumber(str) {
    var wordList = str.split(' '),
        newStr,
        n = wordList.length,
        i;

    for (i = 0; i < n; i++) {
        wordList[i] = wordList[i] + (i + 1);
    }

    newStr = wordList.join(' ');

    return newStr;
}
