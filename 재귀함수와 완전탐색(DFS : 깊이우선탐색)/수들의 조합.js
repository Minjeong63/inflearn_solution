/**
 * 15번
 * N개의 정수가 주어지면 그 숫자들 중 K개를 뽑는 조합의 합이 임의의 정수 M의 배수인 개수는
 * 몇 개가 있는지 출력하는 프로그램을 작성하세요.
 * 예를 들면 5개의 숫자 2 4 5 8 12가 주어지고,
 * 3개를 뽑은 조합의 합이 6의 배수인 조합을 찾으면 4+8+12 2+4+12로 2가지가 있습니다.
 * O
 */
function solution(arr, k, m) {
  let answer = 0;
  arr.sort((a, b) => a - b);
  function DFS(L, sum, s) {
    if (L === k) {
      if (sum % m === 0) answer++;
    } else {
      for (let i = s; i < arr.length; i++) {
        DFS(L + 1, sum + arr[i], i + 1);
      }
    }
    console.log(L, "1234");
  }
  DFS(0, 0, 0);
  return answer;
}

/**
 * 강의 해결법
 */
function solution1(arr, k, m) {
  let answer;
  return answer;
}
// console.log(solution([2, 4, 5, 8, 12], 3, 6));
