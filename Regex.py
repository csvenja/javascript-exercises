'''

Writing a simple regex parser (with ".", "*" and "?").

regexMatch("a.*d", "abcd");   // => true
regexMatch("a.d", "abcd");    // => false
regexMatch(".*aow?", "miao"); // => true

'''


def singleMatch(regex, char):
    if regex == '.':
        return True
    return regex == char


def regexMatch(regex, str):
    if len(regex) == 0:
        if len(str) == 0:
            return True
        else:
            return False

    if len(regex) > 1 and regex[1] == '?':
        return regexMatch(regex[2:], str) or regexMatch([regex[0]] + regex[2:], str)

    if len(regex) > 1 and regex[1] == '*':
        # zero
        if regexMatch(regex[2:], str):
            return True

        # multiple
        if singleMatch(regex[0], str[0]):
            return regexMatch(regex, str[1:])
        else:
            return False

    if singleMatch(regex[0], str[0]):
        return regexMatch(regex[1:], str[1:])
    else:
        return False


print regexMatch("a.*d", "abcd")
print regexMatch("a.d", "abcd")
print regexMatch(".*aow?", "miao")
