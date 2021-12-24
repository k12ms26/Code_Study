//programmers: h-index
//h-index는 citations 안에 있는 수일 필요가 없다
function solution(citations) {
    var h = 0;
    citations.sort();
    const n = citations.length;
    while(h <= n) {
        let maximum = 0;
        for(let i=0;i<citations.length;i++) {
            if(citations[i] >= h) maximum += 1;
        }
        
        if(maximum < h) break;
        h += 1;
    }
    return h - 1;
}