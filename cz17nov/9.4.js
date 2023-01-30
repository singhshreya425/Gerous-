// Display all the leap years in a specific range
// Tags:	Loop
// Given a year N, display all the leap years from 1 to N.

 

// Input:
//     50

 

//     where:

// First line represents the value of N.
 

// Output:
//     4 8 12 16 20 24 28 32 36 40 44 48

 

// Assumptions:

// N can be in the range 0 to 3000.
function solution(N) {
    const result = [];
      for(let i =0; i<N; i++){
          if(i%4==0 && i%100!==0)
              result.push(i)
      }
      return result
  }
  
  
  function main() {
      var N = parseInt(readLine());
  
      var res = solution(N);
      console.log(...res);
  }
  
  