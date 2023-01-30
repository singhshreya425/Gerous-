// 1's complement
// Tags:	Binary NumberBitwise-Operator
// Given an integer N as input, find 1's complement of N.

 

// Input:

//     5

 

//     where:

// First line represents the value of N.
 

// Output:

//     2

 

// Assumption:

// Value of N can be in the range 0 to 10000.
function solution(a) {
    var comp = Math.pow(2,a.toString(2).length)-1
    return comp-a
  }
  
  
  function main() {
      var a = parseInt(readLine());
  
      var res = solution(a);
      console.log(res);
  }
  
  