/**
 * 17번
 * N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램을 작성하세요.
 * 출력하는 문자열은 원래의 입력순서를 유지합니다.
 *
 */
function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === i) answer.push(arr[i]);
  }
  return answer;
}

/**
 * 강의 해결법
 */
function solution1(arr) {
  let answer;
  answer = arr.filter((el, idx) => arr.indexOf(el) === idx);
  return answer;
}
// console.log(solution1(["good", "time", "good", "time", "student"]));
