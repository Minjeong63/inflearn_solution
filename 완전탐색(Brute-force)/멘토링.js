/**
 * 3번
 * 현수네 반 선생님은 반 학생들의 수학점수를 향상시키기 위해 멘토링 시스템을 만들려고 합니다.
 * 멘토링은 멘토와 멘티가 한 짝이 되어 멘토가 멘티의 수학공부를 도와주는 것입니다.
 * 선생님은 M번의 수학테스트 등수를 가지고 멘토와 멘티를 정합니다.
 * 만약 A학생이 멘토이고, B학생이 멘티가 되는 짝이 되었다면,
 * A학생은 M번의 수학테스트에서 모두 B학생보다 등수가 앞서야 합니다.
 * M번의 수학성적이 주어지면 멘토와 멘티가 되는 짝을 만들 수 있는 경우가 총 몇 가지인지 출력하는 프로그램을 작성하세요.
 *
 */
function solution(arr) {
  let answer = 0;
  let mento = [],
    menti = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].indexOf(mento) > arr[i].indexOf(menti)) break;
    else if (i === arr.length - 1) answer++;
  }
  return answer;
}

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length - 1; j++) {
    mento.push(arr[i][j]);
    menti.push(arr[i][j + 1]);
  }
}

/**
 * 강의 해결법
 */
function solution1(arr) {
  let answer;
  return answer;
}
// console.log(
//   solution([
//     [3, 4, 1, 2],
//     [4, 3, 2, 1],
//     [3, 1, 4, 2],
//   ])
// );
