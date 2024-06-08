let promise = new Promise((resolve, reject) => {
    var num = Math.floor(Math.random() * 1000)
    setTimeout(() => {
        if (num % 2 == 0) {
            resolve("Promise Fulfilled")

        }
        else {
            reject("Failed")
        }

    }, 2000);
})
promise.then((res) => {
    console.log("resolved");
}).catch((res) => {
    console.log("rejected");
})