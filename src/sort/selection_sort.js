/*
  선택 정렬
*/

function selectionSort(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[minIndex] > numbers[j]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      const temp = numbers[minIndex];
      numbers[minIndex] = numbers[i];
      numbers[i] = temp;
    }
  }
  return numbers;
}

/*
  시간 복잡도: O(n²)
  공간 복잡도: O(1)
*/
