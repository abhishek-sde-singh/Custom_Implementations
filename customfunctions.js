// debounce

const improve = (fn, d) => {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, d);
  };
};

const getData = () => {
  console.log("fetching data");
};

const debounce = improve(getData, 300);

// throttel
function throttle(func, limit) {
  let inThrottle;
  return function () {
    if (!inThrottle) {
      func.apply(this, arguments);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

function myFunction() {
  console.log("Function called!");
}

const throttledFunction = throttle(myFunction, 3000);

// custom map function
function customMap(array, callback) {
  const result = [];
  for (const element of array) {
    console.log("map is calling", element);
    result.push(callback(element));
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = customMap(numbers, (num) => num * num);
console.log(squaredNumbers);

// custom filter function
function customFilter(array, callback) {
  const result = [];
  for (const element of array) {
    if (callback(element)) {
      result.push(element);
    }
  }

  return result;
}

const arr = [1, 2, 3, 4, 5];
const evenNumbers = customFilter(arr, (num) => num % 2 === 0);
console.log(evenNumbers);

// custom reduce
function customReduce(array, callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : array[0];
  const startIndex = initialValue !== undefined ? 0 : 1;
  for (let i = startIndex; i < array.length; i++) {
    accumulator = callback(accumulator, array[i]);
  }
  return accumulator;
}

const arr1 = [1, 2, 3, 4, 5];
const sum = customReduce(arr1, (acc, num) => acc + num, 0);
console.log(sum);

// custom call
function customCall(fn, context, ...args) {
  context = context || global;
  // Add the function to the context
  context.fn = fn;
  // Execute the function with the provided arguments
  const result = context.fn(...args);
  // Remove the function from the context
  delete context.fn;
  return result;
}

function greet(message) {
  return `${message}, ${this.name}!`;
}

const person = { name: "John" };
const greeting = customCall(greet, person, "Hello");
console.log(greeting);

// custom apply
function customApply(fn, context, argsArray) {
  context = context || global;
  context.fn = fn;
  const result = context.fn(...argsArray);
  delete context.fn;
  return result;
}

const appliedGreeting = customApply(greet, person, ["Hola"]);
console.log(appliedGreeting);
