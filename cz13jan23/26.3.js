// Find the element having different frequency than other array elements
// Tags:	Array
// Given an array of N integers where each element in the array occurs the same number of times except one element, find that element.

 

// Input:

//     5

//     1 1 2 2 3

 

//     where:

// First line represents the number of elements in the array.
// Second line represents the elements in the array.
 

// Output:

//     3

 

// Explanation: Elements 1, and 2 occur two times each but 3 occurs only once, hence the output 3.
function solution(arr,a) {
    //Write your solution here
      let obj={};
      for(let j=0;j<a;j++){
          obj[arr[j]]=(obj[arr[j]]||0)+1;
      }
      let key = Object.keys(obj);
      let value = Object.values(obj);
      for(let i=0;i<key.length-2;i++){
          if(value[i]==value[i+1]&&value[i]!=value[i+2]){return key[i+2]}
          else if(value[i]==value[i+2]&&value[i]!=value[i+1]){return key[i+1]}
          else if(value[i+1]==value[i+2]&&value[i]!=value[i+1]){return key [i]}
      }
  }
  
  
  function main() {
      var a = parseInt(readLine());
      var arr=readLine().split(" ").map(Number)
  
      var res = solution(arr,a);
      console.log(res);
  }
  
  