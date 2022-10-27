function pageCount(n, p) {
    // Write your code here
    let front = Math.floor(p/2);
    let back = Math.floor((n/2)- front);

    var result = Math.min(front,back);

    return result;
}

module.exports = pageCount;
