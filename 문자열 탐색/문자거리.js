/**
 * 4번
 * 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를
 * 출력하는 프로그램을 작성하세요.
 * X
 * 강의 해결법
 */
function solution1(str, s) {
  let answer = [];
  let p = 1000;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === s) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }
  p = 1000;
  for (let j = str.length - 1; j >= 0; j--) {
    if (str[j] === s) {
      p = 0;
    } else {
      p++;
      answer[j] = Math.min(answer[j], p);
    }
  }
  return answer;
}
// console.log(solution1("teachermode", "e"));
