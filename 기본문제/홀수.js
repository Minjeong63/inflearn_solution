/**
 * 6번
 * 7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고,
 * 고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요.
 * 예를 들어, 7개의 자연수 12, 77, 38, 41, 53, 92, 85가 주어지면
 * 이들 중 홀수는 77, 41, 53, 85이므로 그 합은 256이 되고,
 * 홀수들 중 최소값은 41이 된다.
 *
 * @param {*} arr
 * @returns
 */
function solution(arr) {
  let answer = [0],
    odd = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      odd.push(arr[i]);
      answer[0] += arr[i];
    }
  }
  answer[1] = Math.min(...odd);
  return answer;
}

/**
 * 강의 해결법
 * @param {*} arr
 * @returns
 */
function solution1(arr) {
  let answer = [],
    sum = 0,
    min = Number.MAX_SAFE_INTEGER;

  for (let x of arr) {
    if (x % 2 === 1) {
      sum += x;
      if (x < min) min = x;
    }
  }
  answer.push(sum);
  answer.push(min);
  return answer;
}

console.log(solution1([12, 77, 38, 41, 53, 92, 85]));
