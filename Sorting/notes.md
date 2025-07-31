
# Sorting

## Description
Sorting is the process of arranging data in a particular order (ascending or descending). Efficient sorting is important for optimizing the performance of other algorithms (like search and merge operations).

## Common Algorithms

### 1. Bubble Sort
- **Pseudocode:**
  ```
  function bubbleSort(array):
      n = length(array)
      for i from 0 to n-1:
          for j from 0 to n-i-2:
              if array[j] > array[j+1]:
                  swap array[j], array[j+1]
  ```
- **Code Snippet:**
  ```js
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
  ```
- **Time Complexity:** O(n^2)
- **Space Complexity:** O(1)

### 2. Insertion Sort
- **Pseudocode:**
  ```
  function insertionSort(array):
      for i from 1 to length(array)-1:
          key = array[i]
          j = i-1
          while j >= 0 and array[j] > key:
              array[j+1] = array[j]
              j = j-1
          array[j+1] = key
  ```
- **Code Snippet:**
  ```js
  function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = key;
    }
    return arr;
  }
  ```
- **Time Complexity:** O(n^2)
- **Space Complexity:** O(1)

### 3. Merge Sort
- **Pseudocode:**
  ```
  function mergeSort(array):
      if length(array) < 2:
          return array
      mid = length(array) // 2
      left = mergeSort(array[0:mid])
      right = mergeSort(array[mid:])
      return merge(left, right)

  function merge(left, right):
      result = []
      while left and right:
          if left[0] < right[0]:
              result.append(left.pop(0))
          else:
              result.append(right.pop(0))
      result += left + right
      return result
  ```
- **Code Snippet:**
  ```js
  function mergeSort(arr) {
    if (arr.length < 2) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
  }
  function merge(left, right) {
    const result = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) result.push(left.shift());
      else result.push(right.shift());
    }
    return result.concat(left, right);
  }
  ```
- **Time Complexity:** O(n log n)
- **Space Complexity:** O(n)

## Step-by-Step Example: Insertion Sort
Given arr = [5, 2, 4, 6, 1, 3]:
1. Start from index 1, compare with previous elements.
2. Shift elements greater than key to the right.
3. Insert key at correct position.
4. Repeat for all elements.

## More Examples
```js
// Selection Sort
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) minIdx = j;
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
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
```

## Time and Space Complexity Summary
| Algorithm      | Time Complexity | Space Complexity |
|--------------- |----------------|-----------------|
| Bubble Sort    | O(n^2)         | O(1)            |
| Insertion Sort | O(n^2)         | O(1)            |
| Selection Sort | O(n^2)         | O(1)            |
| Merge Sort     | O(n log n)     | O(n)            |
| Quick Sort     | O(n log n)     | O(log n)        |
