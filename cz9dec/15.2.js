// Add two numbers using call by reference
// Pointer

// Given two numbers as input, add the two numbers using call by reference.

 

// Input:

//     3

//     4

    

//     where:

// First line represents the first number.
// Second line represents the second number.
 

// Output:

//     7

function solution(a,b) {
    //Write your solution here
      let R=a+b
      return R
  }
  
  
  function main() {
      var a = parseInt(readLine());
      var b = parseInt(readLine());
  
      var res = solution(a,b);
      console.log(res);
  }
  
  