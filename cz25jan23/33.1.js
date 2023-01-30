// Count the unique elements in array
// Tags:	Array
// Given an array of integers A, count the number of unique values in the array. Do not use system function to find the unique number. 

 

// Input
//     10 
//     1 2 3 1 4 2 5 6 7 8 

 

//     where, 

// First line represents the size of an array. 
// Second line represents array elements. 
 

// Output
//     6 
function solution(a,arr) {
    //Write your solution here
      let map ={};
      count=0;
      for(let ele of arr){
          map[ele]=(map[ele]||0)+1
      }
      for(let ele of arr){
          if(map[ele]===1&&ele!=''){
              count ++;
          }
      }
      return count
      
  }
  
  
  function main() {
      var a = parseInt(readLine());
      var arr = readLine().split(" ");
  
      var res = solution(a,arr);
      console.log(res);
  }
  
  

 
//---------------------------------------------------------------------------------
// Here in the given array, unique values are [3 4 5 6 7 8] hence the result is 6.

//Approachh of finding unique elements by TECHNICAL SUNEJA
function uniqueelements (arr){
    
    arr.sort[1,1,2,2,3,4,4,5,6,7,8,9,9,9]
    if (arr.length>0){
let i=0;
for (let j=1;j<arr.length;j++){
    if(arr[i]!==arr[j]){
        i++;
        arr[i]=arr[j]
    }
}
return i+1;//because index always starts from 0
    }else{
        throw new Error("Array is empty");
    }


}
const result =uniqueelements([1,1,2,2,3,4,4,5,6,7,8,9,9,9])
console.log(result)


//solution for the above question
function solution(a,arr) {
    //Write your solution here
      let map ={};
      count=0;
      for(let ele of arr){
          map[ele]=(map[ele]||0)+1
      }
      for(let ele of arr){
          if(map[ele]===1&&ele!=''){
              count ++;
          }
      }
      return count
      
  }
  
  
  function main() {
      var a = parseInt(readLine());
      var arr = readLine().split(" ");
  
      var res = solution(a,arr);
      console.log(res);
  }
  
  