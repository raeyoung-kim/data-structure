/*
 * 큐
 */

function Queue() {
  let list = {};
  list.head = null;
  list.tail = null;
  list.length = 0;

  list.push = function (value) {
    let node = {
      value,
      next: null,
    };

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  };

  list.shift = function () {
    if (this.head === null) {
      return this.head;
    }
    const removeHead = this.head;
    this.head = removeHead.next;
    this.length--;
    return removeHead.value;
  };

  list.reverse = function () {
    let head = this.head;
    let newNode = null;
    let temp = null;

    while (head !== null) {
      temp = head.next;
      head.next = newNode;
      newNode = head;
      head = temp;
    }
    this.head = newNode;
  };

  return list;
}

let queue = new Queue();
queue.push(2);
queue.push(3);
queue.push(5);
queue.push(6);
queue.shift();
queue.reverse();
