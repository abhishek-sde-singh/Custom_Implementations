Function.prototype.customBind = function (context, ...args) {
  return (...newArgs) => this.apply(context, [...args, ...newArgs]);
};

function greet(message) {
  return `${message}, ${this.name}!`;
}

const user = { name: "ABHISHEK" };
const greeting = greet.customBind(user, "hello");

console.log(greeting());
