/**
 * 1번
 * N(1 <= N <= 100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작성하세요.
 * (첫 번째 수는 무조건 출력한다.)
 * O
 */
function solution(arr) {
  let answer;
  answer = arr.filter((el, idx) => el > arr[idx - 1] || idx === 0);
  return answer;
}

/**
 * 강의 해결법
 */
function solution1(arr) {
  let answer = [];
  answer.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) answer.push(arr[i]);
  }
  return answer;
}
// console.log(solution1([7, 3, 9, 5, 6, 12]));
