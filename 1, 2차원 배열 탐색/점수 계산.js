/**
 * 4번
 * OX문제는 맞거나 틀린 두 경우의 답을 가지는 문제를 말한다.
 * 여러 개의 OX문제로 만들어진 시험에서 연속적으로 답을 맞히는 경우에는
 * 가산점을 주기 위해서 다음과 같이 점수 계산을 하기로 하였다.
 * 1번 문제가 맞는 경우에는 1점으로 계산한다.
 * 앞의 문제에 대해서는 답을 틀리다가 답이 맞는 처음 문제는 1점으로 계산한다.
 * 또한, 연속으로 문제의 답이 맞는 경우에서 두 번째 문제는 2점, 세 번째 문제는 3점,
 * ..., k번째 문제는 k점으로 계산한다.
 * 예를 들어, 아래와 같이 10개의 OX문제에서 답이 맞은 문제의 경우에는 1로 표시하고,
 * 틀린 경우에는 0으로 표시하였을 때, 점수 계산은 아래 표와 같이 계산되어, 총 점수는 10점이다.
 * 시험문제의 채점 결과가 주어졌을 때, 총 점수를 계산하는 프로그램을 작성하시오.
 * O
 */
function solution(scoreArr) {
  let answer = scoreArr[0];
  let point = 0;
  for (let i = 1; i < scoreArr.length; i++) {
    if (scoreArr[i] > scoreArr[i - 1]) {
      point++;
      answer++;
    } else if (scoreArr[i] === scoreArr[i - 1] && scoreArr[i] === 1) {
      point++;
      answer += point;
    } else point = 0;
  }
  return answer;
}

/**
 * 강의 해결법
 */
function solution1(scoreArr) {
  let answer = 0,
    cnt = 0;
  for (let x of scoreArr) {
    if (x === 1) {
      cnt++;
      answer += cnt;
    } else cnt = 0;
  }
  return answer;
}
// console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
