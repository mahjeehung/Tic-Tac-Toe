function createGameState(){
    const gameState = ["","","","","","","","",""];
    const Mark = (player, coordinate) => (gameState[coordinate] =="") ? gameState[coordinate] = player : console.log("please try again");
// ^replace console.log with alert and add in function to loop back to current player's turn

    return {gameState, Mark}
}

function createPlayer(playerName){
    const playerToken =[];
    // ^array or plain value?
    const addToken = (positionX, positionY, positionAbsolute) => playerToken.push(positionX,positionY, positionAbsolute);

    return {playerName, playerToken, addToken}
    // do i need to return name?
}

function createBtn(coordinate, positionX, positionY, positionAbsolute){
    function playerMove(player) {
        TicTacToe.Mark(player.playerName, coordinate);
        player.addToken(positionX, positionY, positionAbsolute);
        // gameOver fx
    }
    
    return {coordinate, positionX, positionY, positionAbsolute, playerMove};
        // do i need to return coordinate, positionX, positionY, positionAbsolute?
}




        function mostFrequent(player) {
        return Array.from(new Set(player.playerToken)).reduce((prev, curr) =>
        player.playerToken.filter(el => el === curr).length > player.playerToken.filter(el => el === prev).length ? curr : prev
        );
        }
        const diagonal1 = ['UL','MM', 'BR'];
        const diagonal2 = ['UR', 'MM', 'BL'];
        function diagonalWinCon(player, pattern) {return pattern.every(i => player.playerToken.includes(i))};
function checkForWinner(player){
    if (player.playerToken.filter((word) => word==mostFrequent(player)).length > 2 ||diagonalWinCon(player, diagonal1)||diagonalWinCon(player, diagonal2)){return 'winner!'}
    return 'no winner yet'
}

// const player1 = createPlayer('x');
// player1.addToken('L','U','UL');
// player1.addToken('L','U','MM');
// player1.addToken('L','U','BR');
// console.log(player1.playerToken);
// console.log(checkForWinner(player1));
// checkForWinner tests






// const TicTacToe = createGameState();
// const player1 = createPlayer('x');
// const btn0 = createBtn('0', 'L', 'U');
// btn0.playerMove(player1);
// console.log(TicTacToe.gameState);
// console.log(player1); 
// tests