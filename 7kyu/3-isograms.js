// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

function isIsogram(str){
    str = str.toLowerCase();
    for(let i = 0; i < str.length; i++){
        for(let j = i+1; j < str.length; j++){
            if(str[i] === str[j]){
                return false;
            }
        }
    }
    return true;
} // Successful test, but saw similar answer, had idea before, but needed to confirm if that was the right direction, Give myself a B-/C+ here.