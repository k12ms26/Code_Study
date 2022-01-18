//programmers: 이중우선순위큐
function solution(operations) {
    let queue = [];
    for(let element of operations) {
        let [operation, num] = element.split(' ');
        
        if(operation === 'I') queue.push(parseInt(num));
        else {
            if(num === '1') queue.splice(queue.findIndex((e) => e === Math.max(...queue)), 1);
            else queue.splice(queue.findIndex((e) => e === Math.min(...queue)), 1);
        }
    }
    
    if(queue.length) return [Math.max(...queue), Math.min(...queue)];
    else return [0, 0];
}