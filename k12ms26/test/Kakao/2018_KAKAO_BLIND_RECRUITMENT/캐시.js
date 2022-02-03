//programmers: 캐시
//LRU 알고리즘: 가장 오래된 것 교체
function solution(cacheSize, cities) {
    let cache = [];
    let total = 0;
    
    if(cacheSize === 0) return 5 * cities.length;
    
    for(let c of cities) {
        let city = c.toUpperCase();
        let nowIdx = cache.findIndex(e => e === city);
        if(nowIdx > -1) { //65점 -> 100점: 중복되는게 들어왔을 경우 해당 것을 지워주고 새롭게 push
            cache.splice(nowIdx, 1);
        }
        if(cache.length === cacheSize) {
            cache.shift();
        }
        cache.push(city);

        if(nowIdx > -1) total += 1;
        else total += 5;

    }
    return total;
}