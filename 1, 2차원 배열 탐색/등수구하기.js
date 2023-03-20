/**
 * 5번
 * N(1 <= N <= 100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는 프로그램을 작성하세요.
 * O
 */
function solution(arr) {
  let answer = [];
  let sortArr = [...arr].sort((a, b) => b - a);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < sortArr.length; j++) {
      if (arr[i] === sortArr[j]) {
        answer.push(j + 1);
        break;
      }
    }
  }
  return answer;
}

/**
 * 강의 해결법
 */
function solution1(arr) {
  const n = arr.length;
  let answer = Array.from({ length: n }, () => 1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i] < arr[j]) answer[i]++;
    }
  }
  return answer;
}
// console.log(solution1([92, 92, 92, 100, 76]));
