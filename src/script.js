const startButton = document.querySelector('#start')
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
// const score = parseInt(document.querySelector('#score').innerHTML)
// console.log(score)
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
        key: 'choice1',
        response: 'Tempo',
        hint: ''
    },
    {
        question: 'What does BPM stand for?',
        answer1: 'beats per meter',
        answer2: 'band per minute',
        answer3: 'beats per minute',
        answer4: 'bang per meter',
        key: 'choice3',
        response: 'beats per minute',
    },
    {
        question: 'How many beats are in a bar?',
        answer1: '2',
        answer2: '4',
        answer3: '6',
        answer4: '8',
        key: 'choice2',
    },
    {
        question: 'Which one of these is NOT a DAW?',
        answer1: 'FL Studio',
        answer2: 'Abelton',
        answer3: 'Davince Resolve',
        answer4: 'Logic Pro',
        key: 'choice3',
    },
    {
        question: 'What is used to stay on tempo?',
        answer1: 'Metronome',
        answer2: 'Hi-Hat',
        answer3: 'Kick',
        answer4: 'Timer',
        key: 'choice1',
    },
    {
        question: 'Which is NOT an audio file?',
        answer1: '.mp3',
        answer2: '.wave',
        answer3: '.m4a',
        answer4: '.png',
        key: 'choice4'
    },
    {
        question: 'self-contained pieces of code that can be plugged in to DAWs to enhance their functionality are know as?',
        answer1: 'Code',
        answer2: 'Plugins',
        answer3: 'Extensions',
        answer4: 'Files',
        key: 'choice2'
    },
    {
        question: 'Which is not a valid plugin format?',
        answer1: 'JPG',
        answer2: 'VST',
        answer3: 'AU',
        answer4: 'AAX',
        key: 'choice1'
    },
    {
        question: 'What is the average bpm for a NY Drill song?',
        answer1: '20',
        answer2: '100',
        answer3: '140',
        answer4: '180',
        key: 'choice3'
    },
    {
        question: 'What is the average bpm for a Afro beats song?',
        answer1: '20',
        answer2: '100',
        answer3: '140',
        answer4: '100',
        key: 'choice2'
    },
]

let questionIndex = 0;
let counter = 25
let correctAnwser = '';


startButton.addEventListener('click', starterQuestion)

function starterQuestion(){
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
    document.querySelector('.starter-screen').style.display = 'none'


}

nextButton.addEventListener('click', nextQuestion)

function nextQuestion(){
    questionIndex = questionIndex + 1
    console.log(questionIndex)
    if(questionIndex < 11){
    questionNumber.innerHTML = `${questionIndex}/10`
    console.log(qna[questionIndex])
    questionText.innerHTML = qna[questionIndex].question
    choice1.innerHTML = qna[questionIndex].answer1
    choice2.innerHTML = qna[questionIndex].answer2
    choice3.innerHTML = qna[questionIndex].answer3
    choice4.innerHTML = qna[questionIndex].answer4
    correctAnwser = qna[questionIndex].key
    console.log(correctAnwser)
    modal.style.display = 'none'
    } else {
        endScreen()
    }
}
let lookingFor = console.log(qna[questionIndex].response)
    console.log(lookingFor)


choice1.addEventListener('click', checkAnswer)
choice2.addEventListener('click', checkAnswer)
choice3.addEventListener('click', checkAnswer)
choice4.addEventListener('click', checkAnswer)

function checkAnswer(e){
    if (e.target.id === correctAnwser ){
        console.log('correct')
        correct();
        // setTimeout(nextQuestion, 5000)
    }else {
        console.log('wrong')
        incorrect()
        // e.target.style.backgroundColor = 'red'
    }
}

function correct(){
    points = points + 100
    console.log(points)
    document.querySelector('#modal-text').innerHTML = "Correct!"
    document.querySelector('#modal-text').style.color = 'green'
    document.querySelector('#modal-subtext').innerHTML = "+100 points!"
    document.querySelector('#new-score').innerHTML = "Your new score is:"
    document.querySelector('#constant-score').innerHTML = points
    document.querySelector('#in-modal-score').innerHTML = points
    setTimeout(() => {
        modal.style.display = 'block'
      }, 1000);
    return false;
}

function incorrect(){
    console.log(points)
    document.querySelector('#modal-text').innerHTML = `Incorrect, the correct answer is ${lookingFor}.`
    document.querySelector('#modal-text').style.color = 'red'
    document.querySelector('#modal-subtext').innerHTML = " "
    document.querySelector('#new-score').innerHTML = "Your score remains at:"
    document.querySelector('#constant-score').innerHTML = points
    document.querySelector('#in-modal-score').innerHTML = points
    setTimeout(() => {
        modal.style.display = 'block'
      }, 1000);
    return false;
}


function endScreen(){
    if(points >= 800){
        document.querySelector('#modal-text').innerHTML = "Wow you know alot about music production!"
    document.querySelector('#modal-text').style.color = 'black'
    document.querySelector('#modal-subtext').innerHTML = ""
    document.querySelector('#new-score').innerHTML = "Your finishing  score is:"
    document.querySelector('#constant-score').innerHTML = points
    document.querySelector('#in-modal-score').innerHTML = points
    document.querySelector('#in-modal-score').style.color = 'gold'
    setTimeout(() => {
        modal.style.display = 'block'
      }, 1000);
    return false;
    }else if(points >= 400){

    } else {

    }
}



// setInterval(function(){
//     counter--
//     if(counter>=0){
//         timer.innerHTML = counter
//     }
// }, 1000)