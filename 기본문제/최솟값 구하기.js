/**
 * 5번
 * 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.
 * O
 */
function solution(arr) {
  let answer = arr.sort((a, b) => a - b);
  return answer;
}
// console.log(solution([5, 3, 7, 11, 2, 15, 17]));

/**
 * 강의 해결법1
 */
function solution1(arr) {
  let answer = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < answer) answer = arr[i];
  }
  return answer;
}

/**
 * 강의 해결법2
 */
function solution2(arr) {
  let answer = Math.min(...arr);
  return answer;
}

/**
 * 강의 해결법3
 */
function solution3(arr) {
  let answer = Math.min.apply(null, arr);
  return answer;
}
