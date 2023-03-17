/**
 * 9번
 * 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 'A'를 모두 '#'으로 바꾸어 출력하는 프로그램을 작성하세요.
 * O
 */
function solution(string) {
  let answer;
  answer = string
    .split("")
    .map((el) => {
      if (el === "A") return "#";
      else return el;
    })
    .join("");
  return answer;
}

/**
 * 강의 해결법1
 */
function solution1(string) {
  let answer = "";
  for (let x of string) {
    if (x === "A") answer += "#";
    else answer += x;
  }
  return answer;
}

/**
 * 강의 해결법2
 */
function solution2(string) {
  let answer = string;
  answer = answer.replace(/A/g, "#");
  return answer;
}
// console.log(solution2("BANANA"));
