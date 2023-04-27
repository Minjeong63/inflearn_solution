/**
 * 8번
 * 1부터 N까지 번호가 적힌 구슬이 있습니다.
 * 이 중 중복을 허락하여 M번을 뽑아 일렬로 나열 하는 방법을 모두 출력합니다.
 * X
 */
function solution(n, m) {
  let answer = [];
  let tmp = [];
  function DFS(L) {
    if (L === m) {
      console.log("tmp ", tmp, L);
      answer.push(tmp);
      console.log(tmp, L);
    } else {
      for (let i = 1; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1);
      }
    }
  }
  DFS(0);
  return tmp;
}

/**
 * 강의 해결법
 */
function solution1(n, m) {
  let answer;
  return answer;
}
console.log(solution(3, 2));
