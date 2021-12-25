//programmers: 여행경로
function solution(tickets) {
    let answer = [];
    const DFS = (end, tickets, route) => {
        let curRoute = [...route, end];
        if(tickets.length === 0) {
            answer.push(curRoute);
        } else {
            for(let i=0;i<tickets.length;i++) {
                if(tickets[i][0] === end) {
                    let newTickets = [...tickets];
                    const [[s, e]] = newTickets.splice(i, 1);
                    DFS(e, newTickets, curRoute);
                }
            }
        }
    }
    
    DFS('ICN', tickets, []);
    answer.sort();
    return answer[0];
}

// function solution(tickets) {
//     var answer = [];

//     let checked = Array.from({length: tickets.length}, ()=>0);

//     const DFS = (end, curRoute) => {
//         if(answer.length === 0) {
//             answer = curRoute;
//             return;
//         }
//         for(let i=0;i<tickets.length;i++) {
//             if(tickets[i][0] === end && checked[i] === 0) {
//                 checked[i] = 1;
//                 curRoute.push(tickets[i][1]);
//                 DFS(tickets[i][1], curRoute);
//             }
//         }
//     }

//     for(let i=0;i<tickets.length;i++) {
//         checked = Array.from({length: tickets.length}, ()=>0);
//         if(tickets[i][0] === 'ICN' && checked[i] === 0) {
//             checked[i] = 1;
//             answer.push([tickets[i][0], tickets[i][1]]);
//             DFS(tickets[i][1], answer[answer.length-1]);
//         }
//     }

//     answer.sort();

//     return answer[0];
// }