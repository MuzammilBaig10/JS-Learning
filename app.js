// // // // var list = []

// // // // // var x = prompt("fruits or colors")

// // // // // if (x == "fruits") {

// // // // //     list.push("apple,orange,mango")
// // // // //     alert(list) 

// // // // // } else if (x == "colors") {

// // // // //     list.push("red,black,orange")
// // // // //     alert(list)

// // // // // } else {

// // // // //     alert("invalid input")

// // // // // }

// // // var fruits = ["apple" , "banana" , "grapes" , "peach"]
// // // console.log ("My Fruits :" , fruits)
// // // fruits.shift ()
// // // console.log ("My Fruits After Shift() :" , fruits)

// fruits = ["apple" , "banana" , "grapes" , "peach"]
// console.log ("My Fruits :" ,fruits)
// // fruits.splice(3,1)
// // console.log ("My Fruits After Splice" , fruits)

// var firstNames = ["abubakar", "umer", "usman", "ali", "muhammad"];
// var lastNames = ["abdullah", "ahmed", "daniyal"]

// for (var i = 0; i < 5; i++) {


//     for (var j = 0; j < 3; j++) {
//         console.log(firstNames[i] + " " + lastNames[j])
//     }

//     if (i == 0) {
//         console.log("FIRST LOOP ITERATION COMPLETE");
//     }

//     else if (i == 1) {
//         console.log("SECOND LOOP ITERATION COMPLETE");
//     }

//     else if (i == 2) {
//         console.log("THIRD LOOP ITERATION COMPLETE");
//     }

//     else if (i == 3) {
//         console.log("FOURTH LOOP ITERATION COMPLETE");
//     }

//     else if (i == 4) {
//         console.log("FIFTH LOOP ITERATION COMPLETE");
//     }
// }

// for (var i = 0; i<=15; i++) {
//     if (i % 2 === 0) {
//         console.log (i + " is even");
//     } else {
//         console.log(i + " is odd");
//     }
// 
// var studentMarks = [40, 98, 55, 90, 75];

// var sum = 0;

// for (var i = 0; i < studentMarks.length; i++) {
//  sum = sum + studentMarks[i];
// }

// var average = sum / studentMarks.length;

// console.log("The average marks are: " + average);

for ( var i = 1; i <= 100; i ++) {

  if ( i % 3 === 0 && i % 5 === 0) {
        console.log ( i + " Jahaz Mood");
    }
    
    else if (i % 3 === 0) {
    console.log ( i + "Fizz");    
    } 

    else if ( i % 5 === 0) {
        console.log ( i + "Buzz");
    } 

} 

