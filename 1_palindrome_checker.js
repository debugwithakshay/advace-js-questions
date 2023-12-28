let givenString = "tenet"

//breaking down string characters and storing into arrays
let charArray = givenString.split("")
//reversing down arrays
let reversedArray = charArray.reverse()
//joining again to convert array into string
let finalString = reversedArray.join("")

//checking if palindrome or not
if(givenString == finalString){
    console.log("yes")
} else{
    console.log("No");
}

//------------alternative Method-----------
/*
let givenString = "two";

let newArray = [];
for (let i = givenString.length - 1; i >= 0; i--) {
  newArray.push(givenString[i])
}

let reversedString = ""
for(let char of newArray){
    reversedString += char
}

if(givenString == reversedString){
    console.log("yes");
} else{
    console.log("no");
}
*/