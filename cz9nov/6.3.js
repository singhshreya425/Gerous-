// Count the pairs in an array that hold A[i] + A[j] = i + j
// Tags:	Array
// Given an array A of N integers, count all the pairs (A[i], A[j]) such that i + j = A[i] + A[j] for all 0 ≤ i < j < N.
 

// Input:

//     10

//     8 4 2 1 5 4 2 1 2 3

 

//     where:

// First line represents the number of elements in the array.
// Second line represents the elements of the array.
 

// Output:

//     1

 

// Explanation: Only possible pair is (A[4], A[5]) i.e. (5, 4) where i + j = A[i] + A[j] i.e. 4 + 5 = 5 + 4, hence the output 1.

 

// Assumptions:

// Array element can be in the range -1000 to 1000.
function solution(a,arr) {
    let count = 0;
       for(let i=0; i<a; i++){
           let j=i+1;
           if(i==a-1) j=-1
           if(j!=-1){
               if(arr[i]+arr[j]==i+j)
                   count++;
           }
           else{
               if(arr[i]==i+j)
                   count++
           }
       }
       return count;
   }
   
   
   function main() {
       var a = parseInt(readLine());
       var arr = readLine().split(" ").map(Number)
   
       var res = solution(a,arr);
       console.log(res);
   }
   
   