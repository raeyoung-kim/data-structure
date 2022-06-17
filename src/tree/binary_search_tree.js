/*
 * 바이너리 트리
 */
const BinarySearchTree = function (value) {
  const binarytree = Object.create(binarytreeMethod);
  binarytree.value = value;
  binarytree.left = null;
  binarytree.right = null;

  return binarytree;
};

const binarytreeMethod = {};

binarytreeMethod.insert = function (value) {
  let node = new BinarySearchTree(value);

  function recusion(element) {
    if (element.value >= node.value) {
      if (!element.left) {
        element.left = node;
      } else {
        recusion(element.left);
      }
    } else {
      if (!element.right) {
        element.right = node;
      } else {
        recusion(element.right);
      }
    }
  }
  recusion(this);
};

binarytreeMethod.contains = function (target) {
  let result = false;
  function recusion(element) {
    if (element.value > target) {
      if (element.left.value === target) {
        result = true;
        return;
      } else {
        recusion(element.left.value);
      }
    }
    if (element.value < target) {
      if (element.right.value === target) {
        result = true;
        return;
      } else {
        recusion(element.right.value);
      }
    }
  }
  recusion(this);
  return result;
};

binarytreeMethod.depthFirstLog = function (func) {
  function recusion(element) {
    if (element.value) {
      func(element.value);
      if (element.left) {
        recusion(element.left);
      }
      if (element.right) {
        recusion(element.right);
      }
    }
  }
  recusion(this);
};

/*
 * 중위 탐색(순회, 재귀)
 */
binarytreeMethod.inorder = function () {
  let root = this;
  let stack = [];
  let result = [];

  while (root !== null || stack.length !== 0) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    result.push(root.value);
    root = root.right;
  }
  return result;
};

binarytreeMethod.inorderRecusion = function (array = []) {
  function recusion(element) {
    if (element !== null) {
      recusion(element.left, array);
      array.push(element.value);
      recusion(element.right, array);
    }
    return array;
  }
  return recusion(this);
};

/*
 * 전위 탐색(순회, 재귀)
 */
binarytreeMethod.preorder = function () {
  let root = this;
  if (root === null) {
    return;
  }
  let stack = [];
  let result = [];

  stack.push(root);
  while (stack.length > 0) {
    let popRoot = stack.pop();
    result.push(popRoot.value);
    if (popRoot.right) stack.push(popRoot.right);
    if (popRoot.left) stack.push(popRoot.left);
  }
  return result;
};

binarytreeMethod.preorderRecusion = function (array = []) {
  function recusion(element) {
    if (element !== null) {
      array.push(element.value);
      recusion(element.left);
      recusion(element.right);
      return array;
    }
  }
  return recusion(this);
};

/*
 * 후위 탐색(순회, 재귀)
 */
binarytreeMethod.postorder = function () {
  let root = this;
  let result = [];
  let stack = [];

  if (root === null) return result;

  stack.push(root);

  while (stack.length !== 0) {
    let cur = stack.pop();

    result.push(cur.value);
    if (cur.left) stack.push(cur.left);
    if (cur.right) stack.push(cur.right);
  }

  return result.reverse();
};

binarytreeMethod.postorderRecusion = function (array = []) {
  function recusion(element) {
    if (element !== null) {
      recusion(element.left);
      recusion(element.right);
      array.push(element.value);
      return array;
    }
  }
  return recusion(this);
};

binarytreeMethod.breadthFirstSearch = function () {
  let root = this;
  let queue = [root];
  let temp;
  let result = [];

  while (queue.length > 0) {
    temp = queue.pop();
    result.push(temp.value);
    if (temp.left) queue.unshift(temp.left);
    if (temp.right) queue.unshift(temp.right);
  }
  return result;
};

binarytreeMethod.breadthFirstSearchRecusion = function () {
  const result = [];
  const queue = [];

  function recusion(root) {
    if (root === null) return;
    result.push(root.value);
    if (root.left) {
      queue.push(root.left);
    }
    if (root.right) {
      queue.push(root.right);
    }
    if (queue.length) {
      recusion(queue.shift());
    }
  }
  recusion(this);
  return result;
};

const binarytree = new BinarySearchTree(8);
binarytree.insert(3);
binarytree.insert(10);
binarytree.insert(1);
binarytree.insert(6);
binarytree.insert(14);

/*
ex)

    8
   / \
  3   10
 / \    \
1   6    14

*/

console.log("binarytree: ", binarytree);
console.log("inorder: ", binarytree.inorder()); // [1, 3, 6, 8, 10, 14]
console.log("inorder: ", binarytree.inorderRecusion()); // [1, 3, 6, 8, 10, 14]
console.log("preorder: ", binarytree.preorder()); // [8, 3, 1, 6, 10, 14]
console.log("preorder: ", binarytree.preorderRecusion()); // [8, 3, 1, 6, 10, 14]
console.log("postorder: ", binarytree.postorder()); // [1, 6, 3, 14, 10, 8]
console.log("postorder: ", binarytree.postorderRecusion()); //[1, 6, 3, 14, 10, 8]
console.log("BFS ", binarytree.breadthFirstSearch()); // [8, 3, 10, 1, 6, 14]
console.log("BFS ", binarytree.breadthFirstSearchRecusion()); // [8, 3, 10, 1, 6, 14]
