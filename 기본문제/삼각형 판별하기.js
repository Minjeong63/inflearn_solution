/**
 * 2번
 * 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면
 * 이 세 막대로 삼각형을 만들 수 있으면 "YES"를 출력하고,
 * 만들 수 없으면 "NO"를 출력한다.
 * O
 * @param {*} a
 * @param {*} b
 * @param {*} c
 * @returns
 */
function solution(a, b, c) {
  if (a + b > c && b + c > a && c + a > b) return "YES";
  else return "NO";
}
// console.log(solution(13, 33, 17));

/**
 * 강의 해결법
 * @param {*} a
 * @param {*} b
 * @param {*} c
 * @returns
 */
function solution1(a, b, c) {
  let answer = "NO",
    max;
  let sum = a + b + c;
  if (a < b) max = b;
  else max = a;
  if (max < c) max = c;

  if (sum - max > max) answer = "YES";

  return answer;
}
// console.log(solution1(6, 7, 11));
