// This sort of function will live inside of firebase and will be triggered by set calls
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: "Tim",
            age: 24
        });
        resolve('This is my other resolved data'); // This will get ignored as cannot resolve > once
        // reject('Something went wrong')
    }, 5000)
});

console.log('before');

//then callback fires if/when promise resolves
promise.then((data) => {
    console.log(data);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is my other promise') 
        }, 5000)
    });
}).then((str) => {
    console.log('does this run?', str)
}).catch((error) => {
    console.log('error: ', error)
}); 

// a promise can only be resolved or rejected and done so a single time
console.log('after');
