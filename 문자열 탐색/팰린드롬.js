/**
 * 2번
 * 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 팰린드롬이라고 합니다.
 * 문자열이 입력되면 해당 문자열이 팰린드롬이면 "YES", 아니면 "NO"를 출력하는 프로그램을 작성하세요.
 * 단 회문을 검사할 때 알파벳만 가지고 회문을 검사하며, 대소문자를 구분하지 않습니다.
 * 알파벳 이외의 문자들은 무시합니다.
 * O
 */
function solution(str) {
  let answer = "YES";
  str = str.toLowerCase();
  str = str.replace(/[^a-zA-Z]/g, "");
  let n = str.length;

  for (let i = 0; i < Math.floor(n / 2); i++) {
    if (str[i] !== str[n - i - 1]) return "NO";
  }
  return answer;
}

/**
 * 강의 해결법
 */
function solution1(str) {
  let answer = "YES";
  str = str.toLowerCase().replace(/[^a-z]/g, "");
  if (str.split("").reverse().join("") !== str) return "NO";
  return answer;
}
// console.log(solution1("found7, time: study; Yduts; emit, 7Dnuof"));
