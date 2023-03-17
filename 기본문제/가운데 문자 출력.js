/**
 * 15번
 * 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세요.
 * 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.
 * O
 */
function solution(str) {
  let answer;
  let strLength = str.length;
  if (strLength % 2 === 1) {
    answer = str[Math.floor(strLength / 2)];
    // answer = str.substr(Math.floor(strLength / 2), 1);
  } else {
    answer = str[strLength / 2 - 1] + str[strLength / 2];
    // answer = str.substr(strLength / 2 - 1, 2);
  }
  return answer;
}

/**
 * 강의 해결법
 */
function solution1(str) {
  let answer;
  let mid = Math.floor(str.length / 2);
  if (str.length % 2 === 1) {
    answer = str.substring(mid, mid + 1);
  } else {
    answer = str.substring(mid - 1, mid + 1);
  }
  return answer;
}
// console.log(solution1("stzudy"));
