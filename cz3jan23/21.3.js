// Check whether 2 strings are same or not
// Tags:	Stringif-else
// Given two strings as input, check whether they are equal or not. Display "Yes" if they are equal, otherwise "No".

 

// Input:

//     google

//     google is search engine

 

//     where:

// First line represents the first string.
// Second line represents the second string.
 

// Output:

//     No

 

// Explanation:

// Here both strings are not equal, hence the output "No".
function solution(a,b) {
    //Write your solution here
      if(a==b){
          return "Yes"
      }else return "No"
  }
  
  
  function main() {
      var a = readLine();
      var b = readLine();
  
      var res = solution(a,b);
      console.log(res);
  }
  
  