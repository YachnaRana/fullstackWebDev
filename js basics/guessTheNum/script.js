let attempt = 1;
let guess = (prompt("guess the number!!!"));
let targetNum = Math.floor(Math.random()*guess) + 1;
console.log(targetNum + " is targetNum")

while(parseInt(guess) !== targetNum){
    if(guess === "q") break;
        attempt++;
    if(guess < targetNum){
        guess = prompt("too low...enter another guess!!")
    }else if(guess > targetNum){
        guess = prompt("too high...enter another guess!!")
    }
}
console.log("you got it with agtempts of " + attempt )
