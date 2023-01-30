// Solve the Sum array puzzle and print the Sum array
// Tags:	Array
// Given an array A of N integers, construct a Sum Array S (of same size) such that S[i] is equal to the sum of all the elements of A except A[i].

 

// Input:

//     5

//     3 6 4 8 9

 

//     where:

// First line represents the number of elements in the array
// Second line represents elements in the array.
 

// Output:

//     27 24 26 22 21

 

// Explanation: Output displays the resultant array S in which for each element in the original array A we have displayed it with the sum of all the elements except itself.

//                        Example: for element 3 we write 6+4+8+9 = 27 and so on.
function solution(a,arr) {
    let s, sum=0, n=[]
    for (let s=0; s<arr.length; s++){
        sum+=arr[s]
    }
       for(let a=0; a<arr.length; a++){
           arr[a]=sum-arr[a]
           n.push(arr[a])
       }
       return n.join(" ")
   }
   
   
   function main() {
       var a = parseInt(readLine());
       var arr=readLine().split(" ").map(Number)
   
       var res = solution(a,arr);
       console.log(res);
   }
   
   