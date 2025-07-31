// Greedy Algorithm Example: Activity Selection
// Real-world use: Scheduling maximum number of non-overlapping meetings

function activitySelection(activities) {
  // Sort by finish time
  activities.sort((a, b) => a[1] - b[1]);
  let count = 1;
  let lastEnd = activities[0][1];
  for (let i = 1; i < activities.length; i++) {
    if (activities[i][0] >= lastEnd) {
      count++;
      lastEnd = activities[i][1];
    }
  }
  return count;
}

// Example usage:
const activities = [
  [1, 3], [2, 5], [4, 7], [6, 9], [8, 10]
];
console.log(activitySelection(activities)); // 3
