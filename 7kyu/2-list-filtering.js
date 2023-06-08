// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l) {
    // Return a new array with the strings filtered out
    l.filter((char) => typeof char === 'number')
    return l;
  } // Failed attempt, will try simple 'for' loop or 'for of' loop

function filter_list(l) {
    // Return a new array with the strings filtered out
    let arr = [];
    for(let x = 0; x < l.length; x++){
        if(typeof l[x] === 'number'){
            arr.push(l[x])
        }
    }
    return arr;
} //Uglier code, but simpler and easier to work with. 'for' loops work. 

function filter_list(l) {
    // Return a new array with the strings filtered out
    return l.filter((char) => typeof char == 'number')
} // This version works, the main differences seem to be having the return on the same line and not having it triple equals allowing more leniency on type.
// This answer was achieved after looking at the answers. 