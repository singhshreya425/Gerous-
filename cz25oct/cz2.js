// Largest gap in an array
// Tags:	Array
// Given an array of N integers, find the largest gap between any two elements of the array.

// In simple words, find max(|Ai-Aj|) where 0 ≤ i < N and 0 ≤ j < N.

 

// Input:

//     4

//     3 6 7 10 

    

//     where:

// First line represents the number of elements in the array.
// Second line represents the elements in the array.
 

// Output:

//     7

 

// Explanation: Here, the largest gap can be found between 3 and 10 which is 10 - 3 = 7, hence the output 7.

 

// Assumptions:

// Array element can be in the range -1000 to 1000.

function solution(a,arr) {
    let max = arr[0];
      let min = arr[0];
      for(let i=0; i<arr.length; i++){
          if (arr[i]>max)
              max = arr[i]
          if (arr[i]<min)
              min =arr[i]
      }
      return max-min
  }
  
  
  function main() {
      var a = parseInt(readLine());
      var arr = readLine().split(" ").map(Number)
  
      var res = solution(a,arr);
      console.log(res);
  }
  
  