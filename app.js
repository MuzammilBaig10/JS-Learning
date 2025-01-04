// // // // // var list = []

// // // // // // var x = prompt("fruits or colors")

// // // // // // if (x == "fruits") {

// // // // // //     list.push("apple,orange,mango")
// // // // // //     alert(list)

// // // // // // } else if (x == "colors") {

// // // // // //     list.push("red,black,orange")
// // // // // //     alert(list)

// // // // // // } else {

// // // // // //     alert("invalid input")

// // // // // // }

// // // // var fruits = ["apple" , "banana" , "grapes" , "peach"]
// // // // console.log ("My Fruits :" , fruits)
// // // // fruits.shift ()
// // // // console.log ("My Fruits After Shift() :" , fruits)

// // fruits = ["apple" , "banana" , "grapes" , "peach"]
// // console.log ("My Fruits :" ,fruits)
// // // fruits.splice(3,1)
// // // console.log ("My Fruits After Splice" , fruits)

// // var firstNames = ["abubakar", "umer", "usman", "ali", "muhammad"];
// // var lastNames = ["abdullah", "ahmed", "daniyal"]

// // for (var i = 0; i < 5; i++) {

// //     for (var j = 0; j < 3; j++) {
// //         console.log(firstNames[i] + " " + lastNames[j])
// //     }

// //     if (i == 0) {
// //         console.log("FIRST LOOP ITERATION COMPLETE");
// //     }

// //     else if (i == 1) {
// //         console.log("SECOND LOOP ITERATION COMPLETE");
// //     }

// //     else if (i == 2) {
// //         console.log("THIRD LOOP ITERATION COMPLETE");
// //     }

// //     else if (i == 3) {
// //         console.log("FOURTH LOOP ITERATION COMPLETE");
// //     }

// //     else if (i == 4) {
// //         console.log("FIFTH LOOP ITERATION COMPLETE");
// //     }
// // }

// // for (var i = 0; i<=15; i++) {
// //     if (i % 2 === 0) {
// //         console.log (i + " is even");
// //     } else {
// //         console.log(i + " is odd");
// //     }
// //

// // var studentMarks = [40, 98, 55, 90, 75];

// // var sum = 0;

// // for (var i = 0; i < studentMarks.length; i++) {
// //  sum = sum + studentMarks[i];
// // }

// // var average = sum / studentMarks.length;

// // console.log("The average marks are: " + average);

// // for (var i = 1; i <= 100; i++) {

// //     if (i % 3 === 0 && i % 5 === 0) {
// //         console.log(i + " Jahaz Mood");
// //     }

// //     else if (i % 3 === 0) {
// //         console.log(i + "Fizz");
// //     }

// //     else if (i % 5 === 0) {
// //         console.log(i + "Buzz");
// //     }

// // }

// function Greatman() {
//     var userName = prompt ("Enter Your Name");
//     alert ("Welcome," + userName);
// }

// // function Greatage() {
// //     var userAge = prompt ("Enter Your Age")
// //     alert ("Roger That");

// // }

// // console.log ("THIS IS LINE 1")
// // console.log ("THIS IS LINE 2")
// // console.log ("THIS IS LINE 3")
// // console.log ("THIS IS LINE 4")
// // console.log ("THIS IS LINE 5")
// // Greatman ()
// // console.log ("THIS IS LINE 6")
// // console.log ("THIS IS LINE 7")
// // console.log ("THIS IS LINE 8")
// // console.log ("THIS IS LINE 9")
// // console.log ("THIS IS LINE 10")
// // Greatage ()
// // console.log ("THIS IS LINE 11")
// // console.log ("THIS IS LINE 12")
// // console.log ("THIS IS LINE 13")
// // console.log ("THIS IS LINE 14")
// // console.log ("THIS IS LINE 15")

// var flagVariable = false
// function main() {

//   if (flagVariable === false) {
//     readmore();
//     document.getElementById("myBTN").innerHTML = "readless";
//     flagVariable = true;
//   }else {
//     readless ();
//     document.getElementById ("myBTN").innerHTML = "readmore";
//     flagVariable = false;
//   }
  
// }

// function readmore() {
//   var para = (document.getElementById("myPara").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aliquam sunt ipsum sed cupiditate. Itaque accusantium in vitae perferendis repellat, earum adipisci dolorem nihil optio velit voluptas saepe assumenda nemo. Salam wasakam okay left right left you he she shemale female male gender equality good to know them answers. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aliquam sunt ipsum sed cupiditate. Itaque accusantium in vitae perferendis repellat, earum adipisci dolorem nihil optio velit voluptas saepe assumenda nemo.");
// }

// function readless() {
//     var para = (document.getElementById("myPara").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aliquam sunt ipsum sed cupiditate. Itaque accusantium in vitae perferendis repellat, earum adipisci dolorem nihil optio velit voluptas saepe assumenda nemo. Salam wasakam okay left right left you he she shemale female male gender equality good to know them answers.");
//   }
  

// function swapPic() {
  // document.getElementById ("before").src = "data:image/jpeg;base64,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"
// }


var plan1 = {
  name: "Basic",
  monthly: 3.99,
  disk: 100,
  data: 1000,
  pages: 10,
  autosubscriptionrenewal: false,
}; 

console.log(plan1.autosubscriptionrenewal);
console.log(plan1.data);
console.log(plan1.pages);
console.log(plan1);

plan1["monthly"] = 100;
console.log(plan1);
plan1.monthly = 150;
console.log(plan1);