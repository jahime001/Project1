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
const hint = document.querySelector('#hint')
let points = 0
const correctAudio = new Audio("/correct.mp3")
const incorrectAudio = new Audio("/ES_Glitch Beep - SFX Producer.mp3")
const clickAudio = new Audio("/Switch Click .mp3")
let hintIndex = 0
//this object holds all the questions and answers
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
        hint: ['choice2', 'choice4']
    },
    {
        question: 'What does BPM stand for?',
        answer1: 'beats per meter',
        answer2: 'band per minute',
        answer3: 'beats per minute',
        answer4: 'bang per meter',
        key: 'choice3',
        response: 'beats per minute',
        hint: ['choice2', 'choice1']
    },
    {
        question: 'How many beats are in a bar?',
        answer1: '2',
        answer2: '4',
        answer3: '6',
        answer4: '8',
        key: 'choice2',
        response: '4',
        hint: ['choice1', 'choice4']
    },
    {
        question: 'Which one of these is NOT a DAW?',
        answer1: 'FL Studio',
        answer2: 'Abelton',
        answer3: 'Davince Resolve',
        answer4: 'Logic Pro',
        key: 'choice3',
        response: 'Davinci Resolve',
        hint: ['choice1', 'choice2']
    },
    {
        question: 'What is used to stay on tempo?',
        answer1: 'Metronome',
        answer2: 'Hi-Hat',
        answer3: 'Kick',
        answer4: 'Timer',
        key: 'choice1',
        response: 'Metronome',
        hint: ['choice2', 'choice4']
    },
    {
        question: 'Which is NOT an audio file?',
        answer1: '.mp3',
        answer2: '.wave',
        answer3: '.m4a',
        answer4: '.png',
        key: 'choice4',
        response: '.png',
        hint: ['choice2', 'choice3']
    },
    {
        question: 'self-contained pieces of code that can be plugged in to DAWs to enhance their functionality are know as?',
        answer1: 'Code',
        answer2: 'Plugins',
        answer3: 'Extensions',
        answer4: 'Files',
        key: 'choice2',
        response: 'Plugins',
        hint: ['choice1', 'choice3'],
    },
    {
        question: 'Which is not a valid plugin format?',
        answer1: 'EXE',
        answer2: 'VST',
        answer3: 'AU',
        answer4: 'AAX',
        key: 'choice1',
        response: 'EXE',
        hint: ['choice3', 'choice4']
    },
    {
        question: 'What is the average bpm for a NY Drill song?',
        answer1: '20',
        answer2: '100',
        answer3: '140',
        answer4: '180',
        key: 'choice3',
        response: '140',
        hint: ['choice2', 'choice1']
    },
    {
        question: 'What is the average bpm for a Afro beats song?',
        answer1: '20',
        answer2: '100',
        answer3: '140',
        answer4: '180',
        key: 'choice2',
        response: '100',
        hint: ['choice3', 'choice1']
    },
]


let questionIndex = 0;
let counter = 15;
let correctAnwser = '';
let myInterval
function myTimer() {
    // preventDefault();
    counter--
        if(counter> -1){
            timer.innerHTML = counter
        }else{
            outOfTime() 
        }
}
function myStopFunction() {
    clearInterval(myInterval);
  }
  choice1.addEventListener('mouseover', clickAudio.play())
  choice2.addEventListener('mouseover', clickAudio.play())
  choice3.addEventListener('mouseover', clickAudio.play())
  choice4.addEventListener('mousover', clickAudio.play())



startButton.addEventListener('click', starterQuestion)

function starterQuestion(){
    // preventDefault()
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
    myInterval = setInterval(myTimer, 1000);
    myTimer()

}

nextButton.addEventListener('click', nextQuestion)

function nextQuestion(){
    myInterval = setInterval(myTimer, 1000);
    myTimer()
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
    counter = 16;
    myTimer()
    } else {
        endScreen()
    }
}



choice1.addEventListener('click', checkAnswer)
choice2.addEventListener('click', checkAnswer)
choice3.addEventListener('click', checkAnswer)
choice4.addEventListener('click', checkAnswer) //each button will run a check answer function when clicked. in the object each question has a key with the value of the id of the correct button. this function checked]s to see if the key matches up with the id of the div/button you clicked of so run the correct funtion if not run the incorrect funtion

function checkAnswer(e){
    myStopFunction()
    if (e.target.id === correctAnwser ){
        console.log('correct')
        correct();
        document.querySelector('#choice1').style.backgroundColor = 'rgb(81, 143, 230)';
document.querySelector('#choice2').style.backgroundColor = 'rgb(176, 92, 221)';
document.querySelector('#choice3').style.backgroundColor = 'rgb(81, 230, 116)';
document.querySelector('#choice4').style.backgroundColor = 'rgb(230, 185, 81)';
        // setTimeout(nextQuestion, 5000)
    }else {
        console.log('wrong')
        incorrect()
        document.querySelector('#choice1').style.backgroundColor = 'rgb(81, 143, 230)';
document.querySelector('#choice2').style.backgroundColor = 'rgb(176, 92, 221)';
document.querySelector('#choice3').style.backgroundColor = 'rgb(81, 230, 116)';
document.querySelector('#choice4').style.backgroundColor = 'rgb(230, 185, 81)';
        // e.target.style.backgroundColor = 'red'
    }
}
//correct funtion add 100 points to you score
function correct(){
    correctAudio.play()
    points = points + 100
    console.log(points)
    document.querySelector('#modal-text').innerHTML = "Correct!"
    document.querySelector('#modal-text').style.color = 'green'
    document.querySelector('#modal-subtext').innerHTML = "+100 points!"
    document.querySelector('#new-score').innerHTML = "Your new score is:"
    document.querySelector('#constant-score').innerHTML = `Score: ${points}`
    document.querySelector('#in-modal-score').innerHTML = points
    setTimeout(() => {
        modal.style.display = 'block'
      }, 100);
    return false;
}
//incorect function leaves it the same
function incorrect(){
    incorrectAudio.play()
    console.log(points)
    document.querySelector('#modal-text').innerHTML = `Incorrect, the correct answer is ${qna[questionIndex].response}.`
    document.querySelector('#modal-text').style.color = 'red'
    document.querySelector('#modal-subtext').innerHTML = " "
    document.querySelector('#new-score').innerHTML = "Your score remains at:"
    document.querySelector('#constant-score').innerHTML = `Score: ${points}`
    document.querySelector('#in-modal-score').innerHTML = points
    setTimeout(() => {
        modal.style.display = 'block'
      }, 100);
    return false;
}
function outOfTime(){
    myStopFunction()
    counter = 16;
    console.log(points)
    document.querySelector('#modal-text').innerHTML = 'Out Of Time!'
    document.querySelector('#modal-text').style.color = 'red'
    document.querySelector('#modal-subtext').innerHTML = `the correct answer was ${qna[questionIndex].response}.`
    document.querySelector('#new-score').innerHTML = "Your score remains at:"
    document.querySelector('#constant-score').innerHTML = `Score: ${points}`
    document.querySelector('#in-modal-score').innerHTML = points
    document.querySelector('#choice1').style.backgroundColor = 'rgb(81, 143, 230)';
document.querySelector('#choice2').style.backgroundColor = 'rgb(176, 92, 221)';
document.querySelector('#choice3').style.backgroundColor = 'rgb(81, 230, 116)';
document.querySelector('#choice4').style.backgroundColor = 'rgb(230, 185, 81)';
    setTimeout(() => {
        modal.style.display = 'block'
      }, 100);
    return false;
}

function endScreen(){
    if(points >= 800){
        document.querySelector('#modal-text').innerHTML = "Wow you know alot about music production!"
    document.querySelector('#modal-text').style.color = 'black'
    document.querySelector('#modal-subtext').innerHTML = ""
    document.querySelector('#new-score').innerHTML = "Your finishing  score is:"
    document.querySelector('#constant-score').innerHTML = `Score: ${points}`
    document.querySelector('#in-modal-score').innerHTML = points
    document.querySelector('#in-modal-score').style.color = 'gold'
    setTimeout(() => {
        modal.style.display = 'block'
      }, 100);
    return false;
    }else if(points >= 400){
        document.querySelector('#modal-text').innerHTML = "Not Bad!"
        document.querySelector('#modal-text').style.color = 'black'
        document.querySelector('#modal-subtext').innerHTML = ""
        document.querySelector('#new-score').innerHTML = "Your finishing  score is:"
        document.querySelector('#constant-score').innerHTML = `Score: ${points}`
        document.querySelector('#in-modal-score').innerHTML = points
        document.querySelector('#in-modal-score').style.color = 'gold'
        setTimeout(() => {
            modal.style.display = 'block'
          }, 100);
        return false;
    } else {
        document.querySelector('#modal-text').innerHTML = "Good try but i think you need to do more learning"
        document.querySelector('#modal-text').style.color = 'black'
        document.querySelector('#modal-subtext').innerHTML = ""
        document.querySelector('#new-score').innerHTML = "Your finishing  score is:"
        document.querySelector('#constant-score').innerHTML = `Score: ${points}`
        document.querySelector('#in-modal-score').innerHTML = points
        document.querySelector('#in-modal-score').style.color = 'gold'
        setTimeout(() => {
            modal.style.display = 'block'
          }, 100);
        return false;
        
    }

}
let hintLeft = 3
hint.addEventListener('click', showHint)

function showHint(){
    hintLeft--
    if(hintLeft == 0){
        alert('sorry you have no hints left')
    }else{
    document.querySelector(`#${qna[questionIndex].hint[1]}`).style.backgroundColor = 'gray';
    document.querySelector(`#${qna[questionIndex].hint[0]}`).style.backgroundColor = 'gray';
    }
}


document.querySelector('#choice1').style.backgroundColor = 'rgb(81, 143, 230)';
document.querySelector('#choice2').style.backgroundColor = 'rgb(176, 92, 221)';
document.querySelector('#choice3').style.backgroundColor = 'rgb(81, 230, 116)';
document.querySelector('#choice4').style.backgroundColor = 'rgb(230, 185, 81)';