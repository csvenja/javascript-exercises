function parseQueryString(url) {
    var reQuery = /\?(.*)$/,
        query = url.match(reQuery),
        items,
        n,
        i,
        result = {},
        currentItem;

    if (query) {
        query = query[1];
    } else {
        return result;
    }

    items = query.split('&');
    n = items.length;

    for (i = 0; i < n; i++) {
        currentItem = items[i].split('=');
        result[currentItem[0]] = currentItem[1];
    }

    return result;
}
