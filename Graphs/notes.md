
# Graphs

## Description
A graph is a collection of nodes (vertices) and edges connecting pairs of nodes. Graphs can be directed or undirected, weighted or unweighted. They are used in networks, social graphs, pathfinding, and more.

## Common Operations

### 1. Add Vertex
- **Pseudocode:**
  ```
  function addVertex(graph, v):
      if v not in graph:
          graph[v] = []
  ```
- **Code Snippet:**
  ```js
  graph.addVertex('A');
  ```
- **Time Complexity:** O(1)
- **Space Complexity:** O(1)

### 2. Add Edge
- **Pseudocode:**
  ```
  function addEdge(graph, v, w):
      graph[v].append(w)
      if undirected:
          graph[w].append(v)
  ```
- **Code Snippet:**
  ```js
  graph.addEdge('A', 'B');
  ```
- **Time Complexity:** O(1)
- **Space Complexity:** O(1)

### 3. Breadth-First Search (BFS)
- **Pseudocode:**
  ```
  function BFS(graph, start):
      create queue Q
      mark start as visited
      enqueue start to Q
      while Q is not empty:
          node = Q.dequeue()
          for each neighbor of node:
              if neighbor not visited:
                  mark neighbor as visited
                  enqueue neighbor to Q
  ```
- **Code Snippet:**
  ```js
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
  ```
- **Time Complexity:** O(V + E)
- **Space Complexity:** O(V)

### 4. Depth-First Search (DFS)
- **Pseudocode:**
  ```
  function DFS(graph, node, visited):
      if node not in visited:
          print(node)
          mark node as visited
          for each neighbor of node:
              DFS(graph, neighbor, visited)
  ```
- **Code Snippet:**
  ```js
  function dfs(graph, start, visited = new Set()) {
    if (visited.has(start)) return;
    console.log(start);
    visited.add(start);
    for (const neighbor of graph.adjList[start]) {
      dfs(graph, neighbor, visited);
    }
  }
  ```
- **Time Complexity:** O(V + E)
- **Space Complexity:** O(V)

## Step-by-Step Example: BFS
Given graph: A - B - C, start at A
1. Enqueue A, mark as visited
2. Dequeue A, enqueue B
3. Dequeue B, enqueue C
4. Dequeue C
Order: A, B, C

## More Examples
```js
// Count vertices
function countVertices(graph) {
  return Object.keys(graph.adjList).length;
}

// Check if path exists (DFS)
function hasPath(graph, src, dest, visited = new Set()) {
  if (src === dest) return true;
  visited.add(src);
  for (const neighbor of graph.adjList[src]) {
    if (!visited.has(neighbor) && hasPath(graph, neighbor, dest, visited)) return true;
  }
  return false;
}
```

## Time and Space Complexity Summary
| Operation | Time Complexity | Space Complexity |
|-----------|----------------|-----------------|
| Add Vertex| O(1)           | O(1)            |
| Add Edge  | O(1)           | O(1)            |
| BFS       | O(V+E)         | O(V)            |
| DFS       | O(V+E)         | O(V)            |
