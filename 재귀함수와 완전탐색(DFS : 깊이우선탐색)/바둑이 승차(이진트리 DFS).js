/**
 * 6번
 * 철수는 그의 바둑이들을 데리고 시장에 가려고 한다.
 * 그런데 그의 트럭은 C킬로그램 넘게 태울수가 없다.
 * 철수는 C를 넘지 않으면서 그의 바둑이들을 가장 무겁게 태우고 싶다.
 * N마리의 바둑이와 각 바둑이의 무게 W가 주어지면,
 * 철수가 트럭에 태울 수 있는 가장 무거운 무게를 구하는 프로그램을 작성하세요.
 * O
 */
function solution(c, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let total = arr.reduce((a, b) => a + b, 0);
  arr.sort((a, b) => a - b);
  function DFS(L, sum) {
    if (L === arr.length) {
      if (total - sum > answer && total - sum <= c) answer = total - sum;
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

/**
 * 강의 해결법
 */
function solution1(c, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  function DFS(L, sum) {
    if (sum > c) return;
    if (L === n) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}
// console.log(solution(259, [81, 58, 42, 33, 61]));
