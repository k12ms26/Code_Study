//programmers: 방금그곡
//원래 코드 (60점)
function solution(m, musicinfos) {
    var answer = '(None)';
    
    for(let mi of musicinfos) {
        let [start, end, title, melodies] = mi.split(','), isDone = false;
        melodies = melodies.toUpperCase();
        let length = Math.abs(parseInt(end.split(':')[0]) - parseInt(start.split(':')[0])) * 60 + Math.abs(parseInt(end.split(':')[1]) - parseInt(start.split(':')[1]));
        
        let mel = melodies.split(''), newMel = '', cnt = 0;
        for(let i=0;i<length;i++) {
            if(cnt === mel.length) cnt = 0;
            newMel += mel[cnt];
            cnt++;
            if(mel[cnt] === '#') i--;
        }
        
        m = m.toUpperCase();
        if(newMel.includes(m)) { //일치할때만 마지막에 # 붙었는지 검증
            let idx = newMel.indexOf(m);
            for(let i=idx;i<newMel.length;i++) {
                if(i === idx + m.length && newMel[i] !== '#') {
                    answer = title;
                    isDone = true;
                    break;
                }
            }
        }
        
        if(isDone) break;
    }
    return answer;
}