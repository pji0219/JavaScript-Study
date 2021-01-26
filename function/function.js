function add(n1, n2) {
    return n1 + n2
}

function surprise(callback) {
    return callback(3, 4); // = add(3, 4);
}

console.log(surprise(add));