const findTheOldest = function(element) {
    let today = (new Date).getFullYear();
    // console.log(today);
    let oldest;
    // console.log(element[0], element[1]);
    for (let i = 0; i < element.length; i++) {
        age = 0
        if (element[i].yearOfDeath === undefined) {
            element[i].yearOfDeath = today;
            age =  element[i].yearOfDeath - element[i].yearOfBirth;
            if (oldest === undefined || age > (oldest.yearOfDeath - oldest.yearOfBirth)) {oldest = element[i]}
        } else if (element[i].yearOfDeath !== undefined){
            age = element[i].yearOfDeath - element[i].yearOfBirth;
            if (oldest === undefined || age > (oldest.yearOfDeath - oldest.yearOfBirth)) {oldest = element[i];}
        }
    };
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;

    const people = [
      {
        name: "Carly",
        yearOfBirth: 2018,
        yearOfDeath: 2025,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]

console.log(findTheOldest(people));
// findTheOldest(people);