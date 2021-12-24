//programmers: 단어변환
function solution(begin, target, words) {
    if(words.findIndex((e) => e === target) === -1) return 0;    
    
    let checked = Array.from({length: words.length}, ()=>0); //해당 word를 사용했는지 체크
    let count = Array.from({length: words.length+1}, ()=>0); //변환 횟수 저장
    
    let queue = [];
    queue.push([begin, words.length]);
    while (queue.length) {
        let [now, nowIndex] = queue.shift();
        
        if(now === target) {
            return count[nowIndex];
        }
        
        for(let i=0;i<words.length;i++) {
            let arr = words[i].split('');
            let cnt = arr.filter((e, idx) => e === now[idx]).length;
            
            if(cnt === now.length - 1 && checked[i] === 0) {
                let last = target.split('');
                checked[i] = 1;
                count[i] = count[nowIndex] + 1;
                queue.push([words[i], i]);
                break;
            }
        }
    }
}