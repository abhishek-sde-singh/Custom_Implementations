// Custom map function added to Array prototype
Array.prototype.customMap = function (callback) {
  let result = []; // Initialize an empty array to store the results
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
    // Apply the callback to each element and push the result to the new array
  }
  return result;
};

const numbers = [1, 2, 3];
const doubledNumbers = numbers.customMap((num) => num * 2);

console.log(doubledNumbers);
