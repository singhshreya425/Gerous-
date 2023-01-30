// Check number is twisted prime or not
// Tags:	Arithmetic CalculationsAlgebra
// Given an 3 digit integer number, check if the 3 digit number is twisted prime or not.
// Write a function:
//     int solution(int N)
// that accepts an 3 digit integer N. The function should return 1 if the given integer is a twisted prime number else 0.
// Input
//     167
// Output
//     1
// Assume that,
// N is an integer within the range [100 to 999].
//solution->

function solution(a) {
    //Write your solution here
      let b = String(a).split("").reverse().join("")
      let sum1=0
      let check1 = false
      for(let i=2;i<a;i++){
          if(a%i==0){sum1+=1}
      }
      if(sum1==0){check1=true}
      let sum2=0;
      let check2=false
      for(let i=2;i<b;i++){
          if(b%i==0){sum2+=1}
      }
      if(sum2==0){check2=true}
      return (check1 && check2)?1:0
  }
  
  
  function main() {
      var a = parseInt(readLine());
  
      var res = solution(a);
      console.log(res);
  }


