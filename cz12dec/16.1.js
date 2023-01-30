// Calculate sum of squares for first N even numbers
// Tags:	Mathematics
// Given an integer N, Calculate the sum of squares for first N even numbers.

 

// Write a function
//     def solution(N):


// that accepts an integer N. The function should return the sum of squares of first N even numbers.

 

// Input
//     4

 

// Output
//     120

 

// here N=5 then sum= 2^2 + 4^2 + 6^2 + 8^2 = 120.
    

// Assume that, 

// N is an integer within the range [1 to 10000].
function solution(a) {
    //Write your solution here
      sum=0
      for(let i=1;i<=a;i++){
          sum+=(2*i)*(2*i)
      }
      return sum
  }
  
  
  function main() {
      var a = parseInt(readLine());
  
      var res = solution(a);
      console.log(res);
  }
  
  