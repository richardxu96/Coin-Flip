// make this whole thing a function
function game(){
    // computer input
    let random = Math.random();
    document.write("Random = "+ random + "<br>");

    // player input
    let playerInput = prompt("Heads or tails?");
    let playerInputLow = playerInput.toLowerCase();
    let guess = ("Player guessed = "+ playerInputLow);

    // game
    function playRound(a, b){
        if (b <= 0.5 && a == "heads" || b >= 0.5 && a == "tails") {
            document.write(guess + "<br>"+ correct);
            wins++;
        } else {
            document.write(guess + "<br>"+ wrong);
            loses++;
        }
    document.write("Wins = " + wins + enter +
                    "Loses = " + loses + enter + enter);
    }
    playRound(playerInputLow, random);
}
// store variables
let correct = ("You guessed correctly" + "<br>");
let wrong = ("You guessed wrong" + "<br>");
let wins = 0;
let loses = 0;
let enter = ("<br>");

// have function to run 3 times
function set(){
    game();
    game();
    game();
    if (wins>loses) {
        document.write("Player wins!");
    } else {
        document.write("Sorry, maybe next time");
    }
}
set();
