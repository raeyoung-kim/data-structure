/*
 * 트리
 */

const Tree = function (value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};

const treeMethods = {};

treeMethods.addChild = function (value) {
  var node = new Tree(value);
  this.children.push(node);
};

treeMethods.contains = function (target) {
  var result = false;

  function recusion(node) {
    if (node.value === target) {
      result = true;
      return;
    }
    if (node.children.length > 0) {
      for (var i = 0; i < node.children.length; i++) {
        recusion(node.children[i]);
      }
    }
  }

  recusion(this);

  return result;
};

const tree = new Tree(3);
tree.addChild(2);
