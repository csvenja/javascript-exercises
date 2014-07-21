function anagram(array) {
    var dictionary = {},
        string,
        result = [],
        n = array.length,
        i;

    for (i = 0; i < n; i++) {
        string = array[i].split('').sort().join('');
        if (dictionary[string] === undefined) {
            dictionary[string] = {};
            dictionary[string][array[i]] = true;
        } else if (!dictionary[string][array[i]]) {
            dictionary[string][array[i]] = true;
        }
    }

    for (i in dictionary) {
        result.push(Object.keys(dictionary[i]));
    }

    return result;
}

var input = ["cab", "cz", "abc", "bca", "zc"];
console.log(anagram(input));

function groupAnagram(array) {
  var n = array.length,
      i,
      dict = {},
      sortedString,
      result = [];

  for (i = 0; i < n; i++) {
    sortedString = array[i].split('').sort().join('');

    if (dict[sortedString] === undefined) {
      dict[sortedString] = {};
    }

    dict[sortedString][array[i]] = true;
  }

  for (i in dict) {
    result.push(Object.keys(dict[i]));
  }

  return result;
}

var input = ["star", "rats", "star", "car", "arc", "arts"];

console.log(groupAnagram(input));
