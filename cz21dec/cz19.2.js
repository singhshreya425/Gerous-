// Calculate Profit or loss percentage
// Tags:	Arithmetic Calculations
// Given cost price and sales price of an item, calculate and print profit or loss percentage.

 

// Write a function:
//     void solution(float C, float S)

 

// that accepts a cost price C and sales price S of type float. The function should print the calculated profit or loss percentage. 

 

// Input
//     100
//     120

 

//     where,

// First line represents cost price.
// Second line represents sale price.
 

// Output
//     Profit 20.00%

 

//     where

// If Profit, display text like “Profit <PROFIT-PERCENTAGE>%”
// If Loss, display text like “Loss <LOSS-PERCENTAGE>%”
// If no Profit or Loss, display text like “No Profit/Loss”
// Display rounded amount up to 2 decimal places. 
 

// Assume that,

// Cost and sale prices are float within the range [1 to 3.4E+38].
function solution(a,b) {
    //Write your solution here
      if(a==b)return "No Profit/Loss"
      let profit = ((b-a)/a)*100
      if(profit>0){
          return("Profit"+" "+parseFloat(profit).toFixed(2)+"%")
      }else return "Loss"+" "+parseFloat(profit*(-1)).toFixed(2)+"%"
  }
  
  
  function main() {
      var a = parseInt(readLine());
      let b = parseInt(readLine())
  
      var res = solution(a,b);
      console.log(res);
  }
  
  