/*
  삽입 정렬
*/

function insertionSort(numbers) {
  for (let i = 1; i < numbers.length; i++) {
    for (let j = i + 1; j >= 0; j--) {
      if (numbers[j] < numbers[j - 1]) {
        let temp = numbers[j - 1];
        numbers[j - 1] = numbers[j];
        numbers[j] = temp;
      }
    }
  }
  return numbers;
}

insertionSort([1, 5, 3, 2, 6]);

/*
  시간 복잡도: O(n²)
  공간 복잡도: O(1)
*/
