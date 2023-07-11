const rulesBtn = document.querySelector(".rules-btn");
const modal = document.querySelector(".rules-main-wrapper");
const closeBtn = document.querySelector(".close-btn");
const main = document.querySelector(".main");

const gameWrapper = document.querySelector(".button-main-wrapper");
const paperBtn = document.querySelector(".paper-img");
const rockBtn = document.querySelector(".rock-img");
const scissorsBtn = document.querySelector(".scissor-img");
const pickedPage = document.querySelector(".picked-page");
const playAgain = document.querySelector(".play-again");
const result = document.querySelector(".result");
const myChoice = document.querySelector(".my-choice");
const compChoice = document.querySelector(".computer-choice");
let score = document.querySelector(".top__score-num");

if (!localStorage.getItem("score")) {
    localStorage.setItem("score", 0);
} else (
    score.textContent = localStorage.getItem("score")
)

gameWrapper.addEventListener("click", e => {
    if (e.target.tagName === "IMG") {
        myChoice.innerHTML = null;
        const playerSelection = e.target.cloneNode();
        gameWrapper.classList.add("close");
        pickedPage.classList.remove("close");
        myChoice.appendChild(playerSelection);

        compChoice.innerHTML = null;
        let array = [paperBtn, rockBtn, scissorsBtn];
        const randomIndex = Math.floor(Math.random() * array.length);
        setTimeout(() => {
            compChoice.appendChild(array[randomIndex]);
        }, 0);

        checkLoser(playerSelection, array, randomIndex);
        checkWinner(playerSelection, array, randomIndex);
    }
})

function checkLoser(playerSelection, array, randomIndex) {
    if (playerSelection.className === array[randomIndex].className) {
        result.textContent = "Draw";
    } else if (playerSelection.className === "rock-img" && array[randomIndex].className === "paper-img") {
        result.textContent = "You lose !";
    } else if (playerSelection.className === "paper-img" && array[randomIndex].className === "scissor-img") {
        result.textContent = "You lose !";
    } else if (playerSelection.className === "scissor-img" && array[randomIndex].className === "rock-img") {
        result.textContent = "You lose !";
    }
}

function checkWinner(playerSelection, array, randomIndex) {
    if (playerSelection.className === "paper-img" && array[randomIndex].className === "rock-img") {
        result.textContent = "You win !";
        score.textContent = +score.textContent + 1;
        localStorage.setItem("score", score.textContent);
    } else if (playerSelection.className === "scissor-img" && array[randomIndex].className === "paper-img") {
        result.textContent = "You win !";
        score.textContent = +score.textContent + 1;
        localStorage.setItem("score", score.textContent);
    } else if (playerSelection.className === "rock-img" && array[randomIndex].className === "scissor-img") {
        result.textContent = "You win !";
        score.textContent = +score.textContent + 1;
        localStorage.setItem("score", score.textContent);
    }
}

playAgain.addEventListener("click", e => {
    location.reload();
})

rulesBtn.addEventListener("click", () => {
    modal.classList.toggle("close");
    main.classList.add("blur");
})

closeBtn.addEventListener("click", () => {
    modal.classList.add("close");
    main.classList.remove("blur");
})