/**
 * 3번
 * 연필 1다스는 12자루입니다. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때
 * N명의 학생수를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요.
 * O
 */
function solution(N) {
  let answer;
  if (N % 12 === 0) answer = N / 12;
  else answer = Math.ceil(N / 12);
  return answer;
}
// console.log(solution(178));

/**
 * 강의 해결법
 */
function solution1(N) {
  let answer = Math.ceil(N / 12);
  return answer;
}
