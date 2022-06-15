/*
 * 연결 리스트
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

  /*
   * 끝에서 n번째 노드 찾는 함수 구현하기
   */
  list.findFromLast = function (n) {
    let head = this.head;
    let length = 0;
    while (head !== null) {
      length++;
      head = head.next;
    }

    let targetIndex = length - n;
    let target = this.head;

    while (targetIndex > 0) {
      targetIndex--;
      target = target.next;
    }
    return target;
  };

  /*
   * 끝에서 n번째 노드 찾는 함수 구현하기
   */
  list.findFromLast2 = function (n) {
    let left = this.head;
    let right = this.head;

    let count = 0;

    while (right.next !== null) {
      if (count === n - 1) {
        left = left.next;
        right = right.next;
      } else {
        count++;
        right = right.next;
      }
    }

    return left;
  };

  /*
   * 리스트에서 중간 노드 찾는 함수 구현하기
   */
  list.findCenterNode = function () {
    let head = this.head;
    let length = 0;
    while (head !== null) {
      head = head.next;
      length++;
    }

    let targetIndex = Math.floor(length / 2);
    let target = this.head;
    while (targetIndex > 0) {
      targetIndex--;
      target = target.next;
    }

    return target;
  };

  /*
   * 리스트가 정렬이 되어있을 때 중복된 노드 제거하기
   */
  list.removeDuplicate = function () {
    let head = this.head;

    while (head !== null) {
      let temp = this.head;
      while (temp !== null && temp.value === head.value) {
        temp = temp.next;
      }
      head.next = temp;
      head = head.next;
    }
  };

  /*
   * 리스트가 정렬이 되어있을 때 중복된 노드 제거하기 재귀 함수 구현
   */
  list.removeDuplicateRecursion = function (node) {
    if (node === null) {
      return node;
    }
    if (node.value === node.next.value) {
      node.next = node.next.next;
      list.removeDuplicateRecursion(node);
    } else {
      list.removeDuplicateRecursion(node.next);
    }
    return node;
  };

  /*
   * 리스트가 정렬이 되어있지 않을 때 중복된 노드 제거하기
   * 시간 복잡도: O(n)
   * 공간 복잡도: O(n)
   */
  list.removeDuplicateFromUnsortedList = function () {
    let head = this.head;
    let temp = null;
    let set = new Set();
    while (head !== null) {
      if (set.has(head.value)) {
        temp.next = head.next;
      } else {
        set.add(head.value);
        temp = head;
      }
      head = head.next;
    }
  };

  /*
   * 주어진 리스트가 원형 리스트인지 단일 리스트인지 확인하는 함수 구현하기
   * 시간 복잡도: O(n)
   * 공간 복잡도: O(1)
   */
  list.hasCircle = function () {
    let slow = this.head;
    let fast = this.head;
    while (slow !== null && fast !== null) {
      if (slow.next === null && fast.next.next === null) {
        return false;
      }
      fast = fast.next.next;
      if (slow === fast) {
        return true;
      }
      slow = slow.next;
    }

    return false;
  };

  return list;
}

const list = new LinkedList();

list.addToTail(3);
list.addToTail(4);
list.addToTail(5);
list.addToTail(5);
list.addToTail(9);
list.addToTail(10);
