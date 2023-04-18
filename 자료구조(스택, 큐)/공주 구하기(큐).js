/**
 * 6번
 * 문제 길어서 생략
 * O
 */
function solution(n, k) {
  let answer;
  let queue = [];
  for (let i = 1; i <= n; i++) {
    queue.push(i);
  }
  while (queue.length !== 1) {
    for (let i = 0; i < k; i++) {
      if (i !== k - 1) {
        let data = queue.shift();
        queue.push(data);
      } else queue.shift();
    }
  }
  answer = queue[0];
  return answer;
}

/**
 * 강의 해결법
 */
function solution1(n, k) {
  let answer;
  let queue = Array.from({ length: n }, (v, i) => i + 1);
  while (queue.length) {
    for (let i = 1; i < k; i++) queue.push(queue.shift());
    queue.shift();
    if (queue.length === 1) answer = queue.shift();
  }
  return answer;
}
// console.log(solution1(8, 3));
