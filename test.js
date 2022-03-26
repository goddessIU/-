function greetingMaker(greeting) { 
    function addName(name) {    
        greeting  = greeting.split(' ').reverse().join("-");
        return greeting + " " + name;
    }
    
    return addName;
}

var daytimeGreeting = greetingMaker("Good Day to you");
console.log(daytimeGreeting(name)); 