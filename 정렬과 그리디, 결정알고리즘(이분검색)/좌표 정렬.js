/**
 * 7번
 * N개의 평면상의 좌표(x, y)가 주어지면 모든 좌표를 오름차순으로 정렬하는 프로그램을 작성하세요.
 * 정렬기준은 먼저 x값의 의해서 정렬하고, x값이 같을 경우 y값에 의해 정렬합니다.
 * O
 */
function solution(arr) {
  let answer = arr
    .sort((a, b) => {
      return a[0] - b[0];
    })
    .sort((a, b) => {
      if (a[0] === b[0]) return a[1] - b[1];
    });
  return answer;
}

/**
 * 강의 해결법
 */
function solution1(arr) {
  let answer = arr;
  arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });
  return answer;
}
// console.log(
//   solution1([
//     [2, 7],
//     [1, 3],
//     [1, 2],
//     [2, 5],
//     [3, 6],
//   ])
// );
