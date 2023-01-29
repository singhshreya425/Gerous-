// Find if the array has an element whose value is half of the sum of array
// Tags:	Array
// Given a sorted array (with unique elements), find whether there exists an element(say X) which is exactly half of the sum of all the elements of the array including X.

 

// Input:

//     3

//     1 2 3

    

//     where:

// First line represents the number of elements in the array.
// Second line represents the elements in the array.
 

// Output:

//     Yes

    

// Explanation: Sum of all the elements of the array is 1+2+3 = 6.

//                      For element 3, 3*2=6, hence the output "Yes".
function solution(a,arr) {
    let sum = 0;
      for(let i=0; i<a; i++){
          sum+=arr[i]
      }
      if(arr.indexOf(sum/2)!== -1) return "Yes"
      else return "No"
  }
  
  
  function main() {
      var a = parseInt(readLine());
      var arr = readLine().split(" ").map(Number)
  
      var res = solution(a,arr);
      console.log(res);
  }
  
  