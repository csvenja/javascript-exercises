var root1
var root2
var node1

var node2;

function findNode(root1, root2, node1) {
    var route = [],
        node2 = root2,
        n,
        i;

    while (node1 !== root1) {
        route.push(node1.parentNode.childNodes.indexOf(node1));
        node1 = node1.parentNode;
    }

    n = route.length;

    for (i = 0; i < n; i++) {
        node2 = node2.childNodes[i];
    }

    return node2;
}

root.childNodes => <NodeList>
root.parentNode => <Node>
