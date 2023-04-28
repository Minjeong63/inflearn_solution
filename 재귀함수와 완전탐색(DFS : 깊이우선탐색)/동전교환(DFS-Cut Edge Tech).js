/**
 * 9번
 * 다음과 같이 여러 단위의 동전들이 주어져 있을때 거스름돈을 가장 적은 수의 동전으로 교환 해주려면 어떻게 주면 되는가?
 * 각 단위의 동전은 무한정 쓸 수 있다.
 * O
 */
function solution(arr, price) {
  let answer = Number.MAX_SAFE_INTEGER;
  function DFS(L, sum) {
    if (L > Math.ceil(price / Math.min(...arr))) return;
    if (sum > price) return;
    if (sum === price) {
      answer = Math.min(answer, L);
    } else {
      for (let x of arr) {
        DFS(L + 1, sum + x);
      }
    }
  }
  DFS(0, 0);
  return answer;
}

/**
 * 강의 해결법
 */
function solution1(arr, price) {
  let answer = Number.MAX_SAFE_INTEGER;
  function DFS(L, sum) {
    if (sum > price) return;
    if (L >= answer) return;
    if (sum === price) {
      answer = Math.min(answer, L);
    } else {
      for (let x of arr) {
        DFS(L + 1, sum + x);
      }
    }
  }
  DFS(0, 0);
  return answer;
}
// console.log(solution([1, 2, 5], 15));
