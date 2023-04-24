/**
 * 10번
 * 임의의 N개의 숫자가 입력으로 주어집니다.
 * N개의 수를 오름차순으로 정렬한 다음 N개의 수 중 한 개의 수인 M이 주어지면
 * 이분검색으로 M이 정렬된 상태에서 몇 번째에 있는지 구하는 프로그램을 작성하세요. 단 중복값은 존재하지 않습니다.
 *
 */
function solution(m, arr) {
  let answer;
  arr.sort((a, b) => a - b);
  answer = arr.indexOf(m) + 1;
  return answer;
}

/**
 * 강의 해결법
 */
function solution1(m, arr) {
  let answer;
  arr.sort((a, b) => a - b);
  let lt = 0;
  let rt = arr.length - 1;
  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    if (arr[mid] === m) {
      answer = mid + 1;
      break;
    } else if (arr[mid] < m) lt = mid + 1;
    else rt = mid - 1;
  }
  return answer;
}
// console.log(solution1(32, [23, 87, 65, 12, 57, 32, 99, 81]));
