const fibonacci = function(num) {
    let curr = 1;
    let prev = 1;
    let next = 1;
    if (parseInt(num) === 0) {return 0}
    if (num < 0) {return "OOPS"}
    for (let i = 2; i < parseInt(num); i++) {
        next = curr + prev;
        prev = curr;
        curr = next;
    }
    return next;
};

// Do not edit below this line
module.exports = fibonacci;
