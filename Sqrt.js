function sqrt(x) {
    var high = x,
        low = 1,
        mid,
        square,
        count = 0;

    while (count < 100) {
        mid = low + (high - low) / 2;
        square = mid * mid;
        if (square < x) {
            low = mid;
        } else if (square > x) {
            high = mid;
        } else {
            return mid;
        }
        count++;
    }
    return (low + high) / 2;
}
