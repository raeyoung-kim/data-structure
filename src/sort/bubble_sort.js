/*
  버블 정렬
*/

function bubbleSort(numbers) {
  let swap = null;

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[j] > numbers[j + 1]) {
        swap = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = swap;
      }
    }
  }
  return numbers;
}

bubbleSort([1, 5, 3, 2, 6]);

/*
  시간 복잡도: O(n²)
  공간 복잡도: O(1)
*/
