// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
    const arr = '';
	for(let i = 0; i < s.length; i++){
        if(s[i] !== s[i].toUpperCase()){
            s[i].push() = s[i].toUpperCase();
        }

            s[i].push(s[i].toLowerCase) 
    }
} // failed, gave up. need to study the successful examples and understand and repeat them. 

//closest to my own
function accum(str) {
    var letters = str.split('');
    var result = [];
    for (var i = 0; i < letters.length; i++) {
        result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
    }
  return result.join('-');
}

//refactored and one line version
function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}