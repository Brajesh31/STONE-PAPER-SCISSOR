let computerChoise;
function getComputerChoise() {
    let rand = Math.random() * 3;
    if (rand > 0 && rand <= 1) {
        computerChoise = 'rock';
    } else if (rand > 1 && rand <= 2) {
        computerChoise = 'paper';
    } else if (rand > 2 && rand <= 3) {
        computerChoise = 'scissor';
    }
}

function result(playerChoise, computerChoise) {
    if (playerChoise === computerChoise) {
        winLooseTie.tie++;
        document.querySelector("#computerChoise").innerHTML = `Computer choise is ${computerChoise}`;
        document.querySelector("#playerChoise").innerHTML = `Player choise is ${playerChoise}`;
        document.querySelector("#result").innerHTML = `It's a tie!`
        document.querySelector("#Score").innerHTML = `Score: win = ${winLooseTie.win},loose = ${winLooseTie.loose},tie = ${winLooseTie.tie}`;
        localStorage.setItem('winLooseTie', JSON.stringify(winLooseTie));
    } else if (
        (playerChoise === 'rock' && computerChoise === 'scissor') ||
        (playerChoise === 'paper' && computerChoise === 'rock') ||
        (playerChoise === 'scissor' && computerChoise === 'paper')
    ) {
        winLooseTie.win++;
        localStorage.setItem('winLooseTie', JSON.stringify(winLooseTie));
        document.querySelector("#computerChoise").innerHTML = `Computer choise is ${computerChoise}`;
        document.querySelector("#playerChoise").innerHTML = `Player choise is ${playerChoise}`;
        document.querySelector("#result").innerHTML = `player win's!!`
        document.querySelector("#Score").innerHTML = `Score: win = ${winLooseTie.win},loose = ${winLooseTie.loose},tie = ${winLooseTie.tie}`;
    } else {
        winLooseTie.loose++;
        localStorage.setItem('winLooseTie', JSON.stringify(winLooseTie));
        document.querySelector("#computerChoise").innerHTML = computerChoise ? `Computer choise is ${computerChoise}` : '';
        document.querySelector("#playerChoise").innerHTML = playerChoise ? `Player choise is ${playerChoise}` : '';
        document.querySelector("#result").innerHTML = `Computer Won!!`
        document.querySelector("#Score").innerHTML = `Score: win = ${winLooseTie.win},loose = ${winLooseTie.loose},tie = ${winLooseTie.tie}`;
    }
}

let score = localStorage.getItem('winLooseTie');
let winLooseTie = JSON.parse(score) || {
    win: 0,
    loose: 0,
    tie: 0,
    
}

