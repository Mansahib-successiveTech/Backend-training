import lodash from "lodash";

const { add: lodashAdd, subtract, multiply, divide } = lodash;

const add = (num1, num2) => lodashAdd(num1, num2);
const sub = (num1, num2) => subtract(num1, num2);
const mul = (num1, num2) => multiply(num1, num2);
const div = (num1, num2) => divide(num1, num2);

export { add, sub, mul, div };
