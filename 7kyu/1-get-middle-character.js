// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

function getMiddle(s)
{
    let half = s.length/2;
  if(s.length % 2 === 0){
    return s.slice((half),(half + 2))
  } else {
    return s[Math.floor(half) + 1];
  }
} // Failed... Didn't correctly grab correct letters; count starts at zero.

function getMiddle(s)
{
  let half = s.length/2;
  if(s.length % 2 === 0){
    return s.slice((half-1),(half + 1))
  } else {
    return s[Math.floor(half)];
  }
} // Successful. positioned grabbed letters correctly. Will attempt to turn into ternary operator.

function getMiddle(s)
{
    let half = s.length/2;
    return (s.length % 2 === 0) ? s.slice((half-1),(half + 1)) : s[Math.floor(half)];
} // Ternary Operator version. Completed after looking at solutions after submitting non-ternary version first. 

//I should attempt to understand this solution's methods below: To better grasp methods outside my comfort zone.
function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
} // .substr is used instead of .substring because the length can be simply added at the end with a ternary like above, substrings parameters go from indexStart to indexEnd. Even though .substr is outdated and deprecated, it still has its uses. 