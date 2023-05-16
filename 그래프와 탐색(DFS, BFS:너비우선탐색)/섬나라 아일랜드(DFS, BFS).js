/**
 * 7번
 * N*N의 섬나라 아일랜드의 지도가 격자판의 정보로 주어집니다.
 * 각 섬은 1로 표시되어 상하좌우와 대각선으로 연결되어 있으며, 0은 바다입니다.
 * 섬나라 아일랜드에 몇 개의 섬이 있는지 구하는 프로그램을 작성하세요.
 * 강의 해결법 (DFS)
 * X
 */
function solution1(board) {
  let answer = 0;
  let n = board.length;
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];

  function DFS(x, y) {
    board[x][y] = 0;
    for (let k = 0; k < 8; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
        DFS(nx, ny);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        answer++;
        DFS(i, j);
      }
    }
  }
  return answer;
}

/**
 * 강의 해결법 (BFS)
 */
function solution2(board) {
  let answer = 0;
  let n = board.length;
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];
  let queue = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        board[i][j] = 0;
        answer++;
        queue.push([i, j]);
        while (queue.length) {
          let [x, y] = queue.shift();
          for (let k = 0; k < 8; k++) {
            let nx = x + dx[k];
            let ny = y + dy[k];
            if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
              queue.push([nx, ny]);
              board[nx][ny] = 0;
            }
          }
        }
      }
    }
  }

  return answer;
}
// console.log(
//   solution2([
//     [1, 1, 0, 0, 0, 1, 0],
//     [0, 1, 1, 0, 1, 1, 0],
//     [0, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 1, 0, 1, 1],
//     [1, 1, 0, 1, 1, 0, 0],
//     [1, 0, 0, 0, 1, 0, 0],
//     [1, 0, 1, 0, 1, 0, 0],
//   ])
// );
