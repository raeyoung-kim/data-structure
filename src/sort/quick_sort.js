/*
  퀵 정렬
*/

function partition(array, left, right, pivotIndex) {
  let swap;
  let pivot = array[pivotIndex];

  while (left <= right) {
    while (array[left] < pivot) left++;
    while (array[right] > pivot) right--;
    if (left <= right) {
      swap = array[left];
      array[left] = array[right];
      array[right] = swap;
      left++;
      right--;
    }
  }
  swap = array[left];
  array[left] = pivot;
  array[pivotIndex] = swap;
  return left;
}

function quickSort(array, left = 0, right = array.length - 1) {
  let pivotIndex = right;
  pivotIndex = partition(array, left, right - 1, pivotIndex);
  if (left < pivotIndex - 1) quickSort(array, left, pivotIndex - 1);
  if (pivotIndex + 1 < right) quickSort(array, pivotIndex + 1, right);
  return array;
}

quickSort([1, 5, 3, 2, 6, 4, 5]);

/*
  시간 복잡도: O(n²)
  공간 복잡도: O(n)
*/
