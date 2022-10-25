const nextButton = document.querySelector('#next')
const questionNumber = document.querySelector('#question-number')
const questionText = document.querySelector('#question-text')
const displayContainer = document.querySelector('.display-container')
const choice1 = document.querySelector('#choice1')
const choice2 = document.querySelector('#choice2')
const choice3 = document.querySelector('#choice3')
const choice4 = document.querySelector('#choice4')
const timer = document.querySelector('#timer')
const modal = document.querySelector('.modal')
const modalSubtext = document.querySelector('#modal-subtext')
const score = parseInt(document.querySelector('#score').innerHTML)
console.log(score)
let points = 0

const qna = [
    {
        question: 'Your Question will appear here and bellow are your four options',
        answer1: 'Option 1',
        answer2: 'Option 2',
        answer3: 'Option 3',
        answer4: 'Option 4',
    },
    {
        question: 'The speed or pace of a song is know as the ...?',
        answer1: 'Tempo',
        answer2: 'Rythm',
        answer3: 'Key',
        answer4: 'Bpm',
        key: 'choice4'
    },
    {
        question: 'What does BPM stand for?',
        answer1: 'beats per meter',
        answer2: 'band per minute',
        answer3: 'beats per minute',
        answer4: 'bang per meter',
        key: 'choice3'
    },
    {
        question: 'q3',
        answer1: 'a1',
        answer2: 'a2',
        answer3: 'a3',
        answer4: 'a4',
    },
    {
        question: 'q4',
        answer1: 'a1',
        answer2: 'a2',
        answer3: 'a3',
        answer4: 'a4',
    },
    {
        question: 'q5',
        answer1: 'a1',
        answer2: 'a2',
        answer3: 'a3',
        answer4: 'a4',
    },
    {
        question: 'q6',
        answer1: 'a1',
        answer2: 'a2',
        answer3: 'a3',
        answer4: 'a4',
    },
    {
        question: 'q7',
        answer1: 'a1',
        answer2: 'a2',
        answer3: 'a3',
        answer4: 'a4',
    },
    {
        question: 'q8',
        answer1: 'a1',
        answer2: 'a2',
        answer3: 'a3',
        answer4: 'a4',
    },
    {
        question: 'q9',
        answer1: 'a1',
        answer2: 'a2',
        answer3: 'a3',
        answer4: 'a4',
    },
    {
        question: 'q10',
        answer1: 'a1',
        answer2: 'a2',
        answer3: 'a3',
        answer4: 'a4',
    },
]

let questionIndex = 0;
let counter = 25
let correctAnwser = '';


nextButton.addEventListener('click', nextQuestion)

function nextQuestion(){
    questionIndex = questionIndex + 1
    console.log(questionIndex)
    questionNumber.innerHTML = `${questionIndex}/10`
    console.log(qna[questionIndex])
    questionText.innerHTML = qna[questionIndex].question
    choice1.innerHTML = qna[questionIndex].answer1
    choice2.innerHTML = qna[questionIndex].answer2
    choice3.innerHTML = qna[questionIndex].answer3
    choice4.innerHTML = qna[questionIndex].answer4
    correctAnwser = qna[questionIndex].key
    console.log(correctAnwser)

}


choice1.addEventListener('click', checkAnswer)
choice2.addEventListener('click', checkAnswer)
choice3.addEventListener('click', checkAnswer)
choice4.addEventListener('click', checkAnswer)

function checkAnswer(e){
    if (e.target.id === correctAnwser ){
        console.log('correct')
        correct();
        setTimeout(nextQuestion, 5000)
    }else {
        console.log('wrong')
        // e.target.style.backgroundColor = 'red'
    }
}

function correct(){
    points = points + 100
    console.log(points)

}





// setInterval(function(){
//     counter--
//     if(counter>=0){
//         timer.innerHTML = counter
//     }
// }, 1000)