// Check if the user is ready to play!

confirm("Are you ready to play?");

//Prompts user for their age

var age = prompt("What's your age?");

if(age < 13){
    console.log("You can play, but I'm not responsible for what happens.");
}
else{
    console.log("gl hf");
}

console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");
console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'");

//prompts user...if I put var in front it doesn't work...
userAnswer = prompt("Do you want to race Bieber on stage?");

if(userAnswer.trim().toLowerCase().charAt(0) == "y"){
    console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!");
}
else{
    console.log("Oh no! Beiber shakes his head and sings 'I set a pace, so I can race without pacing.'");
}

var feedback = prompt("Out of ten, how was the game?");
if(feedback > 8){
    console.log("Thank you! We should race at the next concert!");
}
else{
    console.log("I'll keep practicing coding and racing.");
}
