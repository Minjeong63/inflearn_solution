/**
 * 16번
 * 소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성하세요.
 * 제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다.
 * O
 */
function solution(str) {
  let answer;
  let unique = new Set([...str]);
  answer = [...unique].join("");
  return answer;
}

/**
 * 강의 해결법
 */
function solution1(str) {
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === i) answer += str[i];
  }

  return answer;
}

/**
 * 중복된 문자열이 몇 개 있는 지 찾아보는 방법
 * ex) k가 몇 개 있는 지
 */
function solution2(str, s) {
  let answer = 0;
  let pos = str.indexOf(s, 0);
  while (pos !== -1) {
    answer++;
    pos = str.indexOf(s, pos + 1);
  }
  return answer;
}
// console.log(solution2("ksekkset", "t"));
