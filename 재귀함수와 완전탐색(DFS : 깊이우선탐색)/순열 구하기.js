/**
 * 10번
 * 10이하의 N개의 자연수가 주어지면 이 중 M개를 뽑아 일렬로 나열하는 방법을 모두 출력합니다.
 * O
 */
function solution(arr, n) {
  let answer = [];
  let tmp = Array.from({ length: n }, () => 0);
  function DFS(L, arr) {
    if (L === n) {
      answer.push(tmp.slice());
    } else {
      for (let x of arr) {
        tmp[L] = x;
        let duplArr = arr.slice();
        duplArr.splice(duplArr.indexOf(x), 1);
        DFS(L + 1, duplArr);
      }
    }
  }
  DFS(0, arr);
  return answer;
}

/**
 * 강의 해결법
 */
function solution1(arr, n) {
  let answer = [];
  let tmp = Array.from({ length: n }, () => 0);
  let ch = Array.from({ length: arr.length }, () => 0);
  function DFS(L) {
    if (L === n) answer.push(tmp.slice());
    else {
      for (let i = 0; i < arr.length; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp[L] = arr[i];
          DFS(L + 1);
          ch[i] = 0;
        }
      }
    }
  }
  DFS(0);
  return answer;
}
// console.log(solution1([3, 6, 9], 2));
