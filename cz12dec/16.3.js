// Check for perfect square number
// Tags:	Function
// Given a number N as input, find whether N is a perfect square or not using a function.

 

// Write a function that accepts an integer N. The function should return 1 if N is perfect square otherwise 0.

 

// Input:

//     64    

 

//     where:

// First line represents a value of N
 

// Output:
//     1

 

// Explanation: 42=64
function solution(a) {
    //Write your solution here
      let result = (a**0.5)
      if(Number.isInteger(result))return"1";
      else return "0"
  }
  
  
  function main() {
      var a = parseInt(readLine());
  
      var res = solution(a);
      console.log(res);
  }
  
  