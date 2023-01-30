// Calculate difference between two time
// Tags: Structure
// Given two time data(in hour, minute and second format) an input, create a Time structure to store hour, minute and second values.Calculate the difference between two time.

 

// Perform the following operations

// Store value of hour, minute and second in the Time structure.
// Calcuate the difference of Time.


//     Input:

// 12 34 55

// 8 12 15



// where:

// First line represents value of time in hours, minute and second format.
// Second line represents value of anothre time in hours, minute and second format.




//     Output:

// 12: 34: 55 - 8: 12: 15 = 4: 22: 40
function solution(a,b) {
    let t1=a.split(" ")
    let t2 = b.split(" ").map(Number)
    t1=t1.filter(function(str){
        return /\S/.test(str)
    })
    let t1sec=parseInt(t1[0])*3600+parseInt(t1[1])*60+parseInt(t1[2])
    let t2sec=parseInt(t2[0])*3600+parseInt(t2[1])*60+parseInt(t2[2])
    let diff =t1sec-t2sec
    let hour = Math.floor(diff/3600)
    let min=Math.floor((diff-(hour*3600))/60)
    let sec=diff-hour*3600-min*60
    let maindiff=hour+":"+min+":"+sec
    
    let nonzero=function(str){
        return Number(str).toString()
    }
    let finalt1=nonzero(t1[0])+":"+nonzero(t1[1])+":"+nonzero(t1[2])
    let finalt2=nonzero(t2[0])+":"+nonzero(t2[1])+":"+nonzero(t2[2])
    return finalt1+" "+"-"+" "+finalt2+" "+"="+" "+maindiff
}


function main() {
    var a = readLine();
let b= readLine()
    var res = solution(a,b);
    console.log(res);
}






// function solution(a,b) {
//     let t1=a.split(" ")
//     let t2 = b.split(" ").map(Number)
//     t1=t1.filter(function(str){
//         return /\S/.test(str)
//     })
//     let t1sec=parseInt(t1[0])*3600+parseInt(t1[1])*60+parseInt(t1[2])
//     let t2sec=parseInt(t2[0])*3600+parseInt(t2[1])*60+parseInt(t2[2])
//     let diff =t1sec-t2sec
//     let hour = Math.floor(diff/3600)
//     let min=Math.floor((diff-(hour*3600))/60)
//     let sec=diff-hour*3600-min*60
//     let maindiff=hour+":"+min+":"+sec
    
//     let nonzero=function(str){
//         return Number(str).toString()
//     }
//     let finalt1=nonzero(t1[0])+":"+nonzero(t1[1])+":"+nonzero(t1[2])
//     let finalt2=nonzero(t2[0])+":"+nonzero(t2[1])+":"+nonzero(t2[2])
//     return finalt1+" "+"-"+" "+finalt2+" "+"="+" "+maindiff
// }


// function main() {
//     var a = readLine();
// let b= readLine()
//     var res = solution(a,b);
//     console.log(res);
// }


//Math.floor and Math.ceil
// var a = Math.floor(2.35)
// console.log(a)
// var b = Math.ceil(2.35)
// console.log(b)
// var c = Math.floor(-2.35)
// console.log(c)
// var d = Math.floor(0.50)
// console.log(d)
// var e = Math.floor(-0.80)
// console.log(e)
//Math.round(x) and Math.trunc(x)
// var a = Math.round(0.60)
// console.log(a)
// var b = Math.round(-0.60)
// console.log(b)
// var c = Math.trunc(0.60)
// console.log(c)
// var d = Math.trunc(-0.60)
// console.log(d)
// var a = Math.min(-10,-2)
// console.log(a)
// var b = Math.max(10,2)
// console.log(b)
// var a = Math.sqrt(2)
// console.log(a)
// var b = Math.cbrt(2)
// console.log(b)
// var a = Math.pow(1,2)
// console.log(a)
// var b = Math.pow(2,2)
// console.log(b)
//  var c = Math.random(2,1)
//  console.log(c)
//  var d = Math.abs(3)
//  console.log(d)
//  var e = Math.PI
//  console.log(e)


//TypeOf()
// var a = 13;
// console.log(typeof(a) + "<br>")
// console.log(typeof("Hello")+"<br>")

// //object literal

// var fees = {}
// // fees['Rahul']=100
// // fees['Rohan']=200
// // fees['sumit']=300
// //console.log(fees['Rahul'])
// fees.Rahul=100;
// fees.Rohan=200;
// fees.sumit=300
// console.log(fees.Rohan)

//defreed disks
// var defreed = $.Defereed();
// $.ajax({
//     url:'/data.json',
//     success:function(data){
//         defreed.resolve(data);
//     },
//     error:function (xhr,status,error){
//         defreed.reject(error);
//     }
// });
// defreed.done(function(data){
//     console.log('Data loaded:',data);
// });
// defreed.fail(function(error){
//     console.error('Error loading data:',error)
// });


//<script>
	// Javascript program to check if a given
	// number is Twisted Prime or not
	
	// function reverse(n)
	// {
	// 	let rev = 0, r;
	// 	while (n > 0)
	// 	{
	// 		r = n % 10;
	// 		rev = rev * 10 + r;
	// 		n = parseInt(n / 10, 10);
	// 	}
	// 	return rev;
	// }
	
	// function isPrime(n)
	// {
	// 	// Corner cases
	// 	if (n <= 1)
	// 		return false;
	// 	if (n <= 3)
	// 		return true;

	// 	// This is checked so that
	// 	// we can skip middle five
	// 	// numbers in below loop
	// 	if (n % 2 == 0 || n % 3 == 0)
	// 		return false;

	// 	for (let i = 5; i * i <= n; i = i + 6)
	// 		if (n % i == 0 || n % (i + 2) == 0)
	// 			return false;

	// 	return true;
	// }

	// // function to check
	// // Twisted Prime Number
	// function checkTwistedPrime(n)
	// {
	// 	if (isPrime(n) == false)
	// 		return false;

	// 	return isPrime(reverse(n));
	// }
	
	// // Printing Twisted Prime
	// // Numbers upto 200
	// console.log("First few Twisted Prime Numbers are :- " + "</br>");

	// for (let i = 2; i <= 200; i++)
	// 	if (checkTwistedPrime(i))
	// 		console.log(i + " ");
	
//</script>


