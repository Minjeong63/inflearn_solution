/**
 * 3번
 * 문자와 숫자가 섞여있는 문자열이 주어지면 그 중 그 중 숫자만 추출하여 그 순서대로 자연수를 만듭니다.
 * 만약 "tge0a1h205er"에서 숫자만 추출하면 0, 1, 2, 0, 5이고 이것을 자연수를 만들면 1205가 됩니다.
 * 추출하여 만들어지는 자연수는 100,000,000을 넘지 않습니다.
 * O
 */
function solution(str) {
  let answer = +str.replace(/[^0-9]/g, "");
  return answer;
}

/**
 * 강의 해결법
 */
function solution1(str) {
  let answer = "";
  for (let x of str) {
    if (!isNaN(x)) answer = answer * 10 + Number(x);
  }
  return answer;
}
// console.log(solution1("g0en2T0s8eSoft"));
