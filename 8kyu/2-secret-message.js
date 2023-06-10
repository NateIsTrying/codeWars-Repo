// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

// Can you help her?
function greet(name){
    if(name === "Johnny"){
        return "Hello, my love!";
    }
    else {
        return "Hello, " + name + "!";
    }
  } // only issue seems to be not bracketing the if case, and bracketting the 'hello name' into the else case.

function greet(name){
    return  (name == "Johnny" ? "Hello, my love!" : `Hello, ${name}!`);
} // improved on version, turned into a ternary, others dice it further by adding the 'Hello' and '!' after the ternary operation. 