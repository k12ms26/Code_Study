//BOJ 1182 부분수열의 합
//https://tesseractjh.tistory.com/155?category=470361
//재귀로 돌려야 누락되는 것 없이 모든 경우의 수 확인 가능
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, S] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number); 

let res = 0;
const recursion = (i, sum) => {
    if (i === N) return;

    sum += arr[i];
    if (sum === S) res++;

    recursion(i+1, sum); //현재 값을 고른버전
    recursion(i+1, sum-arr[i]); //현재 값을 고르지 않은 버전
    //-> 부분 집합으로 만들게됨
};

recursion(0, 0);
console.log(res);

//---------------------------------------------------------
//브루트포스로 해결하고자 하였으나 경우의 수가 빠지는 일이 생김
const solution = () => {
    let [N, S] = input[0].split(' ').map(Number);
    let arr = input[1].split(' ').map(Number);

    let nowSum = cnt = 0;
    for(let i=0;i<arr.length;i++) {
      let nowSum = arr[i];
      for(let j=i+1;j<arr.length;j++) {
        if(nowSum + arr[j] === S) {
          cnt++;
          nowSum = arr[i];
        } else {
          nowSum += arr[j];
        }
      }
    }

    return cnt;
};

//---------------------------------------------------------
//메모리 초과
const solution = () => {
  let [N, S] = input[0].split(' ').map(Number);
  let arr = input[1].split(' ').map(Number);
  const getCombinations = (arr, num) => {
      const results = [];
      if (num === 1) return arr.map((e) => [+e]); //하나거나 or 하나가 남았거나 => 현재 arr 모두 리턴
      arr.forEach((fixed, index, origin) => { //origin === arr
          const rest = origin.slice(index + 1); //현재 조합으로 하기로 한 고정 숫자들 제외 나머지 (중복방지)
          const combinations = getCombinations(rest, num - 1); //나머지에 대한 조합
          const attached = combinations.map((el) => [fixed, ...el]); //각각 고정된 배열에 + 나머지 합치기
          results.push(...attached);
      });
  
      return results;
  }

  let cnt = 0;
  while(N > 0) {
      getCombinations(arr, N--).forEach((e) => {
          if(e.reduce((prev, cur) => prev+cur) === S) cnt++;
      });
  }

  return cnt;
};