let playerMoves = [], computerMoves = [], gameOn = true, turns = 0;


function playerTurn(id) {
    if (!gameOn) { return; }
    if (computerMoves.includes(Number(id)) || playerMoves.includes(id)) { return; }
    playerMoves.push(id);
    drawScore(0, id);
    checkIfThereIsAWinner();
    turns++;
    if (turns == 9) { gameOn = false; console.log('draw'); return; }
    computerTurn();

}
function drawScore(player, id) {
    let box = document.getElementById(id);
    //person choose this box
    if (player == 0) {
        box.innerHTML = 'X';
        box.style.color = '#1d19fa';
    }
    //computer choose this box
    else {
        box.innerHTML = 'O';
        box.style.color = '#ce0909';
    }
    //remove hover from this box
    box.classList.remove('hoverable');
    box.style.fontSize = "3.5rem";
}
function checkIfThereIsAWinner() {
    let boxes = [];
    //get value from all the boxes
    for (let index = 1; index <= 9; index++) {
        boxes.push(document.getElementById(`${index}`).innerHTML);
    }
    if (boxes[0] == boxes[1] && boxes[0] == boxes[2] && boxes[0] != '@') {
        //we have winner
        gameOn = false;
        //which one
        if (boxes[0] == 'X') {
            console.log('Player WON !');
        }
        else {
            console.log('Computer WON !');
        }
        heightWinnerBoxes(0, 1, 2);
        return;
    }
    if (boxes[3] == boxes[4] && boxes[3] == boxes[5] && boxes[3] != '@') {
        //we have winner
        gameOn = false;
        //which one
        if (boxes[3] == 'X') {
            console.log('Player WON !');
        }
        else {
            console.log('Computer WON !');
        }
        heightWinnerBoxes(3, 4, 5);
        return;
    }
    if (boxes[6] == boxes[7] && boxes[6] == boxes[8] && boxes[6] != '@') {
        //we have winner
        gameOn = false;
        //which one
        if (boxes[6] == 'X') {
            console.log('Player WON !');
        }
        else {
            console.log('Computer WON !');
        }
        heightWinnerBoxes(6, 7, 8);
        return;
    }
    if (boxes[0] == boxes[3] && boxes[0] == boxes[6] && boxes[0] != '@') {
        //we have winner
        gameOn = false;
        //which one
        if (boxes[0] == 'X') {
            console.log('Player WON !');
        }
        else {
            console.log('Computer WON !');
        }
        heightWinnerBoxes(0, 3, 6);
        return;
    }
    if (boxes[1] == boxes[4] && boxes[1] == boxes[7] && boxes[1] != '@') {
        //we have winner
        gameOn = false;
        //which one
        if (boxes[1] == 'X') {
            console.log('Player WON !');
        }
        else {
            console.log('Computer WON !');
        }
        heightWinnerBoxes(1, 4, 7);
        return;
    }
    if (boxes[2] == boxes[5] && boxes[2] == boxes[8] && boxes[2] != '@') {
        //we have winner
        gameOn = false;
        //which one
        if (boxes[2] == 'X') {
            console.log('Player WON !');
        }
        else {
            console.log('Computer WON !');
        }
        heightWinnerBoxes(2, 5, 8);
        return;
    }
    if (boxes[0] == boxes[4] && boxes[0] == boxes[8] && boxes[0] != '@') {
        //we have winner
        gameOn = false;
        //which one
        if (boxes[0] == 'X') {
            console.log('Player WON !');
        }
        else {
            console.log('Computer WON !');
        }
        heightWinnerBoxes(0, 4, 8);
        return;
    }
    if (boxes[2] == boxes[4] && boxes[2] == boxes[6] && boxes[2] != '@') {
        //we have winner
        gameOn = false;
        //which one
        if (boxes[2] == 'X') {
            console.log('Player WON !');
        }
        else {
            console.log('Computer WON !');
        }
        heightWinnerBoxes(2, 4, 6);
        return;
    }


}
function computerTurn() {
    if (!gameOn) { return; }
    let availableMoves = [];
    //add all the boxes the player not choose it
    for (let i = 1; i <= 9; i++) {
        if (!playerMoves.includes(`${i}`) && !computerMoves.includes(i)) {
            availableMoves.push(i);
        }
    }
    let randomId = availableMoves[Math.floor(Math.random() * availableMoves.length)];
    computerMoves.push(randomId);
    drawScore(1, randomId);
    checkIfThereIsAWinner();
    turns++;
    if (turns == 9) { gameOn = false; console.log('draw'); }
}
function heightWinnerBoxes(id1, id2, id3) {
    let box1 = document.getElementById(id1 + 1);
    let box2 = document.getElementById(id2 + 1);
    let box3 = document.getElementById(id3 + 1);
    box1.style.backgroundColor = "#c0cd04";
    box2.style.backgroundColor = "#c0cd04";
    box3.style.backgroundColor = "#c0cd04";
}






