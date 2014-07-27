function parseString(str) {
    var re = /@(\w+)/g;

    str = str.replace(re, '<a href="http://facebook.com/$1">@$1</a>');

    return str;
}

var str = "Hello! @abc @def, @hij.";
console.log(parseString(str));