/**
 * 3번
 * A, B 두 사람이 가위바위보 게임을 합니다.
 * 총 N번의 게임을 하여 A가 이기면 A를 출력하고, B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다.
 * 가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다.
 * O
 */
function solution(arr, arr2) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr2[i]) answer.push("D");
    else if (arr[i] > arr2[i]) {
      if (!(arr[i] === 3 && arr2[i] === 1)) answer.push("A");
      else answer.push("B");
    } else {
      if (!(arr[i] === 1 && arr2[i] === 3)) answer.push("B");
      else answer.push("A");
    }
  }
  return answer;
}

/**
 * 강의 해결법
 */
function solution1(a, b) {
  let answer = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) answer.push("D");
    else if (
      (a[i] === 1 && b[i] === 3) ||
      (a[i] === 2 && b[i] === 1) ||
      (a[i] === 3 && b[i] === 2)
    )
      answer.push("A");
    else answer.push("B");
  }
  return answer;
}
// console.log(solution1([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));
