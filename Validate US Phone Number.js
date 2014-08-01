function validateUSPhoneNumber(str) {
    var re = /^\+1 [0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    return re.test(str);
}
