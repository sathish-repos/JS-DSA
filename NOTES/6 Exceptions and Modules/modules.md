# JavaScript Modules

JavaScript modules allow you to split your code into separate files, making it easier to maintain and reuse. Modules can export variables, functions, or classes, and import them in other files.

## Exporting

Use `export` to make code available outside a module.

```js
// math.js
export function add(a, b) {
  return a + b;
}
export const PI = 3.14;
```

## Importing

Use `import` to bring in exported code from another module.

```js
// app.js
import { add, PI } from "./math.js";
console.log(add(2, 3)); // 5
console.log(PI); // 3.14
```

## Default Export

A module can have one default export.

```js
// greet.js
export default function greet(name) {
  return `Hello, ${name}!`;
}
```

```js
// app.js
import greet from "./greet.js";
console.log(greet("Alice"));
```

## Notes

- Use the `.js` extension in import paths when using ES modules in Node.js or browsers.
- Modules are supported in modern browsers and Node.js (with `type: "module"` in `package.json`).
- Each module has its own scope.
