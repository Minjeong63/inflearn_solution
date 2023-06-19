/**
 * 1번
 * 철수는 계단을 오를 때 한 번에 한 계단 또는 두 계단씩 올라간다.
 * 만약 총 4계단을 오른다면 그 방법의 수는 1+1+1+1, 1+1+2, 1+2+1, 2+1+1, 2+2로 5가지이다.
 * 그렇다면 총 N계단일 때 철수가 올라갈 수 있는 방법의 수는 몇 가지인가?
 * 강의 해결법
 */
function solution1(n) {
  let answer;
  let dy = Array.from({ length: n + 1 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;
  for (let i = 3; i <= n; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }
  answer = dy[n];
  return answer;
}
// console.log(solution1(7));
