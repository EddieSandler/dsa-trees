/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth(node = this.root) {
    if (!node) return 0;
    if (!node.left && !node.right) return 1;

    let leftDepth = this.minDepth(node.left);
    let rightDepth = this.minDepth(node.right);

    return Math.min(leftDepth, rightDepth) + 1;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(node = this.root) {
    if (!node) return 0;
    if (!node.left && !node.right) return 1;

    let leftDepth = this.maxDepth(node.left);
    let rightDepth = this.maxDepth(node.right);

    return Math.max(leftDepth, rightDepth) + 1;

  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    // Helper function to calculate maxSum. It's defined inside maxSum to use recursion more cleanly.
    const calculateMaxSum = (node) => {
      if (!node) return 0; // Base case: reached beyond the leaf node, contribute nothing to sum.

      // Recursive step: Compute the max sum of the left and right subtrees.
      const leftSum = calculateMaxSum(node.left);
      const rightSum = calculateMaxSum(node.right);

      // Return the value of the current node plus the max of left or right path sums.
      return node.val + Math.max(leftSum, rightSum);
    };

    return calculateMaxSum(this.root); // Initiate recursion from the root.
  }






  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  // nextLarger(lowerBound) {

  // }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  // areCousins(node1, node2) {

  // }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  // static serialize() {

  // }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  // static deserialize() {

  // }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  //   lowestCommonAncestor(node1, node2) {

  //   }
}

module.exports = { BinaryTree, BinaryTreeNode };
