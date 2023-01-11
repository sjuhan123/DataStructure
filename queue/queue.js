class Queue {
  constructor(maxSize){
    this.array = [];
    this.tail = maxSize;
    this.head = maxSize;
  }

  size(){
    return this.head - this.tail;
  }

  enqueue(data){
    if(this.tail === 0) return console.log(new Error(`큐 용량을 초과합니다.`));
    this.array[this.tail - 1] = data;
    this.tail--;
  }

  dequeue(){
    const answer = this.array[this.head - 1];

    // 모든 데이터를 head로 미는 작업 - 배열로 구현해서 생기는 비효율
    for(let i = this.head - 1; i > this.tail; i--){
      this.array[i] = this.array[i -1];
    }
    delete this.array[this.tail];
    this.tail++;
    return answer;
  }

  isEmpty(){
    if(this.array[this.head - 1] === undefined) return `큐에 데이터가 없습니다.`
    return `큐에 데이터가 있습니다.`
  }
}

const queue = new Queue(3);

console.log(queue.isEmpty());     // 큐에 데이터가 없습니다.
queue.enqueue(1);                 // [(2 empty), 1]
queue.enqueue(2);                 // [(1 empty), 2, 1]
queue.enqueue(3);                 // [3, 2, 1]
queue.enqueue(4);                 // Error: 큐 용량을 초가합니다.
console.log(queue.array);         // [3, 2, 1]
console.log(queue.dequeue());     // 1
console.log(queue.array);         // [(1 empty), 3, 2]
console.log(queue.dequeue());     // 2
console.log(queue.array);         // [(2 empty), 3]
console.log(queue.size());        // 1