/**
 * 5번
 * 이론
 * BFS는 최단 거리 구하는 방법론이며, 상태트리를 레벨 탐색함
 * 아래 그림과 같은 이진트리를 넓이우선탐색해 보세요.
 * 강의 해결법
 */
function solution1(n) {
  let answer = "";
  let queue = [];
  queue.push(1);
  while (queue.length) {
    let v = queue.shift();
    answer += v + " ";
    for (let nv of [v * 2, v * 2 + 1]) {
      if (nv > 7) continue;
      queue.push(nv);
      console.log("ㅋㅋㅋㅋ", nv);
    }
  }
  return answer;
}
// console.log(solution1());
