// Check for uppercase characters
// Tags:	String
// Given a string S, check whether all characters are in uppercase or not 

 

// Input:

//     HELLO

   

//     where:

// First line represents the input string
 

// Output:

//     Yes

 

// Input:

//     Hello

 

// Output:

//     No

 

// Assumptions:

// Length of the string S can be 0 to 10000
// The string S contains [A...Z, a...z]. 
function solution(a) {
    //Write your solution here
      if(a==a.toUpperCase()){
          return "Yes"
      }
      return "No"
  }
  
  
  function main() {
      var a = String(readLine());
  
      var res = solution(a);
      console.log(res);
  }
  
  