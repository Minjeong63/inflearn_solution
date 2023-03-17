/**
 * 10번
 * 한 개의 문자열을 입력받고,
 * 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 알아내는 프로그램을 작성하세요.
 * 문자열의 길이는 100을 넘지 않습니다.
 * O (변수 사용했는지 확인 꼭 하기!!)
 */
function solution(str, s) {
  let answer = 0;
  for (let x of str) {
    if (x === s) answer++;
  }
  return answer;
}

/**
 * 강의 해결법
 */
function solution1(str, s) {
  let answer = str.split(s).length;
  return answer - 1;
}
// console.log(solution1("COMPUTERPROGRAMMING", "R"));
