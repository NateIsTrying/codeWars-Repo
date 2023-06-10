// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    let xTally = 0;
    let oTally = 0;
    const strArr = str.toLowerCase().split('');
    for(let i = 0; i < strArr.length; i++){
        if(strArr[i] === 'x'){
            xTally++;
        } else if(strArr[i] === 'o'){
            oTally++;
        }
    }

    return ((oTally === xTally) ? true : false);
} // IT WORKS! pretty simple problem, created 2 variables to store x's and o's, made sure all letters were same case, then split str into an array and saved them into strArr, then a simple for loop to count the xs and os. Finally a ternary operator to send true or false if the tallies are equal. Don't know of a better refactor, but I am will see.