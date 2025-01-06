const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.head = null;
  }

  root() {
    return this.head;
  }

  add(data) {
    const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        this.placeNode(this.head, newNode);
  }

  placeNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.placeNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.placeNode(node.right, newNode);
      }
    }
  }

  searchNode(node, data) {
    if (!node) return false;
    if (node.data === data) return true;
    return data < node.data
      ? this.searchNode(node.left, data)
      : this.searchNode(node.right, data);
  }

  has(data) {
    return this.searchNode(this.head, data);
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if (!this.head) return null;
      let current = this.head;
      while (current.left) {
          current = current.left;
    }
    return current.data;
  }

  max() {
    if (!this.head) return null;
       let current = this.head;
       while (current.right) {
           current = current.right;
       }
       return current.data;
  }
}

module.exports = {
  BinarySearchTree
};