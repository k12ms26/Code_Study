//programmers: 방의 개수
//미완성
function solution(arrows) {
    let location = [], now = [0, 0];

    location.push([-1, [0, 0]]); //시작
    //좌표 모두 넣어놓기
    for(a of arrows) {
        let x = 0, y = 0;
        if(a === 0) {
            now[1]++; //x, y+1
        } else if(a === 1) {
            now[0]++; now[1]++; //x+1, y+1
        } else if(a === 2) {
            now[0]++; //x+1, y
        } else if(a === 3) {
            now[0]++; now[1]--; //x+1, y-1
        } else if(a === 4) {
            now[1]--; //x, y-1
        } else if(a === 5) {
            now[0]--; now[1]--; //x-1, y-1
        } else if(a === 6) {
            now[0]--; //x-1, y
        } else if(a === 7) {
            now[0]--; now[1]++; //x-1, y+1
        }
        [x, y] = now;
        location.push([a, [x, y]]);
    }

    //방 만들기
    let prev = location[0]; //처음꺼
    for(let [dir, loc] of location) {
        if(dir === -1) continue; //처음꺼는 건너뛰고
        else if(prev[0] !== dir) { //방향이 꺾인다면
            let isNearBy = 
                ((loc[0] === prev[1][0] + 1) || (loc[0] === prev[1][0] - 1) || (loc[0] === prev[1][0])) &&
            ((loc[1] === prev[1][1] + 1) || (loc[1] === prev[1][1] - 1) || (loc[1] === prev[1][1])); //현재 좌표가 이전 방향 맨 처음 점 근처에 있는지
            
            prev = [dir, loc];
        }
    }

    return location;
}