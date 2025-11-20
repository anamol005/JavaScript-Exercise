//// 1.

//console.log("I'm printing to console!");



//// 2.

//const username = prompt("Enter your name:");
//document.body.innerHTML += `<p>Hello, ${username}!</p>`;


///3.

//const a = Number(prompt("Enter first number:"));
//const b = Number(prompt("Enter second number:"));
//const c = Number(prompt("Enter third number:"));
//
//const total = a + b + c;
//const multiplication = a * b * c;
//const avg = total / 3;
//
//document.body.innerHTML += `
//  <p>Sum: ${total}</p>
//  <p>Product: ${multiplication}</p>
//  <p>Average: ${avg}</p>
//`;


//// 4.

//const student = prompt("Enter student's name:");
//const houseNumber = Math.floor(Math.random() * 4) + 1;
//
//let house = "";
//
//if (houseNumber === 1) house = "Gryffindor";
//else if (houseNumber === 2) house = "Slytherin";
//else if (houseNumber === 3) house = "Hufflepuff";
//else house = "Ravenclaw";
//
//document.body.innerHTML += `<p>${student}, you are ${house}.</p>`;




//// 5.


//const year = Number(prompt("Enter a year:"));
//
//let message = "";
//
//if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//  message = `${year} is a leap year`;
//} else {
//  message = `${year} is NOT a leap year`;
//}
//
//document.body.innerHTML += `<p>${message}</p>`;



////7.

//const rolls = Number(prompt("How many dice to roll?"));
//let resultSum = 0;
//
//for (let i = 0; i < rolls; i++) {
//  resultSum += Math.floor(Math.random() * 6) + 1;
//}
//
//document.body.innerHTML += `<p>Sum of dice rolls: ${resultSum}</p>`;



///8.

//const start = Number(prompt("Start year:"));
//const end = Number(prompt("End year:"));
//
//document.body.innerHTML += "<ul>";
//
//for (let year = start; year <= end; year++) {
//  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//    document.body.innerHTML += `<li>${year}</li>`;
//  }
//}
//
//document.body.innerHTML += "</ul>";























































































































































