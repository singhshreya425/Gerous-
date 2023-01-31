// Replace each element by difference of array size and frequency of that element
// Tags:	Array
// Given an array of integers, write a program to replace every element by the difference of the total size of the array and its frequency.

 

// Input:

//     7

//     1 2 5 2 2 5 4

 

//     where:

// First line represents the number of elements in the array.
// Second line represents elements in the array.
 

// Output:

//     6 4 5 4 4 5 6

 

// Explanation: Size of the array is 7.

//                        The frequency of 1 is 1. So replace it by 7-1 = 6

//                        The frequency of 2 is 3. So replace it by 7-3 = 4

//                        The frequency of 5 is 2. So replace it by 7-2 = 5

//                        The frequency of 4 is 1. So replace it by 7-1 = 6, hence the output is: 6 4 5 4 4 5 6.

function solution(a,arr) {
    //Write your solution here
      let obj={};
      for(let ele of arr){
          obj[ele]=(obj[ele]||0)+1;
      }
      for(let i=0;i<a;i++){
          let temp=a-obj[arr[i]]
          arr[i]=temp;
      }
      return arr.join(" ")
  }
  
  
  function main() {
      var a = parseInt(readLine());
      var arr= readLine().split(" ").map(Number)
  
      var res = solution(a,arr);
      console.log(res);
  }
  
  