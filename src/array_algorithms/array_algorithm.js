/*
  1부터 100까지의 숫자 중에 50개의 랜덤 한 숫자가 들어있는 배열이 있다. 이 배열을 O(n) 시간 복잡도로 정렬하여라.
*/

function solution(numbers) {
  const result = Array(50);
  for (let i = 0; i < numbers.length; i++) {
    result[numbers[i] - 1] = numbers[i];
  }
  return result;
}
