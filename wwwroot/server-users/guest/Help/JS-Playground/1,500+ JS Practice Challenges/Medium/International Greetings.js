/*

International Greetings

Suppose you have a guest list of students and the country they are from, stored as key-value pairs in an object.

const GUEST_LIST = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina"
}
Write a function that takes in a name and returns a name tag, that should read:

"Hi! I'm [name], and I'm from [country]."
If the name is not in the object, return:

"Hi! I'm a guest."


Examples
greeting("Randy") ➞ "Hi! I'm Randy, and I'm from Germany."

greeting("Sam") ➞ "Hi! I'm Sam, and I'm from Argentina."

greeting("Monti") ➞ "Hi! I'm a guest."

*/





//#############################################################
//#  SOLUTION 1 
//#############################################################



const GUEST_LIST = {
    Randy: "Germany",
    Karla: "France",
    Wendy: "Japan",
    Norman: "England",
    Sam: "Argentina"
}

function greeting(name) {
    return GUEST_LIST[name] ? `Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}.` : "Hi! I'm a guest."
}


//#############################################################
//#  SOLUTION 2  
//#############################################################



const GUEST_LIST = {
    Randy: "Germany",
    Karla: "France",
    Wendy: "Japan",
    Norman: "England",
    Sam: "Argentina"
}

function greeting(name) {
    if (!GUEST_LIST.hasOwnProperty(name)) {
        return "Hi! I'm a guest."
    } else {
        return "Hi! I'm " + name + ", and I'm from " + GUEST_LIST[name] + ".";
    }
}



//#############################################################
//#  SOLUTION 3
//#############################################################



const GUEST_LIST = {
    Randy: "Germany",
    Karla: "France",
    Wendy: "Japan",
    Norman: "England",
    Sam: "Argentina"
}

function greeting(name) {
    if (Object.keys(GUEST_LIST).find(x => x == name)) {
        return `Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}.`;
    } else {
        return "Hi! I'm a guest.";
    }
}




//#############################################################
//#  SOLUTION 4
//#############################################################



const GUEST_LIST = {
    Randy: "Germany",
    Karla: "France",
    Wendy: "Japan",
    Norman: "England",
    Sam: "Argentina"
}

function greeting(name) {
    const phrase = "Hi! I\'m ";
    if (GUEST_LIST[name] == undefined) {
        return phrase + "a guest.";
    }
    return phrase + name + ", and I\'m from " + GUEST_LIST[name] + ".";
}





//#############################################################
//#  SOLUTION 5
//#############################################################




const GUEST_LIST = {
    Randy: "Germany",
    Karla: "France",
    Wendy: "Japan",
    Norman: "England",
    Sam: "Argentina"
}

function greeting(name) {
    return GUEST_LIST[name] != undefined ? `Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}.` :
        "Hi! I'm a guest."
}







//#############################################################
//#  SOLUTION 6
//#############################################################



const GUEST_LIST = {
    Randy: "Germany",
    Karla: "France",
    Wendy: "Japan",
    Norman: "England",
    Sam: "Argentina"
};

const greeting = name => GUEST_LIST.hasOwnProperty(name) ? `Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}.` : `Hi! I'm a guest.`;