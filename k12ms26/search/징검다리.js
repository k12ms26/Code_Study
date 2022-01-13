//programmers: 징검다리
//https://gwang920.github.io/algorithm/progreammers-2-43236/
//바위 개수와 제거할 바위의 개수가 같은 경우는 안 고려하는건가?
function solution(distance, rocks, n) {
    let answer = 0;
    rocks=[0, ...rocks.sort((a, b)=>a-b), distance];
    
    const BinarySearch = () =>{
        let start = rocks[0], end = rocks[rocks.length-1];
        
        while(start <= end){
            let mid = Math.floor((start+end)/2);
            let count=0, now=0;
            //제거할 바위를 고르는 법
            for(let i=1;i<rocks.length;i++){ //이거 왜해?
                if(rocks[i]-now < mid){ //기준값보다 현재 값이 작으면 count + 1
                    count++;   
                } else {
                    now = rocks[i]; //크면 기준값으로
                }
            }
            
            if(count>n){ //count가 제거할 바위의 개수보다 크면
                end=mid-1; //줄여라
            }else{
                start=mid+1; //아니면 늘여라
            }
        }

        answer = end;
    }
    
    BinarySearch();
    return answer;
}