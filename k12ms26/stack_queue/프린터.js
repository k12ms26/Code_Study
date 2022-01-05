//programmers: 프린터
//linked list로 구현
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    
    enqueue(value) {
        const node = new Node(value);
        if(this.head === null) {
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }
    
    dequeue() {
        const value = this.head.value;
        this.head = this.head.next;
        return value;
    }
    
    peek() {
        return this.head.value;
    }
}

function solution(priorities, location) {
    let answer = 0;
    const queue = new Queue();
    for(let i=0;i<priorities.length;i++) {
        queue.enqueue([priorities[i], i]); //우선순위와 인덱스를 같이 넣어줌
    }

    priorities.sort((a, b) => b- a); //중요도에 따라

    let count = 0;
    while(true) {
        const cur = queue.peek();
        if(cur[0] < priorities[count]) { //정렬된 우선순위보다 더 작을때 (결국엔 정렬된 것과 같아지는 것)
            queue.enqueue(queue.dequeue()); //다시 넣어주기
        } else {
            const value = queue.dequeue();
            count += 1;
            if(location === value[1]) {
                return count;
            }
        }
    }                
}