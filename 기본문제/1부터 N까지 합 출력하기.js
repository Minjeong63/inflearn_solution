/**
 * 4번
 * 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.
 * O
 */
function solution(N) {
  let answer = 0;
  for (let i = 1; i <= N; i++) {
    answer += i;
  }
  return answer;
}
// console.log(solution(10));

/**
 * 강의 해결법
 */
function solution1(N) {
  let answer = 0;
  for (let i = 1; i <= N; i++) {
    answer = answer + i;
  }
  return answer;
}
// console.log(solution1(10));
