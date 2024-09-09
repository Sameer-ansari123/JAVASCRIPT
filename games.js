let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelectorAll("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const genComputerChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(math.random() *3);
    return options[randIdx];

};

const drawGame = () => {
    msg.innerText = "Game was draw. Play Again.";
    msg.style.backgroundColor = "#081b31"
};

    //
    const showWinner = (userWin, userChoice,computerChoice) =>{
        if(userWin){
                userScore++;
            userScorePara.innerText = userScore;
            msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor ="green";
        }else{
            compScore++;
            compScorePara.innerText = compScore;
            msg.style.backgroundColor ="red";

        }
    };
    
    const playGame = (userChoice) =>{
//generate computer choice  
const compChoice = genCompchoice();

    if(userChoice === compChoice){
        //draw
         drawGame();
    }else{
        let userWins = true;
        if (userChoice === "rock"){
            //
            userwin = computerChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //
            userWin = compChoice === "scissors" ? false : true;
        } else{
            //
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,computerChoice);
    }
};


choices.forEach((choice) =>{
    console.log(choice);
    choice.addEvenListener("click",() =>{
        const userChoice = choice.getAttribute("id"); 
        playGame(userChoice);
    });
});
