//programmers: 징검다리
//https://gwang920.github.io/algorithm/progreammers-2-43236/
function solution(distance, rocks, n) {
    let answer = 0;
    rocks=[0, ...rocks.sort((a, b)=>a-b), distance];
    
    const BinarySearch = () =>{
        let start = rocks[0], end = rocks[rocks.length-1];
        
        while(start <= end){
            let mid = Math.floor((start+end)/2);
            let count = 0, now = rocks[0];
            //제거할 바위를 고르는 법
            for(let i=1;i<rocks.length;i++){
                if(rocks[i] - now < mid){ //징검다리 간의 간격이 기준값보다 작으면
                    count++;   
                } else {
                    now = rocks[i]; //크면 기준값으로
                }
            }
            
            if(count > n){ //count가 제거할 바위의 개수보다 크면
                end = mid - 1; //줄여라 (더 제거할 바위의 개수가 작아져야하니까)
            } else {
                start = mid + 1; //아니면 늘여라
            }
        }
        answer = end; //최소값의 최댓값
    }
    
    BinarySearch();
    return answer;
}