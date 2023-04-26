/**
 * 2번
 * 10진수 N이 입력되면 2진수로 변환하여 출력하는 프로그램을 작성하세요.
 * 단 재귀함수를 이용해서 출력해야 합니다.
 * O
 */
function solution(n) {
  let answer = "";
  function DFS(n) {
    if (n === 1) answer += 1;
    else {
      DFS(Math.floor(n / 2));
      answer += n % 2;
    }
  }
  DFS(n);
  return answer;
}

/**
 * 강의 해결법
 */
function solution1(n) {
  let answer = "";
  function DFS(n) {
    if (n === 0) return;
    else {
      DFS(parseInt(n / 2));
      answer += n % 2;
    }
  }
  DFS(n);
  return answer;
}
// console.log(solution(11));
