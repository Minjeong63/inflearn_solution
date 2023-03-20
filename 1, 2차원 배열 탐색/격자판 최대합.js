/**
 * 6번
 * 5*5 격자판에 아래와 같이 숫자가 적혀 있습니다.
 * N*N의 격자판이 주어지면
 * 각 행의 합, 각 열의 합, 두 대각선의 합 중 가장 큰 합을 출력합니다.
 * O
 */
function solution(arr) {
  let answer = [];
  let leftCrossSum = 0;
  let rightCrossSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let rowSum = 0;
    let colSum = 0;
    for (let j = 0; j < arr.length; j++) {
      rowSum += arr[i][j];
      colSum += arr[j][i];
      if (i === j) leftCrossSum += arr[i][j];
      if (i + j === arr.length - 1) rightCrossSum += arr[i][j];
      if (i === arr.length - 1 && j === arr.length - 1) {
        answer.push(leftCrossSum);
        answer.push(rightCrossSum);
      }
    }
    answer.push(rowSum);
    answer.push(colSum);
  }
  return Math.max(...answer);
}

/**
 * 강의 해결법
 */
function solution1(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < n; i++) {
    sum1 = 0;
    sum2 = 0;
    for (let j = 0; j < n; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }
    answer = Math.max(answer, sum1, sum2);
  }
  sum1 = 0;
  sum2 = 0;
  for (let i = 0; i < n; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][n - i - 1];
  }
  answer = Math.max(answer, sum1, sum2);
  return answer;
}
// console.log(
//   solution1([
//     [10, 13, 10, 12, 15],
//     [12, 39, 30, 23, 11],
//     [11, 25, 50, 53, 15],
//     [19, 27, 29, 37, 27],
//     [19, 13, 30, 13, 19],
//   ])
// );
