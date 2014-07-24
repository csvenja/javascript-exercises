function findKNearestPoints(points, K) {
    function compareDistance(a, b) {
        var distA = Math.pow(a[0], 2) + Math.pow(a[1], 2),
            distB = Math.pow(b[0], 2) + Math.pow(b[1], 2);
        if (distA < distB) {
            return -1;
        }

        if (distA > distB) {
            return 1;
        }

        return 0;
    }

    points.sort(compareDistance);
    return points.slice(0, K);
}
