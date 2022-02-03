//programmers: 셔틀버스
//62.5 (다시 풀기)
function solution(n, t, m, timetable) {
    let last_time = 540 + (n-1) * t; //콘이 마지막에 탈 수 있는 시간
    let last_order = m * n; //콘이 마지막에 탈 수 있는 순서
    
    let hour = 9, minute = 0;
    
    let parsedTimes = timetable
        .sort((a, b) => parseInt(a.split(':')[0]) - parseInt(b.split(':')[0]) || parseInt(a.split(':')[1]) - parseInt(b.split(':')[1]))
        .map((e) => parseInt(e.split(':')[0]) * 60 + parseInt(e.split(':')[1]));

    if(timetable.length < last_order) {
        hour = Math.floor(last_time / 60);
        minute = Math.floor(last_time % 60);
    } else {
        let time = parsedTimes[last_order-2];
        for(let i=last_order-2;i>0;i--) {
            if(parsedTimes[i] === time) time -= 1;
        }
        
        if(typeof time === 'undefined') time = 540;
        hour = Math.floor(time / 60);
        minute = Math.floor(time % 60);
    }

    if(timetable.filter((e) => {
        let element = parseInt(e.split(':')[0]) * 60 + parseInt(e.split(':')[1]);
        return element === last_time;
    }).length) { //단 막차 시간에 맞춰오는 사람이 있으면 그사람보다 1분은 앞서야
        minute--;
        if(minute === -1) { //크루의 도착시각이 00:01부터라 가능한 조건
            minute = 59;
            hour--;
        }
    }

    if(hour < 10) hour = '0' + hour.toString();
    if(minute < 10) minute = '0' + minute.toString();

    res = `${hour}:${minute}`;
    return res;
}