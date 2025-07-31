// JavaScript Control Flow: Example Programs

// 1. Comparison and Logical Operators
let x = 7,
  y = 12;
console.log("x == y:", x == y); // false
console.log("x !== y:", x !== y); // true
console.log("x > 5 && y < 20:", x > 5 && y < 20); // true
console.log("!(x < y):", !(x < y)); // false

// 2. if...else and else if
let temp = 30;
if (temp > 35) {
  console.log("It is very hot!");
} else if (temp > 25) {
  console.log("It is warm.");
} else {
  console.log("It is cool.");
}

// 3. Ternary Operator
let isMember = true;
let fee = isMember ? "$2.00" : "$10.00";
console.log("Fee:", fee); // $2.00

// 4. for loop with continue and break
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // skip 3
  if (i === 5) break; // stop at 4
  console.log("for loop i:", i);
}

// 5. while loop
let count = 0;
while (count < 3) {
  console.log("while count:", count);
  count++;
}

// 6. do...while loop
let n = 0;
do {
  console.log("do...while n:", n);
  n++;
} while (n < 2);

// 7. switch...case
let fruit = "apple";
switch (fruit) {
  case "banana":
    console.log("Yellow fruit");
    break;
  case "apple":
    console.log("Red or green fruit");
    break;
  default:
    console.log("Unknown fruit");
}

// 8. Labeled Statement with Nested Loops
outer: for (let i = 1; i <= 2; i++) {
  for (let j = 1; j <= 2; j++) {
    if (i === j) continue outer;
    console.log(`i=${i}, j=${j}`);
  }
}
