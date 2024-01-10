function customForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

const sampleArray = [1, 2, 3, 4, 5];

customForEach(sampleArray, (item, index) => {
  console.log(`Element at ${index}: ${item}`);
});
