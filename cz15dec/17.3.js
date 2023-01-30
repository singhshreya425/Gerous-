// Check if number is multiple of 5
// Tags:	Mathematics
// Given an integer N, determine whether the given N is a multiple of 5.

 

// Write a function
//     def solution(N):

 

// which accepts an integer N, the function should return 1 if N is multiple of 5 else return 0.

 

// Input
//     15

 

// Output
//     1


// Assume that, 

// The value of N is within the range from [-10000 to 10000].
function solution(a) {
    //Write your solution here
      if(a%5==0)return "1";
      else return "0";
  }
  
  
  function main() {
      var a = parseInt(readLine());
  
      var res = solution(a);
      console.log(res);
  }
  
  