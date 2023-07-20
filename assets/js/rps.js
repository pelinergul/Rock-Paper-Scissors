
const action = ["taş","kağıt","makas"];

function playForComputer() {
    return action[Math.floor(Math.random()*3)];
};

function qs(q) {return document.querySelector(q);}

const playerScoreElement= qs("#playerScore");
const computerScoreElement= qs("#computerScore");
const winnerText=qs("#winner");

const playBtns= document.querySelectorAll(".playButton");

for (const playBtn of playBtns) {
    playBtn.addEventListener("click",playerActionHandler);
}

function playerActionHandler() {
    play(this.innerText.toLowerCase());
}

function play(playerAction) {
    const computerAction = playForComputer();
    console.log(`${playerAction} - ${computerAction}`);
    if (playerAction==computerAction) {
        winnerText.innerText="AYNI SEÇİM YAPILDI";

        return;
    }
    if(playerAction == "taş" && computerAction.toLocaleLowerCase()=="kağıt") {
        return computerWin();
    }
    if(playerAction == "kağıt" && computerAction.toLocaleLowerCase()=="makas") {
        return computerWin();
    }
    if(playerAction == "makas" && computerAction.toLocaleLowerCase()=="taş") {
        return computerWin();
    }
    else {
        playerWin();
    }
};

let playerScore=0;
let computerScore=0;
function playerWin() {
    playerScore++;
    playerScoreElement.innerText=playerScore;
    winnerText.innerText="PLAYER WİN!!";

};
function computerWin() {
    computerScore++;
    computerScoreElement.innerText=computerScore;
    winnerText.innerText="Computer WİN!!";


}
