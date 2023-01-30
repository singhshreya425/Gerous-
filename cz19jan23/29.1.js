// Find sum of N numbers using recursion
// Given an integer N, calculate the sum of 1 to N integers using recursion.

// Write a function:
//     def solution(N):

// that accepts an integer N, the function should return the sum of 1 to N integers.

// Input
//     5

// Output
//     15

// here N=5 then sum= 1+2+3+4+5=15
    
// Assume that, 

// N is an integer within the range [1 to 10000].
//TESTCASES
// Input
// 5
// Expected Output 
// 15

// Input
// 100
// Expected Output 
// 5050

// Input
// 19
// Expected Output 
// 190

// Input
// 1
// Expected Output 
// 1

// function firstnnaturalnumber(N){
    
//     if(N==1){
//     return N(1)
//  }else{
//     return(N+firstnnaturalnumber(N-1))
//  }
// }

// function solution (N){
//     if(N>0){
//         return N+solution(N-1)
//     }else{
//         return N
//     }
// }
// var res=solution(3)
// console.log(res)

function  solution(N) {
    //Write your solution here
     if(N>0){
         return N + solution(N-1)
     }else{
         return N;
     }
  }
  
  
  function main() {
     
      var N = parseInt(readLine());
  
      var res = solution(N);
      console.log(res);
  }
  
  