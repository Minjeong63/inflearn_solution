/**
 * 4번
 * N개의 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요.
 * 정렬하는 방법은 삽입정렬입니다.
 * O
 */
function solution(arr) {
  let answer = arr;
  for (let i = 1; i < answer.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] < arr[j]) {
        [arr[j], arr[i]] = [arr[i], arr[j]];
        i = j;
      }
    }
  }
  return answer;
}

/**
 * 강의 해결법
 */
function solution1(arr) {
  let answer = arr;
  for (let i = 1; i < arr.length; i++) {
    let tmp = arr[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (tmp < arr[j]) arr[j + 1] = arr[j];
      else break;
    }
    arr[j + 1] = tmp;
  }
  return answer;
}
// console.log(solution1([11, 7, 5, 6, 10, 9]));
