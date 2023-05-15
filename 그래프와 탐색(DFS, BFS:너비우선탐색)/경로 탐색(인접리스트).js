/**
 * 노드 개수가 많을 때 적용
 * 3번
 * 방향그래프가 주어지면 1번 정점에서 N번 정점으로 가는 모든 경로의 가지 수를 출력하는 프로그램을 작성하세요.
 * 강의 해결법
 * X
 */
function solution1(n, arr) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array());
  let ch = Array.from({ length: n + 1 }, () => 0);
  for (let [a, b] of arr) {
    graph[a].push(b);
  }
  function DFS(v) {
    if (v === n) answer++;
    else {
      for (let i = 0; i < graph[v].length; i++) {
        if (ch[graph[v][i]] === 0) {
          ch[graph[v][i]] = 1;
          DFS(graph[v][i]);
          ch[graph[v][i]] = 0;
        }
      }
    }
  }
  ch[1] = 1;
  DFS(1);
  return answer;
}
// console.log(
//   solution1(5, [
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
