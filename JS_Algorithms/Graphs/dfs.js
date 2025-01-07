// STEPS FOR THE RECURSIVE DFS

//Start from a source node.
//Mark the node as visited.
//Recursively visit all unvisited neighbors of the node.
//Backtrack when no unvisited neighbors are left.

function dfsRecursive(graph, start, visited = new Set()) {
    visited.add(start);
    console.log(start); // This will process the current node (e.g., print)

    for (const neighbor of graph[start] || []) {
        if (!visited.has(neighbor)) {
            dfsRecursive(graph, neighbor, visited);
        }
    }
}

// Example
const graph = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["F"],
    D: [],
    E: ["F"],
    F: []
};

console.log("DFS Recursive:");
dfsRecursive(graph, "A");

/*Time Complexity:

Adjacency List Representation: 
ð‘‚(ð‘‰+ð¸), where V is the number of vertices and ð¸ is the number of edges.

Adjacency Matrix Representation: 
ð‘‚(ð‘‰^2) */

/* Space Complexity

Recursive: 
ð‘‚(ð‘‰)(due to recursion stack).
Iterative: 
ð‘‚(ð‘‰) (stack data structure). */


// Iterative Implementation

//Start from a source node.
//Mark the node as visited.
//By Iteration visit all unvisited neighbors of the node.


function dfsIterative(graph, start) {
    const stack = [start];
    const visited = new Set();

    while (stack.length > 0) {
        const node = stack.pop();
        if (!visited.has(node)) {
            visited.add(node);
            console.log(node); // Process the current node (e.g., print)

            // Push all unvisited neighbors to the stack
            for (const neighbor of graph[node] || []) {
                if (!visited.has(neighbor)) {
                    stack.push(neighbor);
                }
            }
        }
    }
}

// Example
console.log("DFS Iterative:");
dfsIterative(graph, "A");



// Implementation for disconnected graph

function dfsDisconnected(graph) {
    const visited = new Set();

    for (const node in graph) {
        if (!visited.has(node)) {
            dfsRecursive(graph, node, visited);
        }
    }
}

// Example 
const disconnectedGraph = {
    A: ["B"],
    B: [],
    C: ["D"],
    D: []
};

console.log("DFS Disconnected:");
dfsDisconnected(disconnectedGraph);


/* 
Comparison to BFS

1.) DataStructure: Use stack for DFS
                    Use Queue for BFS

2.) Path: DFS may not find sortest Path
          BFS always finds shortest path

3.) Traversal: Depth first Search for DFS
                Level-by-level for BFS

4.) Space Complexity: O(V) for recursion stack(DFS)
                      O(V) for queue

5.) Use Cases: Toplogical sorting for DFS
                Level order sorting for BFS
                */

