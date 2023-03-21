/**
 * 1번
 * N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력하는 프로그램을 작성하세요.
 * 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다.
 * 만약 235와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.
 * O
 */
function solution(arr) {
  let answer;
  let sum = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    let ySum = 0;
    for (let y of String(x)) {
      ySum += Number(y);
    }
    if (ySum > sum) {
      sum = ySum;
      answer = x;
    } else if (ySum === sum) {
      if (x > answer) answer = x;
    }
  }
  return answer;
}

/**
 * 강의 해결법
 */
function solution1(arr) {
  let answer;
  return answer;
}
// console.log(solution([128, 460, 603, 40, 521, 137, 123]));
