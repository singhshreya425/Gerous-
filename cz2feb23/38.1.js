// Compute the sum of digits in a given integer
// Tags:	Do While LoopFor LoopLoopWhile Loop
// Given an integer N, Compute the sum of digits in N using a loop.

 

// Input:
//     12345

 

//     where:

// First line represents value of N.
 

// Output:
//     15

 

// Assumptions:

// N can be in the range 1 to 100000.
function solution(a) {
    //Write your solution here
      var sum=0;
      while(a!==0){
          sum =sum+a%10
      a=parseInt(a/10)
      }
      return sum
  }
  
  
  function main() {
      var a = parseInt(readLine());
  
      var res = solution(a);
      console.log(res);
  }
  
  