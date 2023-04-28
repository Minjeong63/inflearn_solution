/**
 * 11번
 * 자연수 N을 입력하면 N!값을 구하세요.
 * N! = n*(n-1)*(n-2)*.....*2*1입니다.
 * 만약 N=5라면 5!=5*4*3*2*1=120입니다.
 * O
 */
function solution(n) {
  if (n === 1) return 1;
  else return n * solution(n - 1);
}

/**
 * 강의 해결법
 */
function solution1(n) {
  let answer;
  function DFS(n) {
    if (n === 1) return 1;
    else return n * DFS(n - 1);
  }
  answer = DFS(n);
  return answer;
}
// console.log(solution1(5));
