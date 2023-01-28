// Rotate an array to right side
// Tags:	Array
// Given an array of integers, write a program to rotate the array to the right side K times.

 

// Input:

//     10

//     10 20 30 40 50 60 70 80 90 100

//     3

    

//     where:

// First line represents the number of elements in the array.
// Second line represents the elements in the array.
// Third line represents the value of K( Number of times to rotate the array to right side )
 

// Output:

//     80 90 100 10 20 30 40 50 60 70

 

// Explanation: Output displays the array after rotating K=3 times to the right side

function solution(arr, k) {
    //Write your solution here
      for (let i=0; i<k; i++){
          arr.unshift(arr.pop())
      }
      return arr.join(" ");
  }
  
  
  function main() {
      var a = parseInt(readLine());
      var arr =readLine().split(" ").map(Number)
      var k=parseInt(readLine());
  
      var res = solution(arr, k);
      console.log(res);
  }
  
  