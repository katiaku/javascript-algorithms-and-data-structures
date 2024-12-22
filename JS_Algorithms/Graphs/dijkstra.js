// This algorithm finds the shortest path from a starting 
// node to all other nodes in a weighted graph
// DAG (Directed Acyclic Graph).

// Dijkstra's algorithm cannot handle negative weights 
// because it relies on a greedy approach: once it marks 
// a node's shortest distance as final, it assumes that 
// this distance will never need to be updated.
// For graphs with negative weights, Bellman-Ford is 
// the appropriate choice.

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(node, priority) {
    this.queue.push({ node, priority });
    this.queue.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

function dijkstra(graph, start) {
  const distances = {};
  const previous = {};
  const priorityQueue = new PriorityQueue();

  // Initialize distances and previous
  for (const node in graph) {
    distances[node] = Infinity;
    previous[node] = null;
  }
  distances[start] = 0;
  priorityQueue.enqueue(start, 0);

  while (!priorityQueue.isEmpty()) {
    const { node: currentNode } = priorityQueue.dequeue();

    for (const neighbor in graph[currentNode]) {
      const distance = graph[currentNode][neighbor];
      const newDistance = distances[currentNode] + distance;

      if (newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance;
        previous[neighbor] = currentNode;
        priorityQueue.enqueue(neighbor, newDistance);
      }
    }
  }

  return { distances, previous };
}

// Example usage
const graph = {
  A: { B: 1, C: 4 },
  B: { A: 1, C: 2, D: 5 },
  C: { A: 4, B: 2, D: 1 },
  D: { B: 5, C: 1 },
};

const startNode = 'A';
const { distances, previous } = dijkstra(graph, startNode);

console.log('Shortest distances from start node:', distances);
console.log('Previous nodes:', previous);
