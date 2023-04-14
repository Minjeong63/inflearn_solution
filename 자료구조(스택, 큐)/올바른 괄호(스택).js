/**
 * 1번
 * 괄호가 입력되면 올바른 괄호이면 "YES", 올바르지 않으면 "NO"를 출력합니다.
 * (())() 이것은 괄호의 쌍이 올바르게 위치하는 거지만, (()()))은 올바른 괄호가 아니다. ()))((
 * O
 */
function solution(str) {
  let answer = "YES";
  let left = 0;
  let right = 0;
  for (let x of str) {
    if (x === "(") left++;
    if (x === ")") right++;
    if (left < right) answer = "NO";
  }
  if (left !== right) answer = "NO";
  return answer;
}

/**
 * 강의 해결법
 */
function solution1(str) {
  let answer = "YES";
  let stack = [];
  for (let x of str) {
    if (x === "(") stack.push(x);
    else {
      if (stack.length === 0) return "NO";
      else stack.pop();
    }
  }
  if (stack.length > 0) answer = "NO";
  return answer;
}
// console.log(solution("(()(()))(()"));
