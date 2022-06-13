/*
  병합 정렬
*/

const mergeValue = [];

function merge(left, right) {
  const result = [];

  while (left.length !== 0 && right.length !== 0) {
    left[0] <= right[0]
      ? result.push(left.shift())
      : result.push(right.shift());
  }

  return [...result, ...left, ...right];
}

function mergeSort(numbers) {
  if (numbers.length < 2) {
    return numbers;
  }
  let pivot = Math.floor(numbers.length / 2);
  let left = numbers.slice(0, pivot);
  let right = numbers.slice(pivot, numbers.length);

  return merge(mergeSort(left), mergeSort(right));
}

mergeSort([1, 5, 3, 2, 6]);

/*
  시간 복잡도: O(n log n)
  공간 복잡도: O(n)
*/
