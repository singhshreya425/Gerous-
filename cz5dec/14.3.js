// Abstract class Reservation
// Tags:	Abstract MethodFunction OverridingAbstract Class
// Implement an abstract class Reservation and two subclasses ReserveTrain and ReserveBus

 

// Define a Reservation abstract class with following characteristics

// Method reserve which takes integer value seats and typeOfSeat as parameters and returns boolean type.
// Method getAvailableSeats which return a number of seat remaining. 
 

// Define a ReserveBus with following characteristics

// Extends the Reservation class.
// Data member totalSeats as an integer.
// Parameterized constructor(int totalSeats) to initialize data member.
// Method reserve to reserve the given number of seats and return true and if the required number of seats are not available return false. (typeOfSeat parameter has no importance in this method)
 

// Define a ReserveTrain with following characteristics

// Extends the Reservation class.
// Data members upperBirthTotalSeats, middleBirthTotalSeats and lowerBirthTotalSeats as an integer.
// Parameterized constructor(int lowerBirthTotalSeats, int  middleBirthTotalSeats, int upperBirthTotalSeats) to initialize data members.
// Method reserve to reserve the given number of seats for given type of seat and return true and if the required number of seats are not available return false.
 

// Input

//     1
//     10
//     3
//     2 3 7

 

//     where,

// First line represent type of reservation (1 for ReserveBus and 2 for ReserveTrain)
// Second line represents the total seats for bus.
// Third line represents the total number booking
// Forth line represents the number of seats to be reserved.
 

// Output

//     Booked-2

//     Booked-3
//     SEATS NOT AVAILABLE FOR BUS-7

//     Remaining Seats-5

 

// Another example,

 

// Input

//     2
//     10 12 40
//     3
//     1 7 2 15 3 1

 

//     where,

// First line represent type of reservation (1 for ReserveBus and 2 for ReserveTrain)
// Second line represents the total seats for upperBirthTotalSeats, middleBirthTotalSeats and lowerBirthTotalSeats respectively in the train.
// Third line represents the total number booking.
// Forth line represents the number of seats to be reserved (combination of typeOfSeat and seats)
 

// Note: Type is 1 for lower berth, type is 2 for middle birth and type is 3 for upper birth.

 

// Output

//     Booked-7
//     SEATS NOT AVAILABLE FOR TRAIN-15
//     Booked-1
//     Remaining Seats-54

// class Reservation {
//     constructor() { }
//     reserve(seats, typeOfSeat) { }
//     getAvailableSeats() { }
// }

// class ReserveBus extends Reservation {
//     constructor(totalSeats) {
//         super();
//         this.totalSeats = totalSeats;
//         this.reservedSeats = 0;
//     }
//     reserve(seats) {
//         if (this.reservedSeats + seats > this.totalSeats) {
//             return false;
//         }
//         this.reservedSeats += seats;
//         return true;
//     }
//     getAvailableSeats() {
//         return this.totalSeats - this.reservedSeats;
//     }
// }

// class ReserveTrain extends Reservation {
//     constructor(lowerBirthTotalSeats, middleBirthTotalSeats, upperBirthTotalSeats) {
//         super();
//         this.lowerBirthTotalSeats = lowerBirthTotalSeats;
//         this.middleBirthTotalSeats = middleBirthTotalSeats;
//         this.upperBirthTotalSeats = upperBirthTotalSeats;
//         this.reservedLowerSeats = 0;
//         this.reservedMiddleSeats = 0;
//         this.reservedUpperSeats = 0;
//     }
//     reserve(seats, typeOfSeat) {
//         if (typeOfSeat === 1 && this.reservedLowerSeats + seats > this.lowerBirthTotalSeats) {
//             return false;
//         }
//         if (typeOfSeat === 2 && this.reservedMiddleSeats + seats > this.middleBirthTotalSeats) {
//             return false;
//         }
//         if (typeOfSeat === 3 && this.reservedUpperSeats + seats > this.upperBirthTotalSeats) {
//             return false;
//         }
//         if (typeOfSeat === 1) {
//             this.reservedLowerSeats += seats;
//         }
//         if (typeOfSeat === 2) {
//             this.reservedMiddleSeats += seats;
//         }
//         if (typeOfSeat === 3) {
//             this.reservedUpperSeats += seats;
//         }
//         return true;
//     }
//     getAvailableSeats() {
//         return this.lowerBirthTotalSeats + this.middleBirthTotalSeats + this.upperBirthTotalSeats - (this.reservedLowerSeats + this.reservedMiddleSeats + this.reservedUpperSeats);
//     }
// }

// const type = parseInt(prompt("Enter reservation type (1 for ReserveBus and 2 for ReserveTrain): "));

// let reservation;
// if (type === 1) {
//     const totalSeats = parseInt(prompt("Enter total seats for bus: "));
//     reservation = new ReserveBus(totalSeats);
// } else if (type === 2) {
//     const lowerBirthTotalSeats = parseInt(prompt("Enter total seats for lower birth: "));
//     const middleBirthTotalSeats = parseInt(prompt("Enter total seats for middle birth: "));
//     const upperBirthTotalSeats = parseInt(prompt("Enter total seats for upper birth: "));
//     reservation = new ReserveTrain(lowerBirthTotalSeats, middleBirthTotalSeats, upperBirthTotalSeats);
// }

class Reservation {
    constructor() { }
    reserve(seats, typeOfSeat) { }
    getAvailableSeats() { }
}

class ReserveBus extends Reservation {
    constructor(totalSeats) {
        super();
        this.totalSeats = totalSeats;
        this.reservedSeats = 0;
    }
    reserve(seats) {
        if (this.reservedSeats + seats > this.totalSeats) {
            return false;
        }
        this.reservedSeats += seats;
        return true;
    }
    getAvailableSeats() {
        return this.totalSeats - this.reservedSeats;
    }
}

class ReserveTrain extends Reservation {
    constructor(lowerBirthTotalSeats, middleBirthTotalSeats, upperBirthTotalSeats) {
        super();
        this.lowerBirthTotalSeats = lowerBirthTotalSeats;
        this.middleBirthTotalSeats = middleBirthTotalSeats;
        this.upperBirthTotalSeats = upperBirthTotalSeats;
        this.reservedLowerSeats = 0;
        this.reservedMiddleSeats = 0;
        this.reservedUpperSeats = 0;
    }
    reserve(seats, typeOfSeat) {
        if (typeOfSeat === 1 && this.reservedLowerSeats + seats > this.lowerBirthTotalSeats) {
            return false;
        }
        if (typeOfSeat === 2 && this.reservedMiddleSeats + seats > this.middleBirthTotalSeats) {
            return false;
        }
        if (typeOfSeat === 3 && this.reservedUpperSeats + seats > this.upperBirthTotalSeats) {
            return false;
        }
        if (typeOfSeat === 1) {
            this.reservedLowerSeats += seats;
        }
        if (typeOfSeat === 2) {
            this.reservedMiddleSeats += seats;
        }
        if (typeOfSeat === 3) {
            this.reservedUpperSeats += seats;
        }
        return true;
    }
    getAvailableSeats() {
        return this.lowerBirthTotalSeats + this.middleBirthTotalSeats + this.upperBirthTotalSeats - (this.reservedLowerSeats + this.reservedMiddleSeats + this.reservedUpperSeats);
    }
}

const type = parseInt(prompt("Enter reservation type (1 for ReserveBus and 2 for ReserveTrain): "));

let reservation;
if (type === 1) {
    const totalSeats = parseInt(prompt("Enter total seats for bus: "));
    reservation = new ReserveBus(totalSeats);
    console.log(`Reservation type: ReserveBus, Total seats: ${totalSeats}`);
} //else if (type === 2)

//-----------------------------------------in this question two test cases were failed
function solution(a) {
    //Write your solution here
      if(a==1){
          let sum=0,rem=0,count=0
          let totalSeat=parseInt(readLine())
          let totalBooking=parseInt(readLine())
          let array =readLine().split(" ").map(Number)
          if(totalSeat==0 && totalBooking==0)
              return"Remaining Seats-0"
          for(let i=0;i<array.length;i++){
              let a=array[i]
              if((sum+a)>totalSeat){
                  rem=array[i]
                  count++
              }else sum+=array[i]
                  
              
          }
          for (let j=0;j<array.length-count;j++){
              console.log(`Booked-${array[j]}`)
          }
          return `SEATS NOT AVAILABLE FOR BUS-${rem}REMAINING SEATS-${totalSeat-sum}`
      }else{
          let sum=0,count=0
          let birthSeat=readLine().split(" ").map(Number)
          let totalSeat = parseInt(readLine())
          let typeOfSeat = readLine().split(" ").map(Number)
          for(let i of birthSeat)
              sum+=i
          for(let i=0;i<typeOfSeat.length;i+=2){
              if(birthSeat[typeOfSeat[i]-1]>=typeOfSeat[i+1]){
                  console.log(`Booked-${typeOfSeat[i+1]}`)
                  birthSeat[typeOfSeat[i]-1]-=typeOfSeat[i+1]
                  sum-=typeOfSeat[i+1]
              }else{
                  console.log(`SEATS NOT AVAILABLE FOR TRAIN-${typeOfSeat[i+1]}`)
              }
          }
          return `Remaining Seats-${sum}`
      }
  }
  
  
  function main() {
      var a = parseInt(readLine());
  
      var res = solution(a);
      console.log(res);
  }
  
  
