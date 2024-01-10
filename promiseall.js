function customPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let completedPromises = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          completedPromises += 1;
          if (completedPromises === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => reject(error));
    });

    if (promises.length === 0) {
      resolve(results);
    }
  });
}

let promise1 = Promise.resolve(3);
// let promise2 = 42;
let promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, 'error in');
});
let promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

customPromiseAll([promise1, promise2, promise3])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.log(error);
  });
