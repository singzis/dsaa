// https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

//  输入：root = [4,2,7,1,3,6,9]
//  输出：[4,7,2,9,6,3,1]

// 思路：做成二维数组，将每个层级划分到一个数组中，再颠倒该数组的位置，最后铺平
// [[4],[2,7],[1,3,6,9]]
// [[4],[7,2],[9,6,3,1]]
// [4,7,2,9,6,3,1]

// 那么，如何找出同一级的数并划分到一个数组中呢

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
  let newArr = []
  let level = 0
  let pow = Math.pow(2, level)
  const setlevel = function () {
    if (newArr[level].length === pow) {
      level = level + 1
      pow = Math.pow(2, level)
    }
  }
  for (let r = 0; r < root.length; r++) {
    if (!newArr[level]) {
      newArr[level] = [root[r]]
      setlevel()
    } else if (newArr[level] && newArr[level].length < pow) {
      newArr[level].push(root[r])
      setlevel()
    }
  }
  for (let n = 0; n < newArr.length; n++) {
    newArr[n].reverse()
  }
  return newArr.flat(1)
}

// 看别人的解法
// 甚至没看懂

var mirrorTree = function (root) {
  return root == null
    ? null
    : new TreeNode(root.val, mirrorTree(root.right), mirrorTree(root.left))
}

console.log('root = [4,2,7,1,3,6,9]', mirrorTree(new TreeNode([4, 2, 7, 1, 3, 6, 9])))
