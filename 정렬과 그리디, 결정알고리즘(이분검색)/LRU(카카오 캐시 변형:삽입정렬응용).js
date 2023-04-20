/**
 * 5번
 * 문제 길어서 생략
 *
 */
function solution(s, arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (answer.length)
      if (answer.includes(arr[i])) {
      } else if (!answer.includes(arr[i]) && answer.length === s) {
      }
  }
  return answer;
}

/**
 * 강의 해결법
 */
function solution1(s, arr) {
  let answer;
  return answer;
}
console.log(solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
