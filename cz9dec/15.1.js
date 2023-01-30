//ADD TWO NUMBERS
// Given two integers N1 and N2, find their sum and store in R.
// The code to read N1 and N2 as well as to print R has already been provided.
//Input
// 10
// 20
// Output
// 30
// Assume that,The values of N1 and N2 range from[-10000 to 10000].
//SOLUTION=>>>>>
// let a= 4;
// let b= 6;
// let c= a+b;
// // console.log(c)
// console.log("the sum of "+a+" the sum of "+b+"is:"+c)//string concatenation

function solution(a,b) {
    //Write your solution here
      let R=a+b
      return R
      
  }
  
  
  function main() {
      var a = parseInt(readLine());
      var b = parseInt(readLine());
  
      var res = solution(a,b);
      console.log(res);
  }
  
  