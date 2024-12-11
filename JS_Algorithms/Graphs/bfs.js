// Breadth-First Search (BFS) is a non-weighted graph traversal 
// algorithm used to explore nodes and edges of a graph 
// systematically. 
// It explores all the nodes at the current depth level 
// before moving to nodes at the next depth level. 
// BFS uses a queue data structure to keep track of nodes 
// to visit and ensures that nodes are processed in the order 
// they are encountered.

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList.has(vertex1)) {
      this.adjacencyList.get(vertex1).push(vertex2);
    }
    if (this.adjacencyList.has(vertex2)) {
      this.adjacencyList.get(vertex2).push(vertex1);
    }
  }

  breadthFirstSearch(startingVertex) {
    if (!this.adjacencyList.has(startingVertex)) return [];

    const visited = new Set();
    const queue = [startingVertex];
    const result = [];

    while (queue.length > 0) {
      const vertex = queue.shift();
      if (!visited.has(vertex)) {
        visited.add(vertex);
        result.push(vertex);

        const neighbors = this.adjacencyList.get(vertex);
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            queue.push(neighbor);
          }
        }
      }
    }

    return result;
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "F");

const bfsResult = graph.breadthFirstSearch("A");
console.log(bfsResult); // [ 'A', 'B', 'C', 'D', 'E', 'F' ]
