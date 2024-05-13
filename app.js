let userScore = 0;
let compScore = 0;

const choices  = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")


const genCompChoice = () =>{
    const options= ["rock", "paper", "scissor"]
    const randomIdx = Math.floor(Math.random()*options.length);
    return options[randomIdx]
}

const DrawGame =()=>{
    msg.innerText = "Draw" 
}

const showWinner = (userWin) =>{
    if (userWin){
        userScore++
 msg.innerText = "You Win"
 userScorePara.innerText = userScore;
}
else{
        compScore++
        msg.innerText = "You lost" 
        compScorePara.innerText = compScore;
       }
}

const playGame = (userChoice) =>{
console.log("user choice ",userChoice );
const compChoice = genCompChoice();
console.log("comp  choice ", compChoice);
if (userChoice === compChoice)
DrawGame()
else{
    let userWin = true;
    if(userChoice === "rock"){
        userWin = compChoice === "paper" ? false : true
    }else if(userChoice === "paper"){
        userWin = compChoice === "scisssor" ? false : true
    }
    else {
        userWin = compChoice === "rock" ? false : true
    }
    showWinner(userWin);
}
}

choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id")
        
        playGame(userChoice);
    }) 
})