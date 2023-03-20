/**
 * 5번
 * 알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우
 * 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시오.
 * 단 반복횟수가 1인 경우 생략합니다.
 * O
 */
function solution(str) {
  let answer = "";
  let alphabet = str[0];
  let repeat = 1;
  for (let i = 1; i < str.length; i++) {
    if (str[i] === alphabet) {
      repeat++;
    } else {
      answer += alphabet;
      if (repeat > 1) answer += repeat;
      alphabet = str[i];
      repeat = 1;
      if (i === str.length - 1) {
        answer += alphabet;
      }
    }
  }
  return answer;
}

/**
 * 강의 해결법
 */
function solution1(str) {
  let answer = "";
  str = str + " ";
  let cnt = 1;
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) cnt++;
    else {
      answer += str[i];
      if (cnt > 1) answer += String(cnt);
      cnt = 1;
    }
  }
  return answer;
}
// console.log(solution1("KKHSSSSSSSE"));
