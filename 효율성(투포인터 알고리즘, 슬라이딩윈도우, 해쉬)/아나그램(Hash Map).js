/**
 * 7번
 * Anagram이란 두 문자열이 알파벳의 나열 순서는 다르지만 그 구성이 일치하면 두 단어는 아나그램이라고 합니다.
 * 예를 들면 AvaAeCe와 baeeACA는 알파벳을 나열하는 순서는 다르지만
 * 그 구성을 살펴보면 A(2), a(1), b(1), C(1), e(2)로 알파벳과 그 개수가 모두 일치합니다.
 * 즉 어느 한 단어를 재배열하면 상대편 단어가 될 수 있는 것을 아나그램이라고 합니다.
 * 길이가 같은 두 개의 단어가 주어지면 두 단어가 아나그램인지 판별하는 프로그램을 작성하세요.
 * 아나그램 판별시 대소문자가 구분됩니다.
 */
function solution(str1, str2) {
  let answer;
  let sH = new Map();
  let sH2 = new Map();
  for (let x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  for (let y of str2) {
    if (sH2.has(y)) sH2.set(y, sH2.get(y) + 1);
    else sH2.set(y, 1);
  }

  let arr1 = [];
  let arr2 = [];
  for (let [key, val] of sH) {
    arr1.push([key, val]);
  }
  for (let [key, val] of sH2) {
    arr2.push([key, val]);
  }
  arr1.sort((a, b) => a[0].charCodeAt(0) - b[0].charCodeAt(0));
  arr2.sort((a, b) => a[0].charCodeAt(0) - b[0].charCodeAt(0));
  
  if (String(arr1) === String(arr2)) answer = "YES";
  else answer = "NO";

  return answer;
}

/**
 * 강의 해결법
 */
function solution1(str1, str2) {
  let answer;
  return answer;
}
// console.log(solution("AbaAeCe", "baeeACA"));
// console.log(solution("abaCC", "Caaab"));
