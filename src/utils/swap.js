export const swapWithNext = (arr, index) => {
  // 배열이 비어있거나 인덱스가 범위를 벗어나면 아무 작업도 수행하지 않음
  if (arr.length === 0 || index < 0 || index >= arr.length) {
    return arr;
  }

  // 주어진 인덱스의 요소와 다음 요소의 위치를 바꿈
  const nextIndex = (index + 1) % arr.length;
  const temp = arr[index];
  arr[index] = arr[nextIndex];
  arr[nextIndex] = temp;

  return [...arr];
};
