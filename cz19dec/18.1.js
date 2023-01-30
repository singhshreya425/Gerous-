// Add two numbers using pointers
// Tags:	Pointer
// Given two integers as input, add them using pointers.

 

// Input:

//     23

//     12

    

//     where:

// First line represents the first integer.
// Second line represents the second integer.
 

// Output:

//     35
function solution(a,b) {
    //Write your solution here
      return a+b
  }
  
  
  function main() {
      var a = parseInt(readLine());
      var b = parseInt(readLine());
  
      var res = solution(a,b);
      console.log(res);
  }
  
  