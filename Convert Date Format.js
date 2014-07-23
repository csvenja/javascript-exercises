function convertDateFormatWithSlash(str) {
    var year = str.substr(0, 4),
        month = str.substr(4, 2),
        day = str.substr(6, 2);
    return day + '/' + month + '/' + year;
}

function convertDateFormatWithoutSlash(str) {
    var date = str.split('/');

    if (date[0].length < 2) {
        date[0] = '0' + date[0];
    }

    if (date[1].length < 2) {
        date[1] = '0' + date[1];
    }

    return date.reverse().join('');
}
