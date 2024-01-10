function customPromiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      Promise.resolve(promise).then(resolve).catch(reject);
    });
  });
}

let promise1 = new Promise((resolve, reject) =>
  setTimeout(resolve, 500, "one")
);
let promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "two")
);
let promise3 = new Promise((resolve, reject) =>
  setTimeout(reject, 300, "three")
);

customPromiseRace([promise1, promise2, promise3])
  .then((value) => console.log(value))
  .catch((error) => console.error(error));
