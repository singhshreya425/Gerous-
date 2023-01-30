// Find product of digits of number using recursion
// FunctionRecursion

// Given an integer N, find the product of digits of N using recursion. 

// Write a function that accepts an integer N. The function should return the product of digits of N using recursion. 

// Input: 
//     1231 

//     where:

// First line represents a value of N.

// Output: 
//     6 

// Explanation: For 1231, the product of its digits = 1*2*3*1=6 

//first make array element [1,1,2,3]
// function solution(a) {
//     //Write your solution here
//       if(a.length<=1){
//           return a
//       }
//       return a[0]*solution(a.slice(1))
//   }
  
  
//   function main() {
//       var a = readLine().split("").map(Number);
  
//       var res = solution(a);
//       console.log(res);
//   }
//product of digit of number using recurssion
let arr=[1,2,3,1]
function solution(arr){
    //arr.sort()
    if(arr.length<=1){
        return 1
    }
    return arr[0]*(arr.splice(1))
}
// function main(){
//     var res= solution(arr)
//     console.log(res)
// }
var res=solution(arr)
console.log(arr)

function solution(a) {
    //Write your solution here
      if(a.length<=1){
          return a
      }
      return a[0]*solution(a.slice(1))
  }
  
  
  function main() {
      var a = readLine().split("").map(Number);
  
      var res = solution(a);
      console.log(res);
  }
  
  

