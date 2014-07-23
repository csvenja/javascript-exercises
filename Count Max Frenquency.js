function countMaxFrequency(str) {
    var count = {},
        n = str.length,
        i,
        max = '';

    for (i = 0; i < n; i++) {
        if (count[str[i]]) {
            count[str[i]]++;
        } else {
            count[str[i]] = 1;
        }

        if (max === '' || count[str[i]] > count[max]) {
            max = str[i];
        }
    }

    return max + ' (' + count[max] + ')';
}
