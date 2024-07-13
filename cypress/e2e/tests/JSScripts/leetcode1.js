const { Promise, resolve } = require("cypress/types/bluebird");

var filter = function (arr) {
    let arr1 = []
    arr.forEach(ele => {
        if (ele < 10) {
            arr1.push(ele);
        }

    });
    return arr1;
}
console.log(filter([1, 4, 5, 6, 11, 6, 12]));

let arr1 = [1, 4, 5, 6, 11, 6, 12]
var map1 = arr1.reduce((acc, curr) => {
    return acc += curr;
})


console.log(map1);
