#Hangman

##App state/variables
1. player1Word - word or phrase submitted by Player 1, inititally blank string '' or empty array []
2. gallows - blank
3. letterEntered - key input, initially blank string '' or emtpy array [], must match alphabet
4. player2Word - string or array to hold Player 2 guesses, initially empty  
5. player2Wrong - string or array to hold Player 2 wrong guesses
6. alphabet - initially all letters of alphabet in string or array


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
5. letterEntered must be in alphabet  
6. If letterEntered is in player1Word then append player2Word  
7. If player2Wrong, append gallows  
8. Remove letterEntered from alphabet  
9. Determine win or death (state of game).  
    a. player1Word === player2Word = win  
    b. gallows === full = loss  
    c. render  
    d. else next letterEntered  
10. Handling reset game.  
    a. 

##Icebox
1. Saving score
2. 