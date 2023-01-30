// Check whether division of two numbers is integer or float
// Tags:	if-else
// Given two integers as an input, check whether their division comes out to be integer or float. For this question any number with the part after the decimal point as 0 is not considered as a float number.

// e.g. 2.0000 is an integer as it has the exact value as 2, but 2.41 is a float.

 

// Input:

//     45

//     4

    

//     where:

// First line represents the first number.
// Second line represents the second number.
 

// Output:

//     float

 

// Explanation:

// The division 45/4 results in 11.25 which is a float number, hence the output float.
function solution(a,b) {
    //Write your solution here
      let result = a/b;
      let d=Number.isInteger(result)
      if(d==true)return "integer";
      else return "float";
  }
  
  
  function main() {
      var a = parseInt(readLine());
      var b = parseInt(readLine()); 
  
      var res = solution(a,b);
      console.log(res);
  }
  
  