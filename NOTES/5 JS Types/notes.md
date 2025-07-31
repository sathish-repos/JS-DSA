# JavaScript Array

## What is an Array?

An array is a data structure that can hold a collection of values. In JavaScript, arrays are dynamic, can hold elements of any type, and are zero-indexed.

## Creating Arrays

- Using array literals: `let arr = [1, 2, 3];`
- Using the Array constructor: `let arr = new Array(1, 2, 3);`

## Common Array Methods

- `push()`, `pop()`, `shift()`, `unshift()`
- `map()`, `filter()`, `reduce()`
- `forEach()`, `find()`, `includes()`

## Example

See `arrays_example.js` for code examples.

# JavaScript Multidimensional Array

## What is a Multidimensional Array?

A multidimensional array is an array of arrays. In JavaScript, you can create 2D, 3D, or higher-dimensional arrays by nesting arrays.

## Creating a 2D Array

- `let matrix = [[1, 2], [3, 4]];`

## Accessing Elements

- `matrix[0][1] // 2`

## Iterating Over a 2D Array

Use nested loops to access elements.

## Example

See `multidimensional_array_example.js` for code examples.

# JavaScript String

## What is a String?

A string is a sequence of characters used to represent text. In JavaScript, strings are immutable and can be created using single, double, or backticks.

## Creating Strings

- `let str = 'hello';`
- `let str2 = "world";`
- `let str3 = `template`;

## Common String Methods

- `length`, `toUpperCase()`, `toLowerCase()`, `slice()`, `substring()`, `replace()`, `split()`, `includes()`

## Example

See `string_example.js` for code examples.

# JavaScript for...in Loop

## What is for...in?

The `for...in` loop iterates over the enumerable property keys of an object (including arrays, but not recommended for arrays).

## Syntax

```
for (let key in object) {
  // code
}
```

## Use Cases

- Iterating over object properties
- Not recommended for arrays (use `for...of` or array methods instead)

## Example

See `forin_example.js` for code examples.

# JavaScript Number

## What is a Number?

JavaScript has a single number type (IEEE 754 double-precision floating point). Numbers can be integers or floating-point values.

## Creating Numbers

- `let n = 42;`
- `let f = 3.14;`
- `let num = Number('123');`

## Common Number Methods & Properties

- `toFixed()`, `toPrecision()`, `isNaN()`, `parseInt()`, `parseFloat()`, `Number.MAX_VALUE`, `Number.MIN_VALUE`

## Example

See `number_example.js` for code examples.

# JavaScript Symbol

## What is a Symbol?

A Symbol is a primitive data type introduced in ES6. Each Symbol is unique and can be used as an object property key.

## Creating Symbols

- `let sym = Symbol();`
- `let sym2 = Symbol('desc');`

## Use Cases

- Unique property keys
- Hiding implementation details

## Example

See `symbol_example.js` for code examples.
