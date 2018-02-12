//1. Get the html elements and set them to js variables so 
//they can be manipulated in functions easily.

//2. Set up a class object that will store the template and
//functions that will
    //a. take the questions from the JS
    //b. put the questions in the question html card
    //c. take the answers for that question from the object
    //and put them in the answer li's in the html. 
    //d. create a function that compares the user's answer choice
    // to the corret user choice. If not the same, you are
    // wrong/
    //e. if wrong, the bull increments in size
    //f. if right, the user's character increments in size.
//3. When 6 questions are answered correctly, the screen 
// prompts them that they are in the harder level.
//Once they answer 18 questions right, the screen on the 
// left changes and shows "SEGURO" in big red diagonal 
// letters, meaning that they are safe. 

//Setting html classes as variables for callback in js

var girl = document.querySelector(".girl")
var bull = document.querySelector(".bull")
var question = document.querySelector('.questionContainer')
var ansA = document.querySelector('#answer_A')
var ansB = document.querySelector('#answer_B')
var ansC = document.querySelector('#answer_C')
var ansD = document.querySelector('#answer_D')



//setting vars for the positions of the girl and the bull
var girlVert = girl.style.margin-top=//set this by calling a function
// that changes depending on the right answer or wrong answer
var girlHorz = girl.style.margin-left=""
var bullVert = bull.style.margin-top=""
var bullHorz = bull.style.margin-left=""


//if answer is correct, move the girl
function correct () {
    if () {}

 }

//if the answer is wrong, move the bull
function incorrect () {
    if () {

    }

}
