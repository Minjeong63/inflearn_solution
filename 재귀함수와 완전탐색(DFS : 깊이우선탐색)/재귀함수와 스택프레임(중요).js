// 스택프레임은 매개변수, 지역변수, 복귀주소를 가지고 있음

/**
 * 1번
 * 자연수 N이 입력되면 재귀함수를 이용하여 1부터 N까지를 출력하는 프로그램을 작성하세요.
 * O
 */
function solution(n) {
  if (n === 1) {
    return 1;
  } else {
    return `${solution(n - 1)} ${n}`;
  }
}

/**
 * 강의 해결법
 */
function solution1(n) {
  function DFS(L) {
    if (L === 0) return;
    else {
      DFS(L - 1);
      console.log(L);
    }
  }
  DFS(n);
}
// console.log(solution1(3));
