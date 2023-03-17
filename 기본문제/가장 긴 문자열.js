/**
 * 14번
 * N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요.
 * 첫 줄에 자연수 N이 주어진다.(3<=N<=30)
 * 문자열의 길이는 100을 넘지 않으며, 각 문자열의 길이는 서로 다름
 * O
 */
function solution(n, arr) {
  let answer = "";
  for (let x of arr) {
    if (x.length > answer.length) answer = x;
  }
  return answer;
}
// console.log(solution(5, ["teacher", "time", "student", "beautiful", "good"]));
