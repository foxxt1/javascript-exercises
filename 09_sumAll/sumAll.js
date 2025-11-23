const sumAll = function(a, b) {
    if (a < 0 || b < 0 || Math.floor(a) !== a || Math.floor(b) !== b) {
        return "ERROR";
    }
    let a1;
    let b1;
    if (a < b) {
        a1 = a;
        b1 = b; 
    } else if (a > b) {
        a1 = b;
        b1 = a;
    }
    let sum = 0;
    for (let i = a1; i <= b1; i ++) {
        sum += i;
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;