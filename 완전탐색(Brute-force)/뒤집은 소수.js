/**
 * 2번
 * N개의 자연수가 입력되면 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면 그 소수를 출력하는 프로그램을 작성하세요.
 * 예를 들어 32를 뒤집으면 23이고, 23은 소수이다. 그러면 23을 출력한다.
 * 단 910을 뒤집으면 19로 숫자화 해야 한다. 첫 자리부터의 연속된 0은 무시한다.
 * O
 */
function solution(arr) {
  let answer;
  for (let i = 0; i < arr.length; i++) {
    let change = "";
    for (let j = String(arr[i]).length - 1; j >= 0; j--) {
      change += String(arr[i])[j];
    }
    arr[i] = Number(change);
  }
  return arr;
}

/**
 * 강의 해결법
 */
function solution1(arr) {
  let answer;
  return answer;
}
// console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));
