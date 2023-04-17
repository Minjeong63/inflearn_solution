/**
 * 5번
 * 문제 길어서 생략
 * O
 */
function solution(str) {
  let answer = 0;
  let laser = 0;
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      if (str[i + 1] === ")" && stack.length !== 0) {
        laser++;
      } else if (str[i + 1] === "(") {
        stack.push(laser);
        stack.push(str[i]);
      }
    } else {
      if (str[i - 1] !== "(") {
        stack.pop();
        let laserNum = stack.pop();
        answer += laser - laserNum + 1;
        if (stack.length === 0) laser = 0;
      }
    }
  }

  return answer;
}

/**
 * 강의 해결법
 */
function solution1(str) {
  let answer = 0;
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") stack.push(str[i]);
    else {
      stack.pop();
      if (str[i - 1] === "(") answer += stack.length;
      else answer++;
    }
  }
  return answer;
}
// console.log(solution1("(((()(()()))(())()))(()())"));
