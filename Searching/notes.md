
# Searching

## Description
Searching is the process of finding a specific element in a data structure. Efficient searching is crucial for performance in large datasets. Common algorithms include Linear Search and Binary Search.

## Common Algorithms

### 1. Linear Search
- **Pseudocode:**
  ```
  function linearSearch(array, target):
      for i from 0 to length(array)-1:
          if array[i] == target:
              return i
      return -1
  ```
- **Code Snippet:**
  ```js
  function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) return i;
    }
    return -1;
  }
  ```
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

### 2. Binary Search (Sorted Array)
- **Pseudocode:**
  ```
  function binarySearch(array, target):
      left = 0
      right = length(array) - 1
      while left <= right:
          mid = (left + right) // 2
          if array[mid] == target:
              return mid
          else if array[mid] < target:
              left = mid + 1
          else:
              right = mid - 1
      return -1
  ```
- **Code Snippet:**
  ```js
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
  ```
- **Time Complexity:** O(log n)
- **Space Complexity:** O(1)

### 3. Find First Occurrence (Binary Search Variant)
- **Pseudocode:**
  ```
  function firstOccurrence(array, target):
      left = 0
      right = length(array) - 1
      result = -1
      while left <= right:
          mid = (left + right) // 2
          if array[mid] == target:
              result = mid
              right = mid - 1
          else if array[mid] < target:
              left = mid + 1
          else:
              right = mid - 1
      return result
  ```
- **Code Snippet:**
  ```js
  function firstOccurrence(arr, target) {
    let left = 0, right = arr.length - 1, result = -1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) {
        result = mid;
        right = mid - 1;
      } else if (arr[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
    return result;
  }
  ```
- **Time Complexity:** O(log n)
- **Space Complexity:** O(1)

## Step-by-Step Example: Binary Search
Given arr = [1, 2, 3, 4, 5], target = 4:
1. left = 0, right = 4
2. mid = 2, arr[2] = 3 < 4, so left = 3
3. mid = 3, arr[3] = 4 == 4, found at index 3

## More Examples
```js
// Find all occurrences of a value
function allOccurrences(arr, target) {
  const indices = [];
  arr.forEach((val, idx) => {
    if (val === target) indices.push(idx);
  });
  return indices;
}

// Search in a rotated sorted array
function searchRotated(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[left] <= arr[mid]) {
      if (target >= arr[left] && target < arr[mid]) right = mid - 1;
      else left = mid + 1;
    } else {
      if (target > arr[mid] && target <= arr[right]) left = mid + 1;
      else right = mid - 1;
    }
  }
  return -1;
}
```

## Time and Space Complexity Summary
| Algorithm         | Time Complexity | Space Complexity |
|-------------------|----------------|-----------------|
| Linear Search     | O(n)           | O(1)            |
| Binary Search     | O(log n)       | O(1)            |
