// Max Pair Sum
// Tags:	Array
// Given an array of distinct integers A, find the largest sum of any pair of elements. 

 

// Input 
//     6 
//     1 2 3 89 4 10 

 

//     Where, 

// First line contains the size of array N. 
// Second line contains array elements.      
 

// Output 
//     99 

 

// Here for the given array, sum of various pairs are 
//     1 + 89 = 90 
//     2 + 89 = 91 
//     3 + 89 = 92 

//     4 + 89 = 93
//     10 + 89 = 99 


// and so on. The largest sum out of these pairs is 99. 
function solution(n,arr) {
    //Write your solution here
      let first,second;
      if(arr[0]>arr[1]){
          first=arr[0]
          second=arr[1]
      }else{
          first=arr[1]
          second=arr[0]
      }
      for(let i=2;i<n;i++){
          if(arr[i]>first){
              second=first
              first=arr[i]
          }else if (arr[i]>second&&arr[i]!=first){
              second=arr[i]
          }
      }
      return first+second
  }
  
  
  function main() {
      var n = parseInt(readLine());
      var arr = readLine().split(" ").map(Number)
  
      var res = solution(n,arr);
      console.log(res);
  }
  
  