/**
 * 8번
 * S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하세요.
 * 아나그램 판별 시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.
 * X
 */
function solution(s, t) {
  let answer = 0;
  let tH = new Map();
  let sH = new Map();
  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }
  for (let i = 0; i < t.length - 1; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }
  let lt = 0;
  for (let rt = t.length - 1; rt < s.length; rt++) {
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);
    if (isSameMaps(sH, tH)) answer++;
    sH.set(s[lt], sH.get(s[lt]) - 1);
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }
  return answer;
}

function isSameMaps(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }
  return true;
}

/**
 * 강의 해결법
 */
function solution1(s, t) {
  let answer = 0;
  let sH = new Map();
  let tH = new Map();
  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }
  for (let i = 0; i < t.length - 1; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }
  let lt = 0;
  for (let rt = t.length - 1; rt < s.length; rt++) {
    if (sH.has(s[rt])) {
      sH.set(s[rt], sH.get(s[rt]) + 1);
    } else {
      sH.set(s[rt], 1);
    }
    if (compareMaps(sH, tH)) answer++;
    sH.set(s[lt], sH.get(s[lt]) - 1);
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }
  return answer;
}

function compareMaps(sH, tH) {
  if (sH.size !== tH.size) return false;
  for (let [key, val] of sH) {
    if (!tH.has(key) || tH.get(key) !== val) return false;
  }
  return true;
}
// console.log(solution("bacaAacba", "abc"));
s;
