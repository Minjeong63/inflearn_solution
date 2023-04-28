/**
 * 12번
 * 공식있어서 문제 생략
 * O
 */
function solution(n, r) {
  let answer;
  function DFS(n, r) {
    if (r === 1) return n;
    if (n === r) return 1;
    else return DFS(n - 1, r - 1) + DFS(n - 1, r);
  }
  answer = DFS(n, r);
  return answer;
}

/**
 * 강의 해결법
 */
function solution1(n, r) {
  let answer;
  let dy = Array.from(Array(35), () => Array(35).fill(0));
  function DFS(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  }
  answer = DFS(n, r);
  return answer;
}
// console.log(solution1(33, 19));
