// Check whether a given integer is power of 2
// Tags:	Loop
// Given a number N, find whether it is a power of 2 or not.

 

// Input:

//     16

 

//     where:

// First line represents number N.
 

// Output:

//     Yes

 

// Explanation: 24=16.

 

// Input:

//     10

 

// Output:

//     No

 

// Explanation: 10 is not a power of 2.
function solution(a) {
    //Write your solution here
      while(a>1){
          if(a%2!==0)return "No"
          a=a/2
      }
      return "Yes" 
  }
  
  
  function main() {
      var a = parseInt(readLine());
  
      var res = solution(a);
      console.log(res);
  }
  
  