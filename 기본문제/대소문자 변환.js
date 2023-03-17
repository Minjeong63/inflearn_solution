/**
 * 13번
 * 대문자와 소문자가 같이 존재하는 문자열을 입력받아
 * 대문자는 소문자로 소문자는 대문자로 변환하여 출력하는 프로그램을 작성하세요.
 * O
 */
function solution(string) {
  let answer = "";
  //   for (let x of string) {
  //     if (x === x.toUpperCase()) answer += x.toLowerCase();
  //     else answer += x.toUpperCase();
  //   }

  for (let x of string) {
    let code = x.charCodeAt();
    if (code >= 65 && code <= 90) answer += String.fromCharCode(code + 32);
    else if (code >= 97 && code <= 122)
      answer += String.fromCharCode(code - 32);
  }
  return answer;
}
// console.log(solution("StuDY"));
