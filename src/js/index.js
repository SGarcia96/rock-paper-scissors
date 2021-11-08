function computerPlay() {
  const randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0:
      return "Rock"
    case 1:
      return "Paper"
    case 2:
      return "Scissors"
  }
}

let playerScore = 0
let computerScore = 0

function playRound(playerSelection, computerSelection) {
  let playerSelectionInsensitive = playerSelection.toLowerCase()
  let computerSelectionInsensitive = computerSelection.toLowerCase()

  if (playerSelectionInsensitive === "paper" && computerSelection === "Rock") {
    playerScore += 1
    return "You Win! Paper beats Rock"
  } else if (playerSelectionInsensitive === "rock" && computerSelection === "Scissors") {
    playerScore += 1
    return "You Win! Rock beats Scissors"
  } else if (playerSelectionInsensitive === "scissors" && computerSelection === "Paper") {
    playerScore += 1
    return "You Win! Scissors beats Paper"
  } else if (playerSelectionInsensitive === computerSelectionInsensitive) {
    return "Draw!"
  } else {
    computerScore += 1
    return `You Lose! ${computerSelection} beats ${playerSelection}`
  }
}

function game() {
  let rounds = 5

  do {
    const playerSelection = prompt("Choose: rock | paper | scissors (typing)")
    const computerSelection = computerPlay()
    rounds--

    console.log(
      playRound(playerSelection, computerSelection) +
        "\n rounds remaining: " +
        rounds +
        "\n your score: " +
        playerScore +
        "\n computer score: " +
        computerScore
    )
  } while (rounds)

  console.log(printResult)
}

const printResult = () => {
  let result =
    playerScore > 2
      ? `You Win! with ${playerScore} score vs ${computerScore} IA score`
      : `You Lose! with ${playerScore} score vs ${computerScore} IA score`
  return result
}

/** Start Game **/
game()
