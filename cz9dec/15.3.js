// Area of circle
// Tags:	Arithmetic CalculationsFunction
// Given an integer radius R, find the area of a circle.

 

// Area of circle = pi * radius * radius.
//     Where, pi is mathematical constant whose value is 3.14

 

// Input:
//     4

 

//     where:

// First line represents input radius R.
 

// Output:
//     50.24

 

// Area of circle = 3.14 * 4 * 4 = 50.24

function solution(a) {
    //Write your solution here
      let pi=3.14
      let b = a*a
      let d = pi*b
      let c= parseFloat(d).toFixed(2)
      return c
  }
  
  
  function main() {
      var a = parseInt(readLine());
  
      var res = solution(a);
      console.log(res);
  }
  
  