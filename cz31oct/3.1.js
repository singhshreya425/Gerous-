// Find all the prime numbers in the array
// Tags:	Array
// Given an array of integers, find all the prime numbers in the array.

 

// Input:

//     5

//     2 3 5 7 9

    

//     where:

// First line represents the number of elements in the array.
// Second line represents the elements in the array.
 

// Output:

//     2 3 5 7

function solution(a,arr) {
    let primeNum =[]
    for(let i=0; i<a; i++){
        if(arr[i]==2){
            primeNum.push(arr[i])
        }
        else{
            let flag = false;
            for(let j =2; j<arr[i]; j++){
                if (arr[i]%j==0){
                    flag=true;
                    break;
                }
            }
            if(arr[i]!=1 && flag==false){
                primeNum.push(arr[i])
            }
        }
    }
       return primeNum.join(" ")
   }
   
   
   function main() {
       var a = parseInt(readLine());
       var arr = readLine().split(" ").map(Number)
   
       var res = solution(a,arr);
       console.log(res);
   }
   
   