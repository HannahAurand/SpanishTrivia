//Template for the questions and answers class
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

//Array of instances of Questions 
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
        "How",
        "¿Cómo?",
        "¿Hola?",
        "Gato",
        "Perro",
        "¿Cómo?"
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

//Setting variable values
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
var score = 0
var currentWidth = 100


//Storing the user's answer choice in a var using an if statement

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


//Resetting the question and answers display after each question
function Display() {
    document.body.querySelector('ul').classList.remove('has-selected-wrong-answer')
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
   
} 

Display()


//compare the userChoice to the correctAnswer and add the correct number of points 
//to the score array
function compare() {
    // questionCounter++
    // button.addEventListener('click', Display)
    if (userChoice.innerHTML === questions[questionCounter].correctAnswer) {
        console.log(userChoice.innerHTML)
        console.log(questions[questionCounter].correctAnswer)
        console.log(questionCounter)
        userChoice.style.backgroundColor = "#d6f5d6"
        score += 1
        questionCounter++
        console.log(questionCounter)
        girl.style.width = currentWidth + 'px'
        currentWidth += 10
        button.addEventListener('click', Display)
        endOfQuestions()
        
    } else {
        console.log(questionCounter)
        console.log(userChoice.innerHTML)
        console.log(questions[questionCounter].correctAnswer)
        userChoice.style.backgroundColor = "#ff8b8e" 
        document.body.querySelector('ul').classList.add('has-selected-wrong-answer')
        questionCounter++
        console.log(questionCounter)
        bull.style.width = currentWidth + 'px'
        currentWidth += 10
        button.addEventListener('click', Display)
        endOfQuestions()
    }
    
}
function endOfQuestions() {
   
    if (questionCounter === questions.length) {
        question.innerText = "You earned " + score + " points!"
        button.addEventListener('click', function() {
        })
        questionCounter = 0
        score = 0
        button.innerHTML = "Restart"
        button.addEventListener('click', function () {
            window.location.reload()
        })

    }
}



function makeGirlBigger() {
    width = girl.style.width 
    width = width + 20
}

function makeBullBigger() {
    width = bull.style.width
    width = width + 20
}

/*
- when the use clicks the wrong answer, add a class to the parent container like `.has-selected-wrong-answer`
- that class has a `pointer-events: none` property
- next question button click: switch to next question and remove class

*/

