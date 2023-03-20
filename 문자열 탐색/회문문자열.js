/**
 * 1번
 * 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다.
 * 문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES",
 * 회문 문자열이 아니면 "NO"를 출력하는 프로그램을 작성하세요.
 * 단, 회문을 검사할 때 대소문자를 구분하지 않습니다.
 * O
 */
function solution(str) {
  let answer = "YES";
  let n = str.length;
  let upperStr = str.toUpperCase();
  for (let i = 0; i < n; i++) {
    if (i === Math.floor(n / 2)) break;
    if (upperStr[i] !== upperStr[n - i - 1]) answer = "NO";
  }
  return answer;
}

/**
 * 강의 해결법
 */
function solution1(str) {
  let answer = "Yes";
  str = str.toLowerCase();
  let n = str.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    if (str[i] !== str[n - i - 1]) return "NO";
  }
  return answer;
}

/**
 * 강의 해결법2
 */
function solution2(str) {
  let answer = "YES";
  str = str.toLowerCase();
  if (str !== [...str].reverse().join("")) return "NO";
  return answer;
}
// console.log(solution2("gopoG"));
