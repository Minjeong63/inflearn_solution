/**
 * 11번
 * 한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램을 작성하세요.
 * O
 * 아스키 코드 대문자 : 65~90, 소문자 : 97~122
 */
function solution(string) {
  let answer = 0;
  for (let x of string) {
    if (x.charCodeAt(0) <= 90) answer++;
    // if (x.charCodeAt() >= 65 && x.charCodeAt() <= 90) answer++ 이렇게 쓰는 게 더 정확한 코드
  }
  return answer;
}

/**
 * 강의 해결법
 */
function solution1(string) {
  let answer = 0;
  for (let x of string) {
    if (x === x.toUpperCase()) answer++;
  }

  return answer;
}
// console.log(solution1("KoreaTimeGood"));
