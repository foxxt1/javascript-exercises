const removeFromArray = function(arr, ...args) {
    let toRemove = [];
    for (let j = 0; j <= args.length - 1; j++) {
        toRemove = toRemove.concat([args[j]]);
        };
    for (let i = 0; i < toRemove.length; i++) {
        for (let x = 0; x < arr.length; x++) {
             if (toRemove[i] === arr[x]) {
                arr.splice(x, 1);
                if (arr.includes(toRemove[i])) {
                    arr.splice(x, 1);
                }
             }
        }
    } 
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray1;


const removeFromArray1 = function(array, ...args) {
    const newArray = [];
    array.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item);
        }
    })
    return newArray;
}