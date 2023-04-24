/**
 * 8번
 * 한 개의 회의실이 있는데 이를 사용하고자 하는 n개의 회의들에 대하여 회의실 사용표를 만들려고 한다.
 * 각 회의에 대해 시작시간과 끝나는 시간이 주어져 있고,
 * 각 회의가 겹치지 않게 하면서 회의실을 사용할 수 있는 최대수의 회의를 찾아라.
 * 단, 회의는 한번 시작하면 중간에 중단될 수 없으며 한 회의가 끝나는 것과 동시에 다음 회의가 시작될 수 있다.
 * X
 */
function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });
  for (let i = 0; i < arr.length; i++) {
    let init = arr[i];
    let sum = 1;
    let j = i + 1;
    while (j < arr.length) {
      if (init[1] <= arr[j][0]) {
        sum++;
        init = arr[j];
        j++;
      } else j++;
    }
    answer = Math.max(answer, sum);
  }
  return answer;
}

/**
 * 강의 해결법
 */
function solution1(arr) {
  let answer = 0;
  arr.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  let end = 0;
  for (let x of arr) {
    if (x[0] >= end) {
      answer++;
      end = x[1];
    }
  }
  return answer;
}
// console.log(
//   solution1([
//     [1, 4],
//     [2, 3],
//     [3, 5],
//     [4, 6],
//     [5, 7],
//   ])
// );
