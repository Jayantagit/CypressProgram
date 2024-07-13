let num = 10;
const promise1 = Promise.resolve(3);

const promise2 = new Promise((resolve,reject) => {
    setTimeout(() => {

        resolve("Promise2 resolved")
    }, 2000)
})
 Promise.all([promise1, promise2]).then((val) => {
    console.log(val);
});