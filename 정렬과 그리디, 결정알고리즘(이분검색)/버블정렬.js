/**
 * 2번
 * N개의 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요.
 * 정렬하는 방법은 버블정렬입니다.
 * O
 */
function solution(arr) {
  let answer = arr;
  let length = answer.length;
  while (length > 1) {
    for (let i = 0; i < length - 1; i++) {
      if (answer[i] > answer[i + 1])
        [answer[i], answer[i + 1]] = [answer[i + 1], answer[i]];
    }
    length = length - 1;
  }
  return answer;
}

/**
 * 강의 해결법
 */
function solution1(arr) {
  let answer = arr;
  for (let i = 0; i < answer.length - 1; i++) {
    for (let j = 0; j < answer.length - 1 - i; j++) {
      if (answer[j] > answer[j + 1])
        [answer[j], answer[j + 1]] = [answer[j + 1], answer[j]];
    }
  }
  return answer;
}
// console.log(solution1([13, 5, 11, 7, 23, 15]));
