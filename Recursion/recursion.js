// Recursion Example: Solving a maze (backtracking)
// Real-world use: Pathfinding in games or robotics

function solveMaze(maze, x, y, path = []) {
  if (x < 0 || y < 0 || x >= maze.length || y >= maze[0].length || maze[x][y] === 1) {
    return false;
  }
  if (maze[x][y] === 9) {
    path.push([x, y]);
    return true;
  }
  maze[x][y] = 1; // Mark as visited
  path.push([x, y]);
  // Try all directions
  if (
    solveMaze(maze, x + 1, y, path) ||
    solveMaze(maze, x - 1, y, path) ||
    solveMaze(maze, x, y + 1, path) ||
    solveMaze(maze, x, y - 1, path)
  ) {
    return true;
  }
  path.pop();
  return false;
}

// Example usage:
const maze = [
  [0, 0, 1, 0],
  [1, 0, 1, 0],
  [0, 0, 0, 0],
  [1, 1, 1, 9],
];
const path = [];
if (solveMaze(maze, 0, 0, path)) {
  console.log('Path to goal:', path);
} else {
  console.log('No path found');
}
