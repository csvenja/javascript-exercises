function colorNearestLink() {
    var mousePosition,
        currentLink,
        newStyle = document.createElement("style");

    newStyle.type = "text/css";
    newStyle.innerHTML = ".nearestLink { background: yellow; }";
    document.getElementsByTagName("head")[0].appendChild(newStyle);

    window.onmousemove = handleMouseMove;
    setInterval(getMousePosition, 10);

    function handleMouseMove(event) {
        event = event || window.event;
        mousePosition = {
            x: event.clientX,
            y: event.clientY
        };
    }

    function getMousePosition() {
        var pos = mousePosition,
            linkList,
            nearest,
            minDist,
            currentDist,
            n,
            i;

        if (pos) {
            linkList = document.getElementsByTagName("a");
            n = linkList.length;

            for (i = 0; i < n; i++) {
                currentDist = distance(pos, getPosition(linkList[i]));
                if (!nearest) {
                    nearest = linkList[i];
                    minDist = currentDist;
                } else {
                    if (currentDist < minDist) {
                        nearest = linkList[i];
                        minDist = currentDist;
                    }
                }
            }

            if (currentLink) {
                currentLink.classList.toggle("nearestLink");
            }

            currentLink = nearest;
            currentLink.classList.toggle("nearestLink");
        }
    }

    function getPosition(elem) {
        var xPosition = 0;
        var yPosition = 0;

        while (element) {
            xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
            yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
            element = element.offsetParent;
        }
        return { x: xPosition, y: yPosition };
    }

    function distance(a, b) {
        return Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2);
    }
}