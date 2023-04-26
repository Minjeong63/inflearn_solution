/**
 * 3번
 * 아래 그림과 같은 이진트리를 전위순회와 후위순회를 연습해보세요.
 * 강의 해결법
 * X
 */
function solution(v) {
  let answer;
  function DFS(v) {
    if (v > 7) return;
    else {
      // console.log(v) : 전위순회
      DFS(v * 2);
      // console.log(v) : 중위순회
      DFS(v * 2 + 1);
      // console.log(v) : 후위순회
    }
  }
  DFS(v);
  return answer;
}
// console.log(solution(1));
