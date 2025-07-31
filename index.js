// index.js
// Run any DSA example by selecting from a menu
const readline = require("readline");

const examples = [
  { name: "Arrays", file: "./Arrays/arrays.js" },
  { name: "Bit Manipulation", file: "./BitManipulation/bitmanipulation.js" },
  { name: "Dynamic Programming", file: "./DynamicProgramming/dp.js" },
  { name: "Graphs", file: "./Graphs/graphs.js" },
  { name: "Greedy", file: "./Greedy/greedy.js" },
  { name: "Hash Tables", file: "./HashTables/hashtables.js" },
  { name: "Linked Lists", file: "./LinkedLists/linkedlists.js" },
  { name: "Math", file: "./Math/math.js" },
  { name: "Queues", file: "./Queues/queues.js" },
  { name: "Recursion", file: "./Recursion/recursion.js" },
  { name: "Searching", file: "./Searching/searching.js" },
  { name: "Sorting", file: "./Sorting/sorting.js" },
  { name: "Stacks", file: "./Stacks/stacks.js" },
  { name: "Trees", file: "./Trees/trees.js" },
];

console.log("Select a DSA topic to run its example programs:");
examples.forEach((ex, i) => {
  console.log(`${i + 1}. ${ex.name}`);
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your choice (1-" + examples.length + "): ", (answer) => {
  const idx = parseInt(answer) - 1;
  if (idx >= 0 && idx < examples.length) {
    console.log(`\n--- Running ${examples[idx].name} examples ---\n`);
    require(examples[idx].file);
  } else {
    console.log("Invalid choice.");
  }
  rl.close();
});
