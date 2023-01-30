// Check if string is Palindrome
// Tags:	String
// Given a string S, check whether a string S is Palindrome not. 

 

// Display 1 if string is palindrome else 0. 

 

// Input
//     level 

 

// Output
//     1 

 

// Assume that, 

// The length of string S is within the range [0 to 10000].
function solution(a) {
    //Write your solution here
      let dad="";
      for(let i=a.length-1;i>=0;i--)dad+=a[i];
      if(dad==a)return "1";
      else return "0"
  }
  
  
  function main() {
      var a =(readLine());
  
      var res = solution(a);
      console.log(res);
  }
  
  