# TypeScript Basics

## Introduction to TypeScript

TypeScript is a statically typed superset of JavaScript developed and maintained by Microsoft. It adds optional static typing to the language, which can help catch errors early during development and improve code maintainability.

### Key Features:
- Static type checking
- Support for modern JavaScript features
- Improved code readability and maintainability
- Compile-time error detection

## Installing TypeScript

You can install TypeScript globally using npm:
```bash
npm install -g typescript
```
To compile TypeScript files:
```bash
tsc filename.ts
```

## Basic Types in TypeScript

TypeScript provides several basic types for defining variables and function parameters.

### 1. Boolean
```ts
let isDone: boolean = false;
```

### 2. Number
```ts
let a : number = 42;
```

### 3. String
```ts
let color: string = "blue";
let fullName: string = `John Doe`;
```

### 4. Array
```ts
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
```

### 5. Tuple
```ts
let x: [string, number];
x = ["hello", 10];
```

### 6. Enum
```ts
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
```

### 7. Any
```ts
let notSure: any = 4;
notSure = "maybe a string instead";
```

### 8. Void
```ts
function warnUser(): void {
  console.log("This is a warning message");
}
```

### 9. Null and Undefined
```ts
let u: undefined = undefined;
let n: null = null;
```


## Declaring Variables in TypeScript

### Using let and const
```ts
let count: number = 10;
const PI: number = 3.14;
```

### Type Inference
If you assign a value during declaration, TypeScript infers the type.
```ts
let greeting = "Hello"; // inferred as string
greeting = 123; // Error
```

### Explicit Type Annotations
```ts
let userName: string;
userName = "Alic";
```

## Type Aliases and Interfaces

### Type Aliases

A type alias allows you to create a new name for a type.

```ts
type User = {
  name: string;
  age: number;
};

let user1: User = {
  name: "Alice",
  age: 25,
};
```

### Interfaces

Interfaces are similar to type aliases, but they are often used for defining the structure of objects and are extendable.

```ts
interface Person {
  name: string;
  age: number;
}

let person1: Person = {
  name: "Bob",
  age: 30,
};
```

Interfaces can also be extended:

```ts
interface Employee extends Person {
  employeeId: number;
}

let employee: Employee = {
  name: "Carol",
  age: 28,
  employeeId: 1001,
};
```

### Differences Between Type and Interface

- **Interfaces** are extendable and preferred when working with object shapes.
- **Type aliases** are more flexible and can represent primitives, unions, intersections, etc.
- Both can often be used interchangeably for objects.


## Conclusion

TypeScript provides a strong type system that enhances JavaScript with compile-time checking. Understanding basic types and variable declarations is fundamental to writing robust and maintainable TypeScript code.
