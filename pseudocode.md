#Hangman

##User functionality
1. Player 1 should be able to submit a word or phrase (character limit?)  
2. Square/blank spaces should show up; number should correspond to length of word or phrase (including blank spaces)  
3. Player 2 should be able to submit a single letter guess. There should be a corresponding reaction on the board/canvas (either a part of the gallows/man (7 pieces) with wrong letter displayed crossed out or other OR letter revealed to corresponding square/blank space)  
4. Player 2 should be able to guess whole word or phrase at any time.  
5. Once gallows or word/phrase is "full", game is either won by Player 1 (gallows full) or Player 2 (word/phrase full).
6. Game will have start over, can be invoked at any time.


##UI
1. Basic gallows (no noose, platform, wood arm for "hanging")
2. Title header
3. Basic rules explanation?
4. Game board/canvas
5. Table with row for "blanked-out" word or phrase, row for incorrect letter guesses, row for status message  
6. Footer with more info?

##App state
1. player1Word - word or phrase submitted by Player 1, inititally blank string '' or empty array []
2. gallows - blank (append via DOM)
3. letterEntered - key input, initially blank string '' or emtpy array []
4. player2Word - string or array to hold Player 2 guesses, initially empty  
5. player2Wrong - string or array to hold Player 2 wrong guesses


##Pseudocode
Start with blank slate to allow for 7 guesses (noose, head, body, 2 arms, 2 legs):  
1. Initialize state (blank canvas).  
2. Render board - gallows  
3. Define variables    
    a. player1Word - Word submitted  
    b. Players  
        -player1 - enters the word or phrase to be guessed by Player 2  
        -player2 - guesses the word or phrase entered by Player 1  
    c. letterEntered - letter(s) submitted   
4. Event listeners (letter submit, reset game).  
    a. Handling letter submit.  
    b. Handling entire phrase submit (win/lose?). 
5. Append player2Word or player2Wrong  
6. If player2Wrong, append gallows
7. Determine win or death (state of game).  
    a. player1Word === player2Word = win
    b. gallows === full = loss
    c. render
    d. else next letterEntered
6. Handling reset game.
