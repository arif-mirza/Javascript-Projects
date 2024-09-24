let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    //paper, scissor, rock
    const options = ["rock" , "paper" , "scissor"];
   const randInx =  Math.floor(Math.random() * 3);
    return options[randInx];
};

const drawGame = () => {
    console.log("draw game");
    msg.innerHTML = "Draw! Play again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice ) => {
    if(userWin){
        userScore++;        
        userScorePara.innerHTML = userScore;
        msg.innerHTML = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerHTML = compScore;
        msg.innerHTML = `You lose! ${compChoice} beats  your ${userChoice}`;
        msg.style.backgroundColor = "red";
    };

};



const playGame = (userChoice) => {
    
    //genrate computer choices
    const compChoice = genCompChoice(); 
    

    if(userChoice === compChoice){
        //draw game
        drawGame();

    }else{
        //userWin
        if(userChoice === "rock"){
            //scissor, paper
            userWin = compChoice === "scissor" ? false : true;
        }else if(userChoice === "paper"){
            //rock, scissor
            userWin = compChoice === "scissor" ? false : true; 
        }else{
            //paper, rock
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice );

        
    };
    


};





choices.forEach((choices) => {
    choices.addEventListener("click", () => {
        const userChoice = choices.getAttribute("id");
        
        playGame(userChoice);
    });
});


