// A tree is a hierarchical data structure that consists
// of nodes connected by edges. It's a non-linear data
// structure, compared to arrays, linked lists, stacks and
// queues which are linear data structures.
// In linear data structures, the time required to search
// is proportional to the size of the data set. Trees however,
// owing to the nonlinear nature allow quicker and easier access
// to the data.
// A tree will not contain any loops or cycles.

// Tree usage: file systems for directory structure, a family
// tree, an organization tree, DOM, chat bots, abstract syntax
// trees.

// A binary tree is a tree data structure in which each node
// has at most two children. They are referred to as left child
// and right child.

// Binary Search Tree (BST)
// The value of each left node must be smaller than the parent
// node and the value of each right node must be greater than the
// parent node.

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }

  // Tree traversal: visiting every node in the tree.

  // Depth First Search (DFS)
  // The DFS algorithm starts at the root node and explores
  // as far as possible along each branch before backtracking.
  // Visit the root node, visit all the nodes in the left subtree
  // and visit all the nodes in the right subtree.

  // Preorder Traversal
  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  // Inorder Traversal
  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  // Postorder Traversal
  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  // Breadth First Search (BFS)
  // Explore all nodes at the present depth prior to moving
  // on to the nodes at the next depth level.

  levelOrder() {
    // TODO: use the optimized queue implementation
    const queue = [];
    queue.push(this.root);

    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);

      if (curr.left) {
        queue.push(curr.left);
      }

      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }
}

const bst = new BinarySearchTree();
console.log("Tree is empty?", bst.isEmpty());

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log(bst.search(bst.root, 10));
console.log(bst.search(bst.root, 20));

bst.preOrder(bst.root); // 10 5 3 7 15
bst.inOrder(bst.root); // 3 5 7 10 15
bst.postOrder(bst.root); // 3 7 5 15 10

bst.levelOrder(); // 10 5 15 3 7
