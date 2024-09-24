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


// ------------------

function mostFrequent(player) {
  return Array.from(new Set(player.playerToken)).reduce((prev, curr) =>
  player.playerToken.filter(el => el === curr).length > player.playerToken.filter(el => el === prev).length ? curr : prev
);
}

const diagonal1 = ['UL','MM', 'BR'];
const diagonal2 = ['UR', 'MM', 'BL'];
function diagonalWinCon(player, pattern) {return pattern.every(i => player.playerToken.includes(i))};

if (player.playerToken.filter((word) => word==mostFrequent(player)).length > 2 ||diagonalWinCon(player, diagonal1)||diagonalWinCon(player, diagonal2)){return 'winner!'}
let arr = ['L', 'U', 'L', 'L', 'U', 'L', 'LU', 'UL']

// ------------------




const TicTacToe = createGameState();
const player1 = createPlayer('x');
const btn0 = createBtn('0', 'L', 'U');
btn0.playerMove(player1);
console.log(TicTacToe.gameState);
console.log(player1); 