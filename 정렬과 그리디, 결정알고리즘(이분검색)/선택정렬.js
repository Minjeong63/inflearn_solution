/**
 * 1번
 * N개의 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요.
 * 정렬하는 방법은 선택정렬입니다.
 * O
 */
function solution(arr) {
  let answer = [];

  while (arr.length) {
    let min = Number.MAX_SAFE_INTEGER;
    let index = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
        index = i;
      }
    }
    answer.push(arr.splice(index, 1)[0]);
  }
  return answer;
}

/**
 * 강의 해결법
 */
function solution1(arr) {
  let answer;
  for (let i = 0; i < arr.length - 1; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[idx] > arr[j]) idx = j;
    }
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }
  answer = arr;
  return answer;
}
// console.log(solution1([13, 5, 11, 7, 23, 15]));
