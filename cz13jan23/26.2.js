// Find the frequency of digits in a number
// Tags:	Do While LoopFor LoopLoopWhile Loop
// Given a number N, find the frequency of digits in N using loop.

 

// Input:
//     12553451

 

//     where:

// First line represents value of N.
 

// Output:
//     1 2

//     2 1 

//     3 1

//     4 1

//     5 3
function solution(a) {
    //Write your solution here
      let obj={};
      for(let i of a){
          if(obj.hasOwnProperty(i)){
              obj[i]++
          }else{obj[i]=1};
      }
      let arr = [];
      for(let i in obj){
          if(obj.hasOwnProperty.call(obj,i)){
              arr.push(i+' '+obj[i]);
          }
      }
      return arr.join('\n');
  }
  
  
  function main() {
      var a = readLine().split('').map(Number);
  
      var res = solution(a);
      console.log(res);
  }
  
  