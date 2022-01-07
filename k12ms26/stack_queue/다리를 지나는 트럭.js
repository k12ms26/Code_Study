//programmers: 다리를 지나는 트럭
//https://kyoung-jnn.tistory.com/entry/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8JavaScript-%EB%8B%A4%EB%A6%AC%EB%A5%BC-%EC%A7%80%EB%82%98%EB%8A%94-%ED%8A%B8%EB%9F%AD-%ED%81%90
function solution(bridge_length, weight, truck_weights) {
    let bridge = Array.from({ length: bridge_length }, () => 0); //다리의 길이만큼 초기화
  
    let time = 0;
  
    while (bridge.length) {
        bridge.shift(); //큐의 역할 (O(N)이라 안쓸예정), 하나씩 계속 빼므로
        time += 1; //계속 1초씩

        //위는 마지막 + 1을 위해
        if (truck_weights.length) {
            let sum = bridge.reduce((sum, curValue) => {return sum + curValue});
            
            if (sum + truck_weights[0] <= weight) {
                bridge.push(truck_weights.shift());
            } else {
                bridge.push(0); //여기서도 0이라도 계속 넣어주는 것
            }
        }
    }
  
    return time;
}
// function solution(bridge_length, weight, truck_weights) {
//     let answer = 0;

//     function calculate(cur_truck) {
//         if(sum < weight && sum + cur_truck <= weight) {
//             cur.push(cur_truck);
//             sum += cur_truck;
//         } else {
//             if(cur.length === 1) answer += bridge_length;
//             else {
//                 let cnt = bridge_length + cur.length - 1;
//                 answer += cnt;
//             }
//             cur = [cur_truck], sum = cur_truck;
//         }
//     }

//     let cur = [], sum = 0; //현재 cur 총 합
//     for(let i=0;i<truck_weights.length;i++) {
//         if(i === truck_weights.length - 1) {
//             if(cur.length) {
//                 calculate(truck_weights[i]);
//             } else {
//                 answer += bridge_length;
//             }
//         }
//         calculate(truck_weights[i]);
//     }

//     return answer + 1;
// }