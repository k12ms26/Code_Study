//programmers: 디스크컨트롤러

//내가 짠거
function solution(jobs) {
    let answer = 0, newDisk = [];
    for(let i=0;i<jobs.length;i++) {
        if(jobs[i][0] === 0) {
            newDisk.push(jobs[i]);
            jobs.splice(i, 1);
        }
    }
    newDisk = newDisk.sort((a, b) => a[1]-b[1]).concat(jobs.sort((a, b) => a[1]-b[1])); //0만 앞에 오면 되는줄
    
    let total = 0;
    for(let i=0;i<newDisk.length;i++) {
        const sum = (total - newDisk[i][0]) + newDisk[i][1];
        total = sum + newDisk[i][0];
        answer += sum;
    }
    
    return Math.ceil(answer / newDisk.length);
}

//남이 짠거
//https://kyun2da.github.io/2020/07/21/diskController/
const solution = (jobs) => {
    let answer = 0,
      j = 0,
      time = 0;
    jobs.sort((a, b) => {
      return a[0] - b[0];
    });
  
    const priorityQueue = [];
    while (j < jobs.length || priorityQueue.length !== 0) {
      if (jobs.length > j && time >= jobs[j][0]) {
        priorityQueue.push(jobs[j++]);
        priorityQueue.sort((a, b) => {
          return a[1] - b[1];
        });
        continue;
      } //앞에서 소팅 작업
      if (priorityQueue.length !== 0) {
        time += priorityQueue[0][1];
        answer += time - priorityQueue[0][0];
        priorityQueue.shift(); //하나씩 넣어주고 빼기
      } else {
        time = jobs[j][0]; //작업이 아직 남아있다면 다시 처음부터 실행
      }
    }
    return parseInt(answer / jobs.length);
  };