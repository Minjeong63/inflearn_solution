/**
 * 3번
 * 문제 너무 길어서 생략
 * O
 */
function solution(board, moves) {
  let answer = 0;
  let stack = [];
  for (let x of moves) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][x - 1] !== 0) {
        if (stack.length !== 0 && stack[stack.length - 1] === board[i][x - 1]) {
          stack.pop();
          answer += 2;
          board[i][x - 1] = 0;
          break;
        }
        stack.push(board[i][x - 1]);
        board[i][x - 1] = 0;
        break;
      }
    }
  }
  return answer;
}

/**
 * 강의 해결법
 */
function solution1(board, moves) {
  let answer = 0;
  let stack = [];
  moves.forEach((pos) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][pos - 1] !== 0) {
        let tmp = board[i][pos - 1];
        board[i][pos - 1] = 0;
        if (tmp === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else stack.push(tmp);
        break;
      }
    }
  });
  return answer;
}
// console.log(
//   solution(
//     [
//       [0, 0, 0, 0, 0],
//       [0, 0, 1, 0, 3],
//       [0, 2, 5, 0, 1],
//       [4, 2, 4, 4, 2],
//       [3, 5, 1, 3, 1],
//     ],
//     [1, 5, 3, 5, 1, 2, 1, 4]
//   )
// );
