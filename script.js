//creating a template for the questions and answers class
class Question {
    constructor (question, ansA, ansB, ansC, ansD, correctAnswer) {
        this.question = question
        this.ansA = ansA
        this.ansB = ansB
        this.ansC = ansC
        this.ansD = ansD
        this.correctAnswer = correctAnswer
    }
}

var questions = [
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


var girl = document.querySelector(".girl")
var bull = document.querySelector(".bull")
var question = document.querySelector('.questionsContainer')
var ansA = document.querySelector('#answer_A')
var ansB = document.querySelector('#answer_B')
var ansC = document.querySelector('#answer_C')
var ansD = document.querySelector('#answer_D')
var li = document.getElementsByTagName('li')
var questionCounter = 0
var button = document.querySelector('.nextQuestion')
console.dir(button)

console.log(li)
//Storing the user's answer choice in a var using an if statement

// function Choice() {
//     if (ansA.addEventListener('click')=true) {
//         Choice = ansA
//     } else if (ansB.addEventListener('click')=true) {
//         Choice = ansB
//     } else if (ansC.addEventListener('click'=true) {
//         Choice = ansC
//     } else if (ansD.addEventListener('click'=true) {
//         Choice = ansD
//     }   
// }

ansA.addEventListener('click', function() {
    userChoice = ansA
    console.dir(userChoice)
})

ansB.addEventListener('click', function() {
    userChoice = ansB
    console.dir(userChoice)
})

ansC.addEventListener('click', function() {
    userChoice = ansC
    console.dir(userChoice)
})

ansD.addEventListener('click', function() {
    userChoice = ansD
    console.dir(userChoice)
})

//var Choice = Choice()

//Function to display the questions and answers in the display
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

    // questions.forEach(function () {

    // })

function Display() {
    ansA.style.backgroundColor = "white"
    ansB.style.backgroundColor = "white"
    ansC.style.backgroundColor = "white"
    ansD.style.backgroundColor = "white"

    question.innerText = questions[questionCounter].question
        ansA.innerText = questions[questionCounter].ansA
        ansB.innerText = questions[questionCounter].ansB
        ansC.innerText = questions[questionCounter].ansC
        ansD.innerText = questions[questionCounter].ansD
        ansA.addEventListener('click', compare)
        ansB.addEventListener('click', compare)
        ansC.addEventListener('click', compare)
        ansD.addEventListener('click', compare)
    // questions.forEach(function (q, i) {
        // console.log(q)
//         question.innerText = q.question
//         ansA.innerText = q.ansA
//         ansB.innerText = q.ansB
//         ansC.innerText = q.ansC
//         ansD.innerText = q.ansD
//         ansA.addEventListener('click', compare)
//         ansB.addEventListener('click', compare)
//         ansC.addEventListener('click', compare)
//         ansD.addEventListener('click', compare)
//         if (i === questions.length) {
//             question.innerText = "Your score is " + finalScore + " out of 10."
//         }
//     })
} 

Display()

//compare the userChoice to the correctAnswer and add the correct number of points 
//to the score array
function compare() {
    if (userChoice.innerHTML === questions[questionCounter].correctAnswer) {
        userChoice.style.backgroundColor = "#d6f5d6"
        // score += 1
        questionCounter++
        button.addEventListener('click', Display)
    } else {
        console.log(userChoice.innerHTML)
        console.log(questions[questionCounter].correctAnswer)
        userChoice.style.backgroundColor = "#ff8b8e" 
    }
    //change display so that the next question gets displayed after a delayed timeOut
}

// button.addEventListener('click', girl.style.width="")

