/**
 * 2번
 * N개의 자연수가 입력되면 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면 그 소수를 출력하는 프로그램을 작성하세요.
 * 예를 들어 32를 뒤집으면 23이고, 23은 소수이다. 그러면 23을 출력한다.
 * 단 910을 뒤집으면 19로 숫자화 해야 한다. 첫 자리부터의 연속된 0은 무시한다.
 * O
 */
function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    let change = "";
    for (let j = String(arr[i]).length - 1; j >= 0; j--) {
      change += String(arr[i])[j];
    }
    let reverseNum = Number(change);
    for (let i = 2; i < reverseNum; i++) {
      if (reverseNum % i === 0) break;
      if (i === reverseNum - 1 && reverseNum % i !== 0) answer.push(reverseNum);
    }
    if (reverseNum === 1 || reverseNum === 2) answer.push(reverseNum);
  }
  return answer;
}

/**
 * 강의 해결법
 */
function isPrime(num) {
  if (num === 1) false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution1(arr) {
  let answer = [];
  for (let x of arr) {
    let res = 0;
    // let res = Number(x.toString().split("").reverse().join(""));
    while (x) {
      res = res * 10 + (x % 10);
      x = parseInt(x / 10);
    }
    if (isPrime(res)) answer.push(res);
  }
  return answer;
}
// console.log(solution1([32, 55, 62, 20, 250, 370, 200, 30, 100]));
