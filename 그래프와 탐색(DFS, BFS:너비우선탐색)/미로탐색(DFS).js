/**
 * 4번
 * 7*7 격자판 미로를 탈출하는 경로의 가지수를 출력하는 프로그램을 작성하세요.
 * 출발점은 격 자의 (1, 1) 좌표이고, 탈출 도착점은 (7, 7)좌표이다.
 * 격자판의 1은 벽이고, 0은 통로이다. 격자판의 움직임은 상하좌우로만 움직인다
 * 강의 해결법
 * X
 */
function solution1(arr) {
  let answer = 0;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  let n = arr.length;
  function DFS(x, y) {
    if (x === n - 1 && y === n - 1) answer++;
    else {
      for (let i = 0; i <= 3; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (
          nx >= 0 &&
          nx <= n - 1 &&
          y + dy[i] >= 0 &&
          y + dy[i] <= n - 1 &&
          arr[nx][ny] === 0
        ) {
          arr[nx][ny] = 1;
          DFS(nx, ny);
          arr[nx][ny] = 0;
        }
      }
    }
  }
  arr[0][0] = 1;
  DFS(0, 0);
  return answer;
}
// console.log(
//   solution1([
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 1, 1, 1, 1, 1, 0],
//     [0, 0, 0, 1, 0, 0, 0],
//     [1, 1, 0, 1, 0, 1, 1],
//     [1, 1, 0, 0, 0, 0, 1],
//     [1, 1, 0, 1, 1, 0, 0],
//     [1, 0, 0, 0, 0, 0, 0],
//   ])
// );
