const createGameState = function (){
    const gameState = ["","","","","","","","",""];
    const Mark = (player, coordinate) => (gameState[coordinate] =="") ? gameState[coordinate] = player : console.log("please try again");
// ^replace console.log with alert and add in function to loop back to current player's turn

    return {gameState, Mark}
}

const createPlayer = function(name){
    const playerToken =[];
    // ^array or plain value?
    const addToken = (position) => playerToken.push(position);


    return {name}
}




function btn0(player) {
    TicTacToe.Mark(player,0);
}



const TicTacToe = createGameState();
btn0('x');
console.log(TicTacToe.gameState);