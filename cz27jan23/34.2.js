//Check if max occurring character of one string appears same number of times in other
// Tags:	String
// Given two strings S1 and S2, write a program to find the character which has the maximum occurrence in the first string S1 and check whether that particular character is present in the second string S2 the same number of times as it is present in the first string S1.

// Input:

//     hello world

//     albcllsyaaaaaaaa

//     where:

// First line represents S1
// Second line represents S2
 
// Output:

//     Yes

// Explanation:

// 'l' has highest frequency of 3 in S1 and it appears 3 times in S2. 
function solution(a,b) {
    //Write your solution here
      let map={};
      for(let i=0;i<a.length;i++){
          let value=a[i]
          if(a[i]!=""){
              map[value]=map[value]?map[value]+1:1
          }
      }
      let max=1,res=a[0];
      for(let i in map){
          if(max<map[i]){
              max=map[i]
              res=i
          }
      }let count=0;
      for(let i=0;i<b.length;i++){
          if(b[i]==res){count++}
          if(count==max)return "Yes"
      }
      return "No"
  }
  
  
  function main() {
      var a =readLine();
      var b=readLine()
  
      var res = solution(a,b);
      console.log(res);
  }
  
  



//MAX OCCURING CHARACTER IN A STRING //BY TECHNICAL SUNEJA
//HELLO WORLD
//OUTPUT->1
function getcharstring(str){
const map = {}
str.split("").forEach(elements=>{
    map[elements]=map[elements]?map[elements]+1:1;
    console.log(map[elements
    ])
    
})

}
getcharstring("Hello world")


//if problem like these in which we have to count or find the substring then divide it into bits
