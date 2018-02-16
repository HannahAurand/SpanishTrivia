This code is for a prototype of a Spanish learning game
for kids. I used my experience as a Spanish teacher to create an array
of instances of the Questions class, gradually making the Questions
harder as they increase in index value. 

The game shows the player which answers are wrong by 
highlighting them in red (styling is done with javascript), and the
correct answer is highlighted in green. 

The quiz is designed not to let the user click on multiple answers in one
question, so that their score is not calculated incorrectly. 

Improvements/Code Review: 

1. Add more comments so others know what's going on without guessing
2. Set userChoice functions into one loop somehow to make it DRY?
3. Could I add the "endOfGame" function only once instead of twice in each if/else condition
in the compare function?
4. Store the answers in an array in the questions array so that you can randomize the answers?
Can you randomize the answers without creating an array for all the answers and changing your 
whole code? Would using the array reduce the amount of variables you would have to save as your
answers from the html
5. Change var to let and const
