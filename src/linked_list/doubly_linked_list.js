/*
 * 이중 연결 리스트 (양방향)
 */

function Node(value) {
  const node = {};
  node.prev = null;
  node.value = value;
  node.next = null;
  return node;
}

function DoublyLinkedList() {
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
      node.prev = this.tail;
      this.tail = node;
    }
  };

  list.removeHead = function () {
    if (!this.head) {
      return this.head;
    }
    const temp = this.head.next;
    this.head = temp;
  };

  list.removeTail = function () {
    const removeTail = this.tail;
    this.tail = removeTail.prev;
    this.tail.next = null;
    return removeTail;
  };

  list.reverse = function () {
    let temp = null;
    let newNode = null;
    let head = this.head;

    while (head !== null) {
      temp = head.next;
      newNode = head;
      let next = head.next;
      newNode.next = head.prev;
      newNode.prev = next;
      head = temp;
    }
    this.head = newNode;
  };

  list.reverseRecursion = function (head) {
    if (!head || !head.next) {
      head.prev = null;
      return head;
    }

    let result = list.reverseRecursion(head.next);
    head.next.next = head;
    head.prev = head.next;
    head.next = null;
    return result;
  };

  return list;
}

const doubly_list = new DoublyLinkedList();

doubly_list.addToTail(3);
doubly_list.addToTail(4);
doubly_list.addToTail(5);
doubly_list.addToTail(6);
doubly_list.reverseRecursion(doubly_list.head);
