// JavaScript Set and WeakSet Example
// Set stores unique values; WeakSet stores objects only and does not prevent garbage collection

const set = new Set([1, 2, 2, 3]);
console.log(set); // Set { 1, 2, 3 }
set.add(4);
set.delete(2);
console.log(set.has(2)); // false

const obj = {};
const weakSet = new WeakSet();
weakSet.add(obj);
console.log(weakSet.has(obj)); // true
