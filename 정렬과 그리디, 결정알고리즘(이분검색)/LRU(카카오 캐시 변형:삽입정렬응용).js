/**
 * 5번
 * 문제 길어서 생략
 * O
 */
function solution(s, arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (answer.length < s) {
      if (answer.includes(arr[i])) {
        let index = Number.MIN_SAFE_INTEGER;
        for (let j = answer.length - 1; j >= 0; j--) {
          if (answer[j] === arr[i]) index = j;
          if (j < index) answer[j + 1] = answer[j];
        }
        answer[0] = arr[i];
      } else {
        for (let j = answer.length - 1; j >= 0; j--) {
          answer[j + 1] = answer[j];
        }
        answer[0] = arr[i];
      }
    } else if (answer.length === s) {
      if (answer.includes(arr[i])) {
        let index = Number.MIN_SAFE_INTEGER;
        for (let j = answer.length - 1; j >= 0; j--) {
          if (answer[j] === arr[i]) index = j;
          if (j < index) answer[j + 1] = answer[j];
        }
        answer[0] = arr[i];
      } else {
        for (let j = answer.length - 2; j >= 0; j--) {
          answer[j + 1] = answer[j];
        }
        answer[0] = arr[i];
      }
    }
  }
  return answer;
}

/**
 * 강의 해결법
 */
function solution1(s, arr) {
  let answer = [];
  arr.forEach((x) => {
    let pos = -1;
    for (let i = 0; i < s; i++) if (x === answer[i]) pos = i;
    if (pos === -1) {
      for (let i = s - 1; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
      // 방법 2
      // answer.unshift(x);
      // if (answer.length > s) answer.pop();
    } else {
      for (let i = pos; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
      // 방법 2
      // answer.splice(pos, 1);
      // answer.unshift(x);
    }
    answer[0] = x;
  });
  return answer;
}
// console.log(solution1(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
