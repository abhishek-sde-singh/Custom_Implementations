function customConcat(...args) {
  let result = [];
  for (let arg of args) {
    if (Array.isArray(arg)) {
      result.push(...arg);
    } else {
      result.push(arg);
    }
  }
  return result;
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = customConcat(array1, array2, 7, 8);

console.log(combinedArray);
