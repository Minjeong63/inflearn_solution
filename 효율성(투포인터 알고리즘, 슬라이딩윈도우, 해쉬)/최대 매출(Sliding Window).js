/**
 * 5번
 * 현수의 아빠는 제과점을 운영합니다.
 * 현수 아빠는 현수에게 N일 동안의 매출기록을 주고 연속된 k일 동안의 최대 매출액이 얼마인지 구하라고 했습니다.
 * 만약 N=10이고 10일 간의 매출기록이 아래와 같습니다. 이때 k=3이면
 * 12 15 11 20 25 10 20 19 13 15
 * 연속된 3일간의 최대 매출액은 11+20+25=56만원입니다.
 * O
 */
function solution(m, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  for (let lt = 0; lt < arr.length - m + 1; lt++) {
    let sum = 0;
    let rt = lt + m - 1;
    sum += arr[lt];
    while (rt > lt) {
      sum += arr[rt--];
    }
    if (sum > answer) answer = sum;
  }

  return answer;
}

/**
 * 강의 해결법
 */
function solution1(m, arr) {
  let answer;
  let sum = 0;
  for (let j = 0; j < m; j++) {
    sum += arr[j];
  }
  answer = sum;
  for (let i = 0; i < arr.length - m; i++) {
    sum += arr[i + m] - arr[i];
    if (sum > answer) answer = sum;
  }
  return answer;
}
// console.log(solution1(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));
