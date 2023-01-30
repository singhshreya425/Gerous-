// Check whether a number is divisible by 5 and 11 or not
// Tags:	Numberif-else
// Given an integer N as input, check whether N is divisible by 5 and 11 or not. Display "Yes" if N is divisible by 5 and 11, otherwise "No".

 

// Input:

//     55

 

//     where:

// First line represents the integer N.
 

// Output:

//     Yes

 

// Explanation:

// 55 is divisible by both 5 and 11, hence the output "Yes".
function solution(a) {
    //Write your solution here
      if(a%5==0 && a%11==0) return "Yes"
      else return "No"
  }
  
  
  function main() {
      var a = parseInt(readLine());
  
      var res = solution(a);
      console.log(res);
  }
  
  