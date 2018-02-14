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