/**
 * 14번
 * 1부터 N까지 번호가 적힌 구슬이 있습니다.
 * 이 중 M개를 뽑는 방법의 수를 출력하는 프로그램을 작성하세요.
 * O
 */
function solution(n, m) {
  let answer = [];
  let tmp = [];
  let ch = Array.from({ length: n + 1 }, () => 0);
  let key = 0;
  function DFS(L) {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = L + 1; i <= n; i++) {
        if (ch[i] === 0 && i > key) {
          tmp[L] = i;
          ch[i] = 1;
          key = i;
          DFS(L + 1);
          ch[i] = 0;
          key = 0;
        }
      }
    }
  }
  DFS(0);
  answer.push(answer.length);
  return answer;
}

/**
 * 강의 해결법
 */
function solution1(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);
  function DFS(L, S) {
    if (L === m) answer.push(tmp.slice());
    else {
      for (let i = S; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1, i + 1);
      }
    }
  }
  DFS(0, 1);
  return answer;
}
// console.log(solution1(4, 2));
