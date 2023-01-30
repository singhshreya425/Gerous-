//Check Palindrome number using recursion
// Check Palindrome number using recursion
// Tags:	FunctionRecursion
// Given an integer N, find whether N is a Palindrome using recursion. 

 

// Write a function that accepts an integer N. The function should return 1 if N is a palindrome else 0. 

 

// Input:
//     121 

 

// Output:
//     1

 

// The reverse of 121 is also 121.

 

// Assume that, 

// N is an integer within the range [0 to 1000000000].

function isPalindrome(str){
    if (str[0] === str[str.length - 1] && str.length > 1) {
        isPalindrome(str.substring(1, str.length -1)) 
        return true
      }else{
        return false
      }
    }
    console.log(isPalindrome(121))
//----------------------------------------------------------------------------------------
    function solution(a) {
      //Write your solution here
        let str= a.join('')
        if(str==rec(a)){
            return 1
        }else
            return 0
        
    }
    function rec(a){
        if(a.length==1){
            return a[0]
        }return a.splice(-1)+rec(a)
    }
    
    function main() {
        var a = readLine().split("").map(Number);
    
        var res = solution(a);
        console.log(res);
    }
    
    