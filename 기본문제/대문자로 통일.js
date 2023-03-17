/**
 * 12번
 * 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자로 모두 통일하여 문자열을 출력하는 프로그램을 작성하세요.
 * O
 */
function solution(string) {
  let answer = string.toUpperCase();
  return answer;
}

/**
 * 강의 해결법
 */
function solution1(string) {
  let answer = "";
  for (let x of string) {
    let code = x.charCodeAt();
    if (code >= 97 && code <= 122) answer += String.fromCharCode(code - 32);
    else answer += x;
  }
  return answer;
}
// console.log(solution1("ItisTimeToStudy"));
