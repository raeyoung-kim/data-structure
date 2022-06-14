/*
  단일 연결 리스트
*/

function Node(value) {
  const node = {};
  node.value = value;
  node.next = null;
  return node;
}

function LinkedList() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    const node = Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  };

  list.removeHead = function () {
    const removeHead = this.head;
    this.head = removeHead.next;
    return removeHead.value;
  };

  list.contains = function (target) {
    let headNode = list.head;
    while (headNode) {
      if (headNode.value === target) {
        return true;
      }
      headNode = headNode.next;
    }
    return false;
  };

  list.reverse = function () {
    let head = this.head;
    let newNext = null;
    let current = null;

    while (head !== null) {
      current = head.next;
      head.next = newNext;
      newNext = head;
      head = current;
    }
    return newNext;
  };

  list.reveseRecursion = function (head) {
    if (!head || !head.next) {
      return head;
    }
    let result = list.reveseRecursion(head.next);
    head.next.next = head;
    head.next = null;
    return result;
  };

  return list;
}

const list = new LinkedList();

list.addToTail(3);
list.addToTail(4);
list.addToTail(5);

console.log(list);
console.log(list.reverse());
