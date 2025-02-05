

let choices = ["rock" , "paper" , "scissors"];
let playerDisplay = document.querySelector("#playerDisplay");
let computerDisplay = document.querySelector("#computerDisplay");
let resultDisplay = document.querySelector("#resultDisplay");

// 
function playGame(playerChoice) {
  let computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = " "; 

  console.log(computerChoice);
  if ((playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")){
      result = "You win!";
      resultDisplay.classList.remove("redText","tie");
        resultDisplay.classList.add("pinkText", "blowUp");
      
        } else {result =("You lose!")
            resultDisplay.classList.remove("pinkText", "tie");
            resultDisplay.classList.add("redText")
        };
        
  if (playerChoice === computerChoice) {result = "Its a tie!"
    resultDisplay.classList.remove("redText" , "pinkText");
    
        resultDisplay.classList.add("tie")
  }

  
  
  
  playerDisplay.innerHTML = `Player:${playerChoice}`;
  computerDisplay.innerHTML = `Computer:${computerChoice}`;
  resultDisplay.innerHTML = result.toUpperCase() ;
    };

  
