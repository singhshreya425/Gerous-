//REVERSE A NUMBER USING RECURSSION
// Reverse a number using recursion
// FunctionRecursion

// Given a number N as input, write a program to reverse N using recursion.

 

// Write a function that accepts an integer N. The function should return reverse of N using recursion. 

 

// Input:

//     10348

 

//     where:

// First line represents a value of N.
 

// Output:
//     84301
function solution(n) {
  //Write your solution here
    let num ;
    let reversed='';
    let result;
    const recurse=(n)=>{
        for(let i=0;i<n;i++){
            num=n%10;
            reversed+=num
            result=parseInt(n/10);
            recurse(result);
            if(result===0){
                break;
            }
        }
        return reversed
    }
    return recurse(n)
}


function main() {
    var n = parseInt(readLine());

    var res = solution(n);
    console.log(res);
}

//------------------------------------------------------------

function reverseNum(n){
    let num ;
    let reversed = '';
    let result ;
    const recurse=(n)=>{
        for(let i = 0;i<n;i++){
            num=n%10;
            reversed+=num
            result=parseInt(n/10);
            recurse(result);
            if(result===0){
                break;
            }
        }
        return reversed
    };
    return recurse(n);
}
console.log(reverseNum(1234))
//console.log(reverseNum(1234))

//New approach
function palnum(n,str=String(n)){
    const thisDigit=str[str.length-1];
    const recursiveResult=str.length===1?'':palnum(str.slice(0,str.length-1));
    return Number(thisDigit+recursiveResult)
}
console.log(palnum(1234))

//New approach 1
function reverse(number){
    let index=0;
    let reversed='';
    let max =`${number}`.toString().length-1;
    while (index<=max) {
        reversed+=`${number}`.charAt(max-index)
        index++;
    }
    return reversed
}
console.log(reverse(1028))

//New approach 2
const reverseNum = (n) =>
  n < 10
    ? String(n)
    : String (n % 10) + reverseNum (Math .floor (n / 10))


console .log (reverseNum (8675309))

//New approach 3
const reverseStr = (s) =>
  s.length == 0
    ? ''
    : reverseStr (s .slice (1)) + s [0]

const reverseNum = (n) => 
  reverseStr (String(n))
  
console .log (reverseNum (8675309))

//New approach 4
const reverseStrr = (s) =>
  s .split ('') .reverse () .join ('')

const reverseNum = (n) =>
  reverseStrr (String (n))
  
console .log (reverseNum (8675309))