import lodash from 'lodash';

// Addition
const add = (num1: number, num2: number): number => lodash.add(num1, num2);

// Subtraction
const sub = (num1: number, num2: number): number => lodash.subtract(num1, num2);

// Multiplication
const mul = (num1: number, num2: number): number => lodash.multiply(num1, num2);

// Division
const div = (num1: number, num2: number): number => lodash.divide(num1, num2);

export { add, sub, mul, div };
