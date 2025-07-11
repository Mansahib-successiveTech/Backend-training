import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from "url";
import { add, sub, mul, div } from "./lib/math";

// Required for __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//  Explicitly parse command-line arguments
const num1: number = parseInt(process.argv[2]);
const num2: number = parseInt(process.argv[3]);

// Perform operations
const resultAdd = add(num1, num2);
const resultSub = sub(num1, num2);
const resultMul = mul(num1, num2);
const resultDiv = div(num1, num2);

// Log results
console.log("Addition:", resultAdd);
console.log("Subtraction:", resultSub);
console.log("Multiplication:", resultMul);
console.log("Division:", resultDiv);

// Save to CSV
const result = `add,${num1},${num2},${resultAdd}\nsub,${num1},${num2},${resultSub}\nmult,${num1},${num2},${resultMul}\ndiv,${num1},${num2},${resultDiv}\n`;

const filePath = path.join(__dirname, 'results.csv');

await fs.appendFile(filePath, result);
console.log(" Results saved to results.csv");
