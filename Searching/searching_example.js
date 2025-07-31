// Searching Example: Product search in e-commerce
// Real-world use: Searching for a product by name

// Linear Search
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

// Binary Search (array must be sorted)
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

// Example usage:
const products = ['apple', 'banana', 'carrot', 'date'];
console.log(linearSearch(products, 'carrot')); // 2
console.log(binarySearch(products.sort(), 'banana')); // 0 or 1 depending on sort
