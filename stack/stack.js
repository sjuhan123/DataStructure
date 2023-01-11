class Stack {
  constructor(maxSize){
    this.array = [];
    this.maxSize = maxSize;
    this.top = 0;
  }

  size(){
    return this.top;
  }

  push(element){
    if(this.size() === this.maxSize) return new Error(`stackoverflow`);
    this.array[this.top] = element;
    this.top++
  }

  pop(){
    if(this.size() <= 0) return new Error(`stackunderflow`);
    const result = this.array[this.top - 1];
    delete this.array[this.top - 1];
    this.top--
    return result;
  }

  peek(){
		if(this.top < 1) return `스택에 데이터가 없습니다`;
    return this.array[this.top - 1];
  }

  clear(){
    for(let i = this.top; i > 0; i--){
      this.pop();
    }
  }

  isEmpty(){
    if(this.peek() === undefined) return `스택에 데이터가 없습니다.`;
    return `스택에 데이터가 있습니다.`;
  }
}

const stack = new Stack(3);

console.log(stack.isEmpty());    // 스텍에 데이터가 없습니다.
stack.push('1');                 // [1, (2 empty)]
console.log(stack.isEmpty());    // 스택에 데이터가 있습니다.
stack.push('2');                 // [1, 2, (1 empty)] 
stack.push('3');                 // [1, 2, 3] 
console.log(stack.array);        // [1, 2, 3]
console.log(stack.peek());       // 3
console.log(stack.pop());        // 3
console.log(stack.size());       // 2