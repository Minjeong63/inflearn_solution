/**
 * 3번
 * 현수네 반 선생님은 반 학생들의 수학점수를 향상시키기 위해 멘토링 시스템을 만들려고 합니다.
 * 멘토링은 멘토와 멘티가 한 짝이 되어 멘토가 멘티의 수학공부를 도와주는 것입니다.
 * 선생님은 M번의 수학테스트 등수를 가지고 멘토와 멘티를 정합니다.
 * 만약 A학생이 멘토이고, B학생이 멘티가 되는 짝이 되었다면,
 * A학생은 M번의 수학테스트에서 모두 B학생보다 등수가 앞서야 합니다.
 * M번의 수학성적이 주어지면 멘토와 멘티가 되는 짝을 만들 수 있는 경우가 총 몇 가지인지 출력하는 프로그램을 작성하세요.
 * O
 */
function solution(arr) {
  let answer = 0;
  let mentomenti = [];
  let primary = arr[0];

  for (let i = 0; i < primary.length - 1; i++) {
    for (let j = i + 1; j < primary.length; j++) {
      mentomenti.push([primary[i], primary[j]]);
    }
  }

  for (let i = 0; i < mentomenti.length; i++) {
    let res = true;
    for (let j = 1; j < arr.length; j++) {
      if (arr[j].indexOf(mentomenti[i][0]) > arr[j].indexOf(mentomenti[i][1])) {
        res = false;
        break;
      }
    }
    if (res) answer += 1;
  }
  return answer;
}

/**
 * 강의 해결법
 */
function solution1(arr) {
  let answer = 0;
  let m = arr.length; // 배열 수
  let n = arr[0].length; // 학생 수
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let cnt = 0;
      for (let k = 0; k < m; k++) {
        let pi = 0;
        let pj = 0;
        for (let s = 0; s < n; s++) {
          if (arr[k][s] === i) pi = s;
          if (arr[k][s] === j) pj = s;
        }
        if (pi < pj) cnt++;
      }
      if (cnt === m) answer++;
    }
  }
  return answer;
}
// console.log(
//   solution0([
//     [3, 4, 1, 2],
//     [4, 3, 2, 1],
//     [3, 1, 4, 2],
//   ])
// );
