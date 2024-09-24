function createGameState(){
    const gameState = ["","","","","","","","",""];
    const Mark = (player, coordinate) => (gameState[coordinate] =="") ? gameState[coordinate] = player : console.log("please try again");
// ^replace console.log with alert and add in function to loop back to current player's turn

    return {gameState, Mark}
}

function createPlayer(name){
    const playerToken =[];
    // ^array or plain value?
    const addToken = (positionX, positionY) => playerToken.push(positionX,positionY);


    return {name, playerToken, addToken}
}

function createBtn(btnNumber, positionX, positionY){
    function playerMove(player) {
        TicTacToe.Mark(player.name, btnNumber);
        player.addToken(positionX, positionY);
        // gameOver fx
    }
    
    return {positionX, positionY, playerMove};
    
}

// ----------------------------------
// something btn onclick => btn.playerMove()???

// function playerMove(player) {
//     TicTacToe.Mark(player.name,0);
//     player.addToken('L', 'U');
//     // gameOver fx
// }



const TicTacToe = createGameState();
const player1 = createPlayer('x');
const btn0 = createBtn('0', 'L', 'U');
btn0.playerMove(player1);
console.log(TicTacToe.gameState);
console.log(player1);