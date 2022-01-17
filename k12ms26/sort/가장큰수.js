//programmers: 가장 큰 수
//ㅋㅋ
function solution(numbers) {
    numbers = numbers.map((e) => e.toString());
    numbers.sort((a, b) => b.repeat(4).slice(0, 4) - a.repeat(4).slice(0, 4));
    if(numbers[0] === '0') return '0';
    return numbers.join('');
}
// function solution(numbers) {
//     numbers.sort((a, b) => b.toString().split('')[0] - a.toString().split('')[0]);

//     for(let i=0;i<numbers.length-1;i++) {
//         const a = numbers[i].toString().split(''), b = numbers[i+1].toString().split('');
//         if(a[0] === b[0]) {
//             const maximum = Math.max(...[a.length, b.length]);
//             for(let j=1,k=0;j<maximum;j++) {
//                 if(a.length < b.length) {
//                     if(typeof a[k] === 'undefined') break;
//                     if(b[j] > a[k] && j !== 0) {
//                         const tmp = numbers[i];
//                         numbers[i] = numbers[i+1];
//                         numbers[i+1] = tmp;
//                         break;
//                     } else if(b[j] === a[k]) k += 1;
//                 } else if(a.length > b.length) {
//                     if(typeof b[k] === 'undefined') break;
//                     if(a[j] < b[k] && j !== 0) {
//                         const tmp = numbers[i];
//                         numbers[i] = numbers[i+1];
//                         numbers[i+1] = tmp;
//                         break;
//                     } else if(a[j] === b[k]) k += 1;
//                 } else {
//                     if(b[j] > a[j]) {
//                         const tmp = numbers[i];
//                         numbers[i] = numbers[i+1];
//                         numbers[i+1] = tmp;
//                         break;
//                     }
//                 }
//             }
//         }
//     }

//     return numbers.join('');
// }