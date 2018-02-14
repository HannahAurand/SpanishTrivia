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


//Storing the user's answer choice in a var using an if statement

function Choice() {
    if (ansA.addEventListener('click')=true) {
        Choice = ansA
    } else if (ansB.addEventListener('click')=true) {
        Choice = ansB
    } else if (ansC.addEventListener('click'=true) {
        Choice = ansC
    } else if (ansD.addEventListener('click'=true) {
        Choice = ansD
    }
    
}

var Choice = Choice()

//setting vars for the positions of the girl and the bull
//set this by calling a function that changes depending on 
// the right answer or wrong answer

var girlVert = girl.style.marginTop
var girlHorz = girl.style.marginLeft
var bullVert = bull.style.marginTop
var bullHorz = bull.style.marginLeft

//move the girl forward on correct answer

// if (Choice === correctAnswer) {
//     // do this

// } else {
//     // do this
// }

// if (Choice === correctAnswer) {
//     function correctMove () {
//         parseFloat(girlHorz, girlVert)
//         girlHorz = girlHorz - 15;
//         girlVert = girlVert + 30;
//     } else {
//         function incorrectMove () {
//         parseFloat(bullHorz, bullVert)
//         bullHorz = bullHorz - 15;
//         bullVert = bullVert + 30;
//         }
//     }
// }

//Function to display the questions and answers in the display

function Display () {
    /*
    1. take the current value of the index and display the question
    at that index in the questions Array.

    2. listen for click event on the question answers lis
    3. when clicked, compare clicked answer to correct answer
    4. A. If correct: let the user know they got the right answer
    4. B. If incorrect: let the user know they got the wrong answer
    5. set a timeout (i.e. delay) for ~500ms then switch to next question:
        - check if a next question
        - if a next question:
            - increment index number
            - display the question at the new index
        - else, display their score or something

    */
}

//creating a template for the questions and answers class
class Question {
    constructor (question, ansA, ansB, ansC, ansD, correctAnswer) {
        this.question = question
        this.ansA = ansA

        // CHANGE this
        ansB = this.ansB
        ansC = this.ansC
        ansD = this.ansD
        correctAnswer = this.correctAnswer
    }
}

var Questions = [
    new Question(
        "Hello",
        "Hallo",
        "Holla",
        "Hola",
        "Hi",
        "Hola"
    ),
    new Question (
        "How are you?",
        "¿Cómo estás?",
        "¿Hola?",
        "Gato",
        "Perro",
        "¿Cómo estás?"
    ),
    new Question (
        "Name",
        "Nombre",
        "Nominal",
        "Hambre",
        "Hombre",
        "Nombre"
    ),
    new Question (
        "Bottle",
        "Bebida",
        "Hambre",
        "Botella",
        "Bebé",
        "Botella"
    ),
    new Question (
        "Water",
        "Aqua",
        "Agua",
        "Mesa",
        "Queso",
        "Agua"
    ),
    new Question (
        "Table",
        "Gato",
        "Perro",
        "Mesa",
        "Queso",
        "Mesa"
    ),
    new Question (
        "Eat",
        "Beber",
        "Comer",
        "Bailar",
        "Ir",
        "Comer"
    ),
    new Question (
        "To sleep",
        "Siesta",
        "Dormir",
        "Comer",
        "Cantar",
        "Dormir"
    ),
    new Question (
        "To love",
        "Odiar",
        "Amar",
        "Cantar",
        "Morir",
        "Amar"
    ),
    new Question (
        "To forgive",
        "Odiar",
        "Perdonar",
        "Dormir",
        "Comer",
        "Perdonar"
    ),
]

