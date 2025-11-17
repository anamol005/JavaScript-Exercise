/// 1.

//const numbers = [];
//
//for (let i = 0; i < 5; i++) {
//  const input = prompt(`Enter number ${i + 1}:`);
//  const num = Number(input);
//  numbers.push(num);
//}
//
//console.log("You entered in reverse:");
//for (let i = numbers.length - 1; i >= 0; i--) {
//  console.log(numbers[i]);
//}



/// 2.

//const count = Number(prompt("How many participants?"));
//const names = [];
//
//for (let i = 0; i < count; i++) {
//  const name = prompt(`Enter name ${i + 1}:`);
//  names.push(name);
//}
//
//names.sort();
//
//document.body.innerHTML += "<ol>";
//for (let n of names) {
//  document.body.innerHTML += `<li>${n}</li>`;
//}
//document.body.innerHTML += "</ol>";



///// 3.

//const dogs = [];
//
//for (let i = 0; i < 6; i++) {
//  const dog = prompt(`Enter dog name ${i + 1}:`);
//  dogs.push(dog);
//}
//
//dogs.sort().reverse();
//
//document.body.innerHTML += "<ul>";
//for (let d of dogs) {
//  document.body.innerHTML += `<li>${d}</li>`;
//}
//document.body.innerHTML += "</ul>";




//// 4.


//const nums = [];
//let n;
//
//do {
//  n = Number(prompt("Enter a number (0 to stop):"));
//  if (n !== 0) nums.push(n);
//} while (n !== 0);
//
//nums.sort((a, b) => b - a);
//
//console.log("Numbers from largest to smallest:");
//for (let x of nums) console.log(x);


//// 5.


//const nums = [];
//
//while (true) {
//  const n = Number(prompt("Enter a number:"));
//
//  if (nums.includes(n)) {
//    console.log("Number already entered! Stopping...");
//    break;
//  }
//
//  nums.push(n);
//}
//
//nums.sort((a, b) => a - b);
//
//console.log("All given numbers:");
//for (let x of nums) console.log(x);



////// 6.

//function rollDice() {
//  return Math.floor(Math.random() * 6) + 1;
//}
//
//document.body.innerHTML += "<ul>";
//
//let result = 0;
//while (result !== 6) {
//  result = rollDice();
//  document.body.innerHTML += `<li>${result}</li>`;
//}
//
//document.body.innerHTML += "</ul>";



//// 7.

//function rollDice(sides) {
//  return Math.floor(Math.random() * sides) + 1;
//}
//
//const max = Number(prompt("How many sides on the dice?"));
//
//document.body.innerHTML += "<ul>";
//
//let result = 0;
//while (result !== max) {
//  result = rollDice(max);
//  document.body.innerHTML += `<li>${result}</li>`;
//}
//
//document.body.innerHTML += "</ul>";



///// 8.

//function concat(arr) {
//  let result = "";
//  for (let item of arr) {
//    result += item;
//  }
//  return result;
//}
//
//const names = ["Anamol", "Sandesh", "Sudhir", "Biplov"];
//const result = concat(names);
//
//document.body.innerHTML += `<p>${result}</p>`;



//// 9.

//function even(arr) {
//  const result = [];
//  for (let num of arr) {
//    if (num % 2 === 0) {
//      result.push(num);
//    }
//  }
//  return result;
//}
//
//const numbers = [2, 7, 4, 11, 16];
//
//console.log("Original array:", numbers);
//console.log("Even numbers:", even(numbers));



































































































































