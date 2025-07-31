// Sorting Example: Sorting products by price
// Real-world use: E-commerce product sorting

// Bubble Sort
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// Quick Sort
function quickSort(arr) {
  if (arr.length < 2) return arr;
  const pivot = arr[0];
  const left = arr.slice(1).filter(x => x < pivot);
  const right = arr.slice(1).filter(x => x >= pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage:
const prices = [29.99, 9.99, 14.99, 4.99];
console.log(bubbleSort([...prices]));
console.log(quickSort([...prices]));
