// Sort the 1st half of an array in ascending and 2nd half in descending order respectively
// Tags:	ArraySorting
// Given an array of N integers, sort the first half of the array in ascending order and second half in descending order.

// Note: If N is odd. then the first half will have one element less than the second half.

 

// Input:

//     9

//     5 2 4 7 9 3 1 6 8

 

//     where:

// First line represents the number of elements in the array.
// Second line represents the elements in the array.
 

// Output:

//     1 2 3 4 9 8 7 6 5

 

// Explanation: As we can see the array is sorted in ascending order till halfway, here till index 3 (till element 4). After that from index 4(from element 9), the array is in descending order.

//  function sortarray(arr,n){
//     let mid=Math.ceil(n/2)
//     let firsthalf=
//  }
// function sortArray(arr, n) {
//     let mid = Math.ceil(n / 2);
//     let firstHalf = arr.slice(0, mid);
//     let secondHalf = arr.slice(mid);
   
  
//     firstHalf.sort((a, b) => a - b);
//     secondHalf.sort((a, b) => b - a);
  
//     for (let i = 0; i < mid; i++) {
//       arr[i] = firstHalf[i];
//       arr[n - 1 - i + mid - firstHalf.length] = secondHalf[i];
//     }
  
//     return arr;
//   }
  
//   let n = 9;
//   let arr = [5, 2, 4, 7, 9, 3, 1, 6, 8];
  
//   console.log(sortArray(arr, n));
// function sortArray(arr, n) {
//     let mid = Math.ceil(n / 2);
//     let firstHalf = arr.slice(0, mid);
//     let secondHalf = arr.slice(mid);
  
//     firstHalf.sort((a, b) => a - b);
//     secondHalf.sort((a, b) => b - a);
  
//     for (let i = 0; i < mid; i++) {
//       arr[i] = firstHalf[i];
//       arr[n - 1 - i + mid - firstHalf.length] = secondHalf[i];
//     }
  
//     return arr;
//   }
  
//   let n = 9;
//   let arr = [5, 2, 4, 7, 9, 3, 1, 6, 8];
  
//   console.log(sortArray(arr, n));

function solution(a,arr) {
  //Write your solution here
    var n=arr.length;
    var start=0;
    var end=n-1;
    var mid=Math.floor((start+end)/2)
    var f;
    var l;
    arr.sort (function (a,b){return a-b})
    if(a%2==0){
        f=arr.slice(start,mid+1)
        l=arr.slice(mid+1,n)
    }else{
        f=arr.slice(start,mid)
        l=arr.slice(mid,n)
    }
    l.sort(function(a,b){return b-a})
    let res=f.concat(l)
    return res.join(" ")
}


function main() {
    var a = parseInt(readLine());
    var arr=readLine().split(" ").map(Number)

    var res = solution(a,arr);
    console.log(res);
}


  
  
  
  