function customFlatten(array) {
  return array.reduce((acc, val) => {
    return Array.isArray(val)
      ? acc.concat(customFlatten(val))
      : acc.concat(val);
  }, []);
}

const nestedArray = [1, [2, [3, [4]], 5]];
const flatArray = customFlatten(nestedArray);
console.log(flatArray);
