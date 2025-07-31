// Example 1: Graph using adjacency list
class Graph {
  constructor() {
    this.adjList = {};
  }
  addVertex(v) {
    if (!this.adjList[v]) this.adjList[v] = [];
  }
  addEdge(v, w) {
    this.addVertex(v);
    this.addVertex(w);
    this.adjList[v].push(w);
    this.adjList[w].push(v); // undirected
  }
}

// Example 2: BFS traversal
function bfs(graph, start) {
  const visited = new Set();
  const queue = [start];
  while (queue.length) {
    const node = queue.shift();
    if (!visited.has(node)) {
      console.log(node);
      visited.add(node);
      for (const neighbor of graph.adjList[node]) {
        if (!visited.has(neighbor)) queue.push(neighbor);
      }
    }
  }
}

// Example 3: DFS traversal
function dfs(graph, start, visited = new Set()) {
  if (visited.has(start)) return;
  console.log(start);
  visited.add(start);
  for (const neighbor of graph.adjList[start]) {
    dfs(graph, neighbor, visited);
  }
}
