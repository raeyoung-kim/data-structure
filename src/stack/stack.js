/*
 * 스택
 */

function Stack() {
  let list = {};
  list.head = null;
  list.length = 0;

  list.push = function (value) {
    let node = {
      value,
      next: this.head,
    };
    this.head = node;
    this.length++;
  };

  list.pop = function () {
    if (this.head === null) {
      return this.head;
    }
    let node = this.head;
    this.head = node.next;
    this.length--;
    return node;
  };

  list.reverse = function (head) {
    if (!head || !head.next) {
      return head;
    }
    let result = list.reverse(head.next);
    head.next.next = head;
    head.next = null;
    return result;
  };

  return list;
}

const stack = new Stack();

stack.push(2);
stack.push(3);
stack.push(5);
stack.pop();

/*
 * 괄호 짝 맞추기
 * 예) [{1 + 2} * (2 + 2) - (1 - 3)]  => true
 */

function solution(string) {
  const open = ["[", "(", "{"];
  const close = ["]", ")", "}"];
  const map = new Map();
  map.set("[", "]");
  map.set("(", ")");
  map.set("{", "}");
  const arr = string.split(" ").join("").split("");
  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    if (open.includes(arr[i])) {
      stack.push(arr[i]);
    }
    if (close.includes(arr[i])) {
      const target = map.get(stack.pop());
      if (target !== arr[i]) return false;
    }
  }

  if (stack.length) {
    return false;
  } else {
    return true;
  }
}
console.log(solution("[{1 + 2} * (2 + 2) - (1 - 3)]"));

/*
 * 문제 1. 괄호 수식과 여는 괄호의 위치가 주어졌을 때 그에 대응하는 닫힌 괄호의 위치를 찾는 코드를 작성하라.
 * 예) [{1+2*(2+2)}-(1-3)], 1   => 11 (‘{‘에 대응하는 ‘}’가 11번째 위치에 있다.
 */

function findIndex(string, target) {
  const arr = string.split("");
  const map = new Map();

  map.set("[", "]");
  map.set("(", ")");
  map.set("{", "}");

  let resultTarget = map.get(target);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === resultTarget) {
      return i;
    }
  }
}

/*
* 문제 2. 괄호 몇개를 뒤집어야 정상적인 수식을 만들 수 있는지 계산하는 코드를 작성하라.

* 예) {{{}} => exception

* 예) {{{{}} => 1

* 예) }}}}{}}} => 3

* 예) {{{{ => 2
*/

function solution2(string) {
  let open = ["{", "[", "("];
  let close = ["}", "]", ")"];

  let openCount = 0;
  let closeCount = 0;
  if (string.length % 2 !== 0) {
    return "exception";
  }

  for (let i = 0; i < string.length; i++) {
    let target = open.includes(string[i]) ? "open" : "close";
    switch (target) {
      case "open":
        open++;
        break;
      case "close":
        close++;
        break;
      default:
        break;
    }
  }
  return Map.abs(openCount - closeCount);
}
