// Average of two numbers
// Tags:	Arithmetic Calculations
// Given two integer numbers N1 and N2, find the average of those and store result in double type number R.

 

// The code is already provided to read N1 and N2 integer numbers and to print result value R. 

 

// Hint: use type-casting.

 

// Input

//     5

//     10

 

// Output

//     7.50

 

// Note: Here output is printed up to two decimal places.
function solution(a,b) {
    //Write your solution here
      let result=(a+b)/2;
      return parseFloat(result).toFixed(2)
  }
  
  
  
  
  function main() {
      var a = parseInt(readLine());
      var b = parseInt(readLine());
  
      var res = solution(a,b);
      console.log(res);
  }
  
  