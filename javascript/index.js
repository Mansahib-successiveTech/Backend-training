import { add, sub, mul, div } from "./src/lib/math.js"; 
import fs from "fs";
const [, , arg1, arg2] = process.argv;

const num1 = parseFloat(arg1);
const num2 = parseFloat(arg2);

const additional = add(num1, num2);
const subtract = sub(num1, num2);
const multiply = mul(num1, num2);
const divide = div(num1, num2);

console.log("Add:", additional);
console.log("Subtract:", subtract);
console.log("Multiply:", multiply);
console.log("Divide:", divide);

const csvData = `
Addition,${additional}
Subtraction,${subtract}
Multiplication,${multiply}
Division,${divide}
`;

fs.appendFileSync("result.csv",csvData)