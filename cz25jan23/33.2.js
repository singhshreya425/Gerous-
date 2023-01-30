// Find pair in an array with given sum
// Tags:	Array
// Given an array of integers A and an integer S, determines whether there exist two elements in the array whose sum is exactly equal to S or not. 

 

// Display 1 a pair is found in an array with matching sum S else 0. 

 

// Input 
//     6
//     5 
//     1 -2 3 8 7

 

//     Where, 

// First line represents integer S. 
// Second line represents the size of an array. 
// Third line represents array elements separated by single space. 
 

// Output 
//     1 

 

// For the given array, A[1] + A[3] = -2 + 8 = 6 which is equal to the given number S=6.

function solution(s,n,arr) {
    //Write your solution here
      if(n==0||n==1)return 0
      let map=new Map();
      for(let el of arr){
          if(!map.has(el)){
              map.set(el,1)
          }else{
              map.set(el,map.get(el)+1)
          }
      }
      for(let el of arr){
          let inv =s-el
          if(map.has(inv)){
              return 1
          }
      }
      return 0
  }
  
  
  function main() {
      var s = parseInt(readLine());
      var n = parseInt(readLine());
      var arr= readLine().split(" ").map(Number)
  
      var res = solution(s,n,arr);
      console.log(res);
  }
  
//----------------------------------------------------------  

function sumpair(arr,n,K){
    let m={}
   // let map = new Map()
    let ans = 0;
    for(let i =0; i<n.length;i++){
        let b=K-arr[i]
        if(m[b]){
            ans+=m[b];
        }
        m[arr[i]]++;
    }
    return ans

}