function customPromiseAny(promises) {
  return new Promise((resolve, reject) => {
    let errors = [];
    let completedPromises = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => resolve(value))
        .catch((error) => {
          errors[index] = error;
          completedPromises += 1;
          if (completedPromises === promises.length) {
            reject(new Error("All promises were rejected", errors));
          }
        });
    });
  });
}

let promise1 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "Error in promise1")
);
let promise2 = new Promise((resolve, reject) => setTimeout(reject, 200, "two"));
let promise3 = new Promise((resolve, reject) =>
  setTimeout(reject, 300, "three")
);

customPromiseAny([promise1, promise2, promise3])
  .then((value) => console.log(value))
  .catch((error) => console.error(error));
