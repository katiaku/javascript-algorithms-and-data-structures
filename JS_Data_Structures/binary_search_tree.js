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
// tree, an organisation tree, DOM, chat bots, abstract syntax
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
}

const bst = new BinarySearchTree();
console.log("Tree is empty?", bst.isEmpty());
