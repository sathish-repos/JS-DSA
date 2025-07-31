
# Arrays

## Description
Arrays are linear data structures that store elements in contiguous memory locations. Each element can be accessed directly using its index. Arrays are widely used for their simplicity and efficiency in accessing elements.

## Common Operations

### 1. Accessing Elements
- **Description:** Retrieve an element at a specific index.
- **Pseudocode:**
  ```
  function getElement(array, index):
      return array[index]
  ```
- **Code Snippet:**
  ```js
  const arr = [10, 20, 30];
  console.log(arr[1]); // 20
  ```
- **Time Complexity:** O(1)
- **Space Complexity:** O(1)

### 2. Insertion
- **Description:** Insert an element at a specific index (may require shifting elements).
- **Pseudocode:**
  ```
  function insertAt(array, index, value):
      for i from array.length - 1 down to index:
          array[i + 1] = array[i]
      array[index] = value
  ```
- **Code Snippet:**
  ```js
  let arr = [1, 2, 4, 5];
  arr.splice(2, 0, 3); // [1, 2, 3, 4, 5]
  ```
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

### 3. Deletion
- **Description:** Remove an element at a specific index (may require shifting elements).
- **Pseudocode:**
  ```
  function deleteAt(array, index):
      for i from index to array.length - 2:
          array[i] = array[i + 1]
      remove last element
  ```
- **Code Snippet:**
  ```js
  let arr = [1, 2, 3, 4, 5];
  arr.splice(2, 1); // [1, 2, 4, 5]
  ```
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

### 4. Traversal
- **Description:** Visit each element in the array.
- **Pseudocode:**
  ```
  function traverse(array):
      for i from 0 to array.length - 1:
          print(array[i])
  ```
- **Code Snippet:**
  ```js
  arr.forEach((el) => console.log(el));
  ```
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

## Step-by-Step Example: Insertion
Given arr = [1, 2, 4, 5], insert 3 at index 2:
1. Shift elements from index 2 onwards to the right.
2. Place 3 at index 2.
3. Result: [1, 2, 3, 4, 5]

## More Examples
```js
// Find the maximum element
function findMax(arr) {
  return Math.max(...arr);
}

// Reverse an array
function reverseArray(arr) {
  return arr.slice().reverse();
}

// Sum of all elements
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
```

## Time and Space Complexity Summary
| Operation   | Time Complexity | Space Complexity |
|-------------|----------------|-----------------|
| Access      | O(1)           | O(1)            |
| Insertion   | O(n)           | O(1)            |
| Deletion    | O(n)           | O(1)            |
| Traversal   | O(n)           | O(1)            |
