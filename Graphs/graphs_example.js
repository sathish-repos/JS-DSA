// Graph Example: Social network friend recommendations
// Real-world use: Finding friends of friends

class Graph {
  constructor() {
    this.adjList = new Map();
  }
  addVertex(v) {
    this.adjList.set(v, []);
  }
  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v); // undirected
  }
  bfs(start) {
    const visited = new Set();
    const queue = [start];
    visited.add(start);
    while (queue.length) {
      const vertex = queue.shift();
      console.log(vertex);
      for (const neighbor of this.adjList.get(vertex)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }
}

// Example usage:
const g = new Graph();
['A', 'B', 'C', 'D', 'E'].forEach(v => g.addVertex(v));
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.bfs('A'); // A B C D E
