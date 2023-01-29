// Replace every element of the array with the greatest element on its left side
// Tags:	Array
// Given an array of integers, replace every element with the greatest element on its left side.
// Note: Replace the first element with -1 as it has no element in its left.

 

// Input:

//     6

//     4 5 2 1 7 6

    

//     where:

// First line represents the number of elements in the array.
// Second line represents the elements in the array.
 

// Output:

//     -1 4 5 5 5 7

 

// Explanation: Since 4 has no element in its left, so replace it by -1. For 5, 4 is the greatest element in its left. For 2, 5 is the greatest element in its left. For 1, 5 is the greatest element in its left. For 7, 5 is the greatest element in its left. For 6, 7 is the greatest element in its left.
function solution(a,arr) {
    let count = 0;
      let max = 0;
      let array1 = []
      for (let i=0; i<a; i++){
          if(i==0){
              count = arr[0];
              array1[i] =-1
          }
           else{
               max = Math.max(count, max);
               array1[i] = max;
               count = arr[i];
           }
      
      }
  return array1.join(" ")
  }
  
  function main() {
      var a = parseInt(readLine());
      var arr = readLine().split(" ").map(Number)
      
      var res = solution(a,arr);
      console.log(res);
  }
  
  