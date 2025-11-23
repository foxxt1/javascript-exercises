const repeatString = function(str, num) {
    let rep = "";

    if (num < 0) {
        return "ERROR";
    }

    for (let i = 0; i < num; i++) {
        rep += str;
    }
    return rep;
};

// Do not edit below this line
module.exports = repeatString;
