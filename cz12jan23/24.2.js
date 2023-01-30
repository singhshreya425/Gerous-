// Array Balance
// Tags:	ArrayAlgorithm
// Given an unsorted array A, check whether the array is balanced. 

 

// Display 1 if the array is balanced otherwise 0. 

 

// Input
//     5 
//     1  1  1  2  1 

 

//     Where, 

// First line represents the size of an array. 
// Second line represents array elements. 
 
// Output
//     1 

 

// Here for the given array, the sum of first three elements 1 + 1 + 1 is 3 and last two elements 2 + 1 is 3. Hence the array is balanced. 
function solution(a,b) {
    //Write your solution here
      let mid = Math.round(a/2);
      let sum1=0;
      let sum2=0;
      for(let i=0;i<=mid-1;i++){
          sum1+=b[i]
      }
      for(let j=mid;j<a;j++){
          sum2+=b[j]
      }
      if(sum1==sum2)
          return 1
      else
          return 0
  }
  
  
  function main() {
      var a = parseInt(readLine());
      var b = readLine().split(" ").map(Number)
  
      var res = solution(a,b);
      console.log(res);
  }
  
  