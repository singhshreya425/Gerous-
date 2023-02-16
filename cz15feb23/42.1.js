// Stack Implementation
// Tags:	ArrayStackString
// Create and implement an interface Stack. 

 

// Stack interface has following methods

// push with an input parameter of type String and void return type. 
// pop with no parameter and void return type.
 

// StringStack class has following characteristics

// Must implement Stack interface.
// printStack with no input parameters. The method should print stack data. 
// push will insert a string in the string array and pop will remove the string.
// If a stack is empty, print “Stack is empty” during pop.
// If a stack is full, print “Stack is full”.  
 

// Input
//     3
//     1
//     First String
//     Second String
//     Third String 


//     where,

// First line represents the number of strings to push.
// Second line represents the number of strings to pop.
// Third line represents the first string.
// Fourth line represents the second string.
// Fifth line represents the third string.
 

 

// Output
//     Third String
//     Second String
//     First String
//     Second String
//     First String

 

//     where,

// First three lines of output represent stack data after all the push operations.
// Fourth and fifth line of output represents stack data after all the pop operation.

// Assume that,

// The maximum size of the stack is 10.
class stack{
    constructor(){
        this.array=[]
    }
    append(data){
this.array.push(data)
    }
    display(){
        console.log(this.array)
    }
    peek(){
        console.log(this.array[this.array.length-1]) 
    }
    delete(){
        this.array.pop()
    }
}
const mystack=new stack()
mystack.append(5)
mystack.append(1)
mystack.append(9)
mystack.append(9)
mystack.delete()
mystack.peek()
mystack.display()

// Stack interface
class Stack {
    push() {
      // to be implemented by child class
    }
    pop() {
      // to be implemented by child class
    }
  }
  
  // StringStack class that implements Stack interface
  function solution(a,b,arr) {
    //Write your solution here
      let arr2=[],n=0
      for(let i=0;i<arr.length&&n<10;i++){
          arr2.push(arr[i])
          n++
      }
      let stack=[],full=''
      n=0
      for(let j=0;j<arr.length;j++){
          if(n>=10)full+=`Stack is full\n`
          else{stack.push(arr[j])
              n++
              }
      }
      let empt=''
      for(let em=0;em<b;em++){
          if(stack.length==0)empt+=`Stack is empty\n`
          else stack.pop()
      }
      let st=''
      st+=full
      for(let r=arr2.length-1;r>=0;r--){
          st+=`${arr2[r]}\n`
      }
      if(stack.length==0)st+=`Stack is empty\n`
      if(b==10)st+=`Stack is empty\n`
      if(stack.length!=1){
          for(let l=stack.length-1;l>=0;l--){
              st+=`${stack[l]}\n`
          }
      }
      st+=empt
      return st
  }
  
  
  function main() {
      var a = parseInt(readLine());
      var b=parseInt(readLine());
      let arr=[]
      for(let i=0;i<a;i++) arr.push(readLine())
  
      var res = solution(a,b,arr);
      console.log(res);
  }
  
  





  class StringStack extends Stack {
    constructor() {
      super();
      this.MAX_SIZE = 10;
      this.top = -1;
      this.stack = new Array(this.MAX_SIZE);
    }
  
    push(str) {
      if (this.top >= this.MAX_SIZE - 1) {
        console.log("Stack is full");
        return;
      }
      this.top++;
      this.stack[this.top] = str;
    }
  
    pop() {
      if (this.top < 0) {
        console.log("Stack is empty");
        return;
      }
      this.top--;
    }
  
    printStack() {
      if (this.top < 0) {
        console.log("Stack is empty");
        return;
      }
      for (let i = this.top; i >= 0; i--) {
        console.log(this.stack[i]);
      }
    }
  }
  
  // Sample usage
  const input = `3
  1
  First String
  Second String
  Third String`;
  const lines = input.split("\n");
  const numPushes = parseInt(lines[0]);
  const numPops = parseInt(lines[1]);
  
  const stack = new StringStack();
  
  // Push the strings onto the stack
  for (let i = 2; i < 2 + numPushes; i++) {
    stack.push(lines[i]);
  }
  
  // Pop the strings from the stack
  for (let i = 0; i < numPops; i++) {
    stack.pop();
  }
  
  // Print the stack
  stack.printStack();
  
function solution (a){
    //write your solution here
}
function main(){
    var a=parseInt(readLine());

    var res=solution(a)
    console.log(res)
}


