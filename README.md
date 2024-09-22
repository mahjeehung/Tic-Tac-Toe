# Tic-Tac-Toe
A TOP Tic Tac Toe project 

plan:
(game must be playable by script alone)

brainstorming: game logic requires three in a row/column/diagonal to win:
    1. i use a player object to store number of left/middle/right or up/middle/down marks and evaluate that for gameOver condition, But this can't validate board space previously taken by players. 

    2. i store number of 'position tokens' in player object, e.g. upper left = add U and L to player object, 3 Ls = win. Distinct middle sections for both axis. Diagonals to include separately. 
    But this can't validate board space previously taken by players. 

    3. i use an object to represent gameState, e.g. gameState = {Up: {L: 1, M: null, R: null}, Middle: {L: 1, M: null, R: null}, Down: {L: 1, M: null, R: null}}.
    This can prevent illegal moves. 
    gameOver evaluation need many 'if' conditions.

    i combine ideas 1 and 3 together to have both player objects and a gameState object. One to validate gameOver, the other to prevent illegal moves.  
    Idea 3 can also use an array with 9 "" items inside.

