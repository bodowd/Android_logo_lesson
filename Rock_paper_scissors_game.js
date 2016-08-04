/* CodeAcademy JavaScript Rock, paper, scissors game*/

var userChoice_raw = prompt("Do you choose rock, paper or scissors?");
var userChoice = userChoice_raw.toLowerCase();

/* Trying to add fix: if user chooses something besides rock paper or scissors...

if (userChoice !=="rock" || userChoice !== "scissors" || userChoice !== "paper"){
    userChoice_raw = prompt("Pick again. Only choose rock, paper, or scissors");
};
var userChoice = userChoice_raw.toLowerCase();*/

console.log("You picked:" + " " + userChoice);
var computerChoice = Math.random();

if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);


/* Testing the if userChoice===computerChoice function
var userChoice = "scissors";
var computerChoice = "scissors";
*/

var compare = function(userChoice, computerChoice) {
    if(userChoice === computerChoice){
        /*if tie, asks player to choose again*/
       userChoice = prompt("Tie. Choose again.");
       return compare(userChoice,computerChoice);
    }
else if(userChoice === "rock") {
    if (computerChoice === "scissors") {
        return "rock wins";

    }
    else {
        return "paper wins";
    }
}
else if(userChoice === "paper") {
    if (computerChoice==="rock") {
        return "paper wins";
    }
    else {
        return "scissors wins";
    }
}
else if(userChoice === "scissors") {
    if(computerChoice==="rock"){
        return "rock wins";
    }
    else {
        return "scissors wins";
    }
}

};

console.log(compare(userChoice,computerChoice));
