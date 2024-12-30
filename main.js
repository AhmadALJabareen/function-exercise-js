// Q1 :
// Write a JavaScript function that reverses a number.
// Example x = 532443;
// Expected Output: 344235

function reverseNum(num){
    let x = num;
    let z="";
    for(i=x.length-1; i>=0; i--){
        z += x[i];
        }
    console.log(z);
}

reverseNum("53210");

//................................***.....................................


// Q2 :
// Use a loop that iterates from 0 to 15. For each iteration, it checks if the current
// number is odd or even, and displays a message on the console.
// Example :
// "0 is even"
// "1 is odd"

for(num=0;num<=15;num++){
    if(num%2===0){
        console.log(`${num} is even`);
    }else{
        console.log(`${num} is odd`);
    }
}


//................................***.....................................

// Q3 :
// Write a function that returns a string that has letters in alphabetical order.
// Example string : 'Orange'
// Expected Output: 'aegnor'
// Assume punctuation and number symbols are not included in the passed string.


function sortAscending(str) {
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var sortedString = "";

    for (var i = 0; i < letters.length; i++) {
        for (var j = 0; j < str.length; j++) {
            if (str[j].toLowerCase() === letters[i]) {
                sortedString += str[j];
            }
        }
    }

    return sortedString;
}

console.log(sortAscending("abedc"));

// function alpha(str) {
// 	var arr = str.split(""); // splits the string
// 	res = arr.sort().join(""); // sort the array and joins to form a string
// 	return res; // returns the result
// }
// console.log("taking geeksforgeeks as a string");
// console.log(alpha("geeksforgeeks"));


//................................***.....................................

// Q4 :
// Write a JavaScript program that accepts a number as input and inserts
// dashes (-) between each even number. For example, if you accept 025468 the
// output should be 0-254-6-8.


var num=window.prompt();
var str = num.toString();
var result = [str[0]];
  
for(var x=1; x<str.length; x++)
  {
    if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
     {
      result.push('-', str[x]);
     }
    else
     {
      result.push(str[x]);
     }
  }
console.log(result.join(''));


// Q5:
// Write a function (Agechecker) that checks the age of the user if the age is
// larger than or equal to 18, the output will be ( The user is Adult ) else ( The
// user is Minor)
// Use ternary operator

function agechecker(age){
    return age>=18 ? "The user is Adult" : "The user is Minor" ;
}

console.log(agechecker(19));