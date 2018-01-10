// Exercise 1 -- for loop that starts at zero, adds one to total until
// sum is equal to number entered by user

// // var sum = "Please enter a number";
//
// var number = prompt("Please enter a number");
// var result = 0;
//
// for (var i=0; i<=number; i++) {
//  result += i;
// }
//
// alert(result);

// //-------------------
//
// // Exercise 2
//


var accumulator = "";
var play = prompt("Do you want to play?");

if (play === "yes") {
  do {
      word = prompt("Enter a word.");
      accumulator = accumulator + " " + word;
      play = prompt("Do you want to play again?");
  } while (play === "yes");
  console.log (accumulator);
}

// while (!play.equalsIgnoreCase("yes") && !play.equalsIgnoreCase("no")) {
//     if (play.equalsIgnoreCase("yes")) {
//         var firstWord = prompt(word) {
//
//         }
//         break;
//     } else (play.equalsIgnoreCase("no")) {
//         alert(firstWord + " " + secondWord + " " + thirdWord);
//         break;
//     }
// }
//
// //---------------------------------
//
// // Exercise 3
