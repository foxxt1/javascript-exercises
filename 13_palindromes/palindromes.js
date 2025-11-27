const palindromes = function (str) {
    // let rev = str.split(" ").join("").split("").reverse().join("").replace("!", "").replace(".", "").replace("'", "");
    // if (str === rev) {
    //     return true;
    // } else {return false;}

    const clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const cleanRev = clean.split("").reverse().join("");

    if (clean === cleanRev) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
