//promises
let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("first promise")

    }, 1000)
})

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("second promise")
    }, 2000)
    setTimeout(() => {
        reject("second promise reject")
    }, 100)
})

let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("third promise")
    }, 3000)
})

const promises = [promise1, promise2, promise3];

//rejects all promises.when any of the promise is rejected
Promise.all(promises).then(value => {
    console.log("promise.all", value);
}).catch(err => {
    console.error("promise.all", err)
})

//returns first promise even it is rejected or resolved
Promise.race(promises).then(value => {
    console.log("promise.race", value);
}).catch(err => {
    console.error("promise.race", err)
})

//returns first promise which is resolved
Promise.any(promises).then(value => {
    console.log("promise.any", value);
}).catch(err => {
    console.error("promise.any", err)
})

//returns all the promises after completion
Promise.allSettled(promises).then(value => {
    console.log("promise.allSettled", value);
}).catch(err => {
    console.error("promise.allSettled", err)
})


