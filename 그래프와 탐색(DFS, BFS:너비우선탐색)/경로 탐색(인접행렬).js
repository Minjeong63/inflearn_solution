/**
 * 2번
 * 노드 개수가 적을 때 적용
 * 방향그래프가 주어지면 1번 정점에서 N번 정점으로 가는 모든 경로의 가지 수를 출력하는 프로그램을 작성하세요.
 * X
 */
function solution(n, arr) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  for (let [x, y] of arr) {
    graph[x][y] = 1;
  }
  let ch = Array.from({ length: n + 1 }, () => 0);
  function DFS(x) {
    if (x === n) answer++;
    else {
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0 && graph[x][i] !== 0) {
          ch[x] = 1;
          DFS(i);
          ch[i] = 0;
        }
      }
    }
  }
  DFS(1);
  return answer;
}

/**
 * 강의 해결법
 */
function solution1(n, arr) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let ch = Array.from({ length: n + 1 }, () => 0);
  for (let [x, y] of arr) {
    graph[x][y] = 1;
  }
  function DFS(v) {
    if (v === n) answer++;
    else {
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0 && graph[v][i] === 1) {
          ch[i] = 1;
          DFS(i);
          ch[i] = 0;
        }
      }
    }
  }
  ch[1] = 1;
  DFS(1);
  return answer;
}
// console.log(
//   solution(5, [
//     [1, 2],
//     [1, 3],
//     [1, 4],
//     [2, 1],
//     [2, 3],
//     [2, 5],
//     [3, 4],
//     [4, 2],
//     [4, 5],
//   ])
// );
