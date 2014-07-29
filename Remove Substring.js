function removeSubstring(string, substring) {
	var re = new RegExp(substring, 'g');
	if (re.test(string)) {
		return string.replace(re, "");
	}
    return -1;
}

console.log(removeSubstring('ABCSC', 'ABC'));
