//*****************Exercise 1****************

// var number = prompt("Please enter a number");
// var result = 0;
//
// for (var i=0; i<=number; i++) {
//  result += i;
// }
//
// alert(result);

//*************Exercise 2****************
//
// var accumulator = "";
// var play = prompt("Do you want to play?");
//
// if (play === "yes") {
//   do {
//       word = prompt("Enter a word.");
//       accumulator = accumulator + " " + word;
//       play = prompt("Do you want to play again?");
//   } while (play === "yes");
//   console.log (accumulator);
// }

//******************Exercise 3*******************
// Write a while loop that will prompt the user if they would like to print their name. If the
// answer is yes, log their name to the console then prompt them if they would like to print
// their name again. If yes, log their name to the console again but this time add an
// exclamation point at the end of the string. Continue to add an exclamation point for every
// time the user agrees to wanting to print his or her name.
// Prompt: ‘Would you like to print your name?’ > 'yes'
// Output: 'Hello. My name is Adam'
// Prompt: ‘Would you like to print this again?’ > 'yes'
// Output: ‘Hello. My name is Adam!'
// Prompt: ‘Would you like to print this again?’ > 'yes'
// Output: 'Hello. My name is Adam!!'
// Prompt: ‘Would you like to print this again?’ > 'no'

// var name = prompt("What is your name?");
// var ans = prompt("Would you like to print your name?");
// var accum = name

// while (ans === "yes") {
//  console.log(name);
  // ans = prompt("Would you like to print your name again?");
  // accum = accum + "!";
  // console.log (accum);
// }

// if (ans === "no") {
  // console.log("");
// }


//******************Exercise​ ​Four******************** 


// var morningMeal = "Since it is morning, you should be eating breakfast. We suggest eggs and toast.";
// var noonMeal = "Since it is noon, you should be eating lunch. We suggest a salad.";
// var eveningMeal = "Since it is evening, you should be eating dinner. We suggest chicken and rice.";
//
// var timeDay = prompt("Is it morning, noon, or evening?");
//
// if (timeDay === "morning") {
//   console.log(morningMeal);
// } else if (timeDay === "noon") {
//   console.log(noonMeal);
// } else if (timeDay === "evening") {
//   console.log(eveningMeal);
// } else {
//   alert("Sorry, I guess you don't know what time of day it is.");
// }
