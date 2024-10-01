// A graph is a non-linear data structure that
// consists of a finite number of vertices (nodes)
// connected by edges.
// Trees are specific type of graph data structure.

// Types of Graphs:

// Directed Graph (Digraph)
// The edges have a direction, meaning the relationship 
// goes from one vertex to another.
// Example: Twitter, where you follow someone, but they 
// may not follow you back.

// Undirected Graph
// The edges have no direction, meaning the relationship 
// is bidirectional.
// Example: Facebook, where a friendship is mutual.

// Weighted Graph
// Edges have weights (numerical values) associated with them,
// often used to represent cost, distance, or time.
// Example: a road network where the weight represents the distance 
// between two cities.

// Unweighted Graph
// The edges do not carry any weight, simply indicating a connection.

// Cyclic Graph
// Contains at least one cycle, meaning you can start from a vertex, 
// follow a sequence of edges, and return to the starting point.

// Acyclic Graph
// No cycles are present. A specific type of acyclic graph is a 
// Directed Acyclic Graph (DAG), used in scheduling and dependency 
// resolution.

// Connected Graph
// There is a path between any two vertices in the graph.

// Disconnected Graph
// Some vertices cannot be reached from others.

// Adjacency Matrix
// An adjacency matrix is a 2D array of size V x V where V is the
// number of vertices in the graph. Each row and column represent
// a vertex. If the value of any element say, matrix[i][j] is 1,
// it represents that there is an edge connecting vertex i and
// vertex j.

const adjacencyMatrix = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0]
]

console.log(adjacencyMatrix[0][1]);

// Adjacency List
// Vertices are stored in a map like data structure, and every vertex
// stores a list of its adjacent vertices.

const adjacencyList = {
  "A": ["B"],
  "B": ["A", "C"],
  "C": ["B"]
}

console.log(adjacencyList["A"]);

// With an adjacency list, we only need to store the values for
// the edges that exist. With adjacency matrix, you store values
// irrespective of whether an edge exists or not. Storage wise,
// an adjacency list is way more efficient.

// With adjacency list, inserting and finding adjacent nodes
// is constant time complexity whereas with adjacency matrix,
// it is linear time complexity.

// An adjacency list allows you to store additional values with
// an edge such as weight of the edge. With adjacency matrix,
// such information would have to be stored externally.

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }

    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }

    this.adjacencyList[vertex1].add[vertex2];
    this.adjacencyList[vertex2].add[vertex1];
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
  }

  // time complexity depends on the number of adjacent vertices
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return;
    }

    for (let adjacentVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }

    delete this.adjacencyList[vertex];
  }

  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
    )
  }

  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
    }
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");

graph.display();

console.log(graph.hasEdge("A", "B")); // true
console.log(graph.hasEdge("A", "C")); // false

// graph.removeEdge("A", "B");
// graph.display();

graph.removeVertex("B");
graph.display();
