// The Bellman-Ford algorithm is a graph algorithm used 
// to find the shortest path from a single source vertex 
// to all other vertices in a weighted graph. It is particularly 
// useful for graphs with negative weight edges, which many 
// other shortest-path algorithms (like Dijkstra's) cannot handle.

function bellmanFord(graph, source) {
  const distances = {};
  const edges = graph.edges;

  // Initialize distances from source to all vertices
  for (let vertex of graph.vertices) {
    distances[vertex] = Infinity;
  }
  distances[source] = 0;

  // Relax edges repeatedly (V-1 times)
  for (let i = 0; i < graph.vertices.length - 1; i++) {
    for (let [u, v, weight] of edges) {
      if (distances[u] !== Infinity && distances[u] + weight < distances[v]) {
        distances[v] = distances[u] + weight;
      }
    }
  }

  // Check for negative weight cycles
  for (let [u, v, weight] of edges) {
    if (distances[u] !== Infinity && distances[u] + weight < distances[v]) {
      throw new Error("Graph contains a negative weight cycle");
    }
  }

  return distances;
}

const graph = {
  vertices: ['A', 'B', 'C', 'D', 'E'],
  edges: [
    ['A', 'B', 4],
    ['A', 'C', 2],
    ['B', 'C', 3],
    ['B', 'D', 2],
    ['B', 'E', 3],
    ['C', 'B', 1],
    ['C', 'D', 4],
    ['D', 'E', 1]
  ]
};

try {
  const distances = bellmanFord(graph, 'A');
  console.log("Shortest distances from source A:", distances);
  // Shortest distances from source A: { A: 0, B: 3, C: 2, D: 6, E: 7 }
} catch (error) {
  console.error(error.message);
}
