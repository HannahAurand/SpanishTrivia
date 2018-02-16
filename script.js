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

//use a loop for this?
ansA.addEventListener('click', function() {
    userChoice = ansA
})
ansB.addEventListener('click', function() {
    userChoice = ansB
})
ansC.addEventListener('click', function() {
    userChoice = ansC
})
ansD.addEventListener('click', function() {
    userChoice = ansD
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
        userChoice.style.backgroundColor = "#d6f5d6"
        score += 1
        questionCounter++
        girl.style.width = currentWidth + 'px'
        currentWidth += 10
        button.addEventListener('click', Display)
        endOfQuestions()  
    } else {
        userChoice.style.backgroundColor = "#ff8b8e" 
        document.body.querySelector('ul').classList.add('has-selected-wrong-answer')
        questionCounter++
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

