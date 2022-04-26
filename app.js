const myQuestion = [
  {
    questions: 'instrution answer all the question ',
    A: 'read every question carefully',
    B: 'it a very simple text',
    C: 'not meannt to try your intellence',
    D: 'wish you best of luck',
    answer: 'D'
  },
  {
    questions: 'how good are you writing javascript ?',
    A: 'very good',
    B: 'not very good',
    C: 'excellent',
    D: 'just leaning',
    answer: 'D'

  },
  {
    questions: 'what year was javascript created ?',
    A: '1996',
    B: '1964',
    C: '1970',
    D: 'none of the above',
    answer: 'B'
  },

  {
    questions: 'what is javascript use for ?',
    A: 'write website',
    B: 'add functionality to website',
    C: 'make webpage dynamic',
    D: 'make fun of website',
    answer: 'C'
  },
  {
    questions: '_____ command is use to write code the webpage ?',
    A: 'console.write',
    B: 'window.alert',
    C: 'console.log',
    D: 'document.write',
    answer: 'C'
  },

  {
    questions: 'javascript can be run in _____ ?',
    A: 'IDE',
    B: 'visual studio code',
    C: 'codepen',
    D: 'console',
    answer: 'D'
  },

  {
    questions: ' let & const is a way to declear ____ in javascript ?',
    A: 'variable',
    B: 'function',
    C: 'other',
    D: 'none of the above',
    answer: 'A'
  },

  {
    questions: '_____ function & procedurel & object oriented program ?',
    A: 'python',
    B: 'pearl',
    C: 'java',
    D: 'javascript',
    answer: 'D'
  },
  {
    questions: 'javascript is important because ?',
    A: 'is everywhere',
    B: 'is not hard to learn',
    C: 'it browser language',
    D: 'is widely known',
    answer: 'C'
  },
  {
    questions: 'javascript is _____ typed ?',
    A: 'weakly typed',
    B: 'basically typed',
    C: 'strongly typed',
    D: 'easyly typed',
    answer: 'A'

  },

  {
    questions: 'all are javascript framework accept ?',
    A: 'veu.js',
    B: 'react.js',
    C: 'angular.js',
    D: 'reactNative',
    answer: 'D'
  }
]



//  get all the element varaibles
currentQuix = 0;
 let anwers = undefined;
let score = 0;
const submit = document.querySelector('.btn');
const question = document.querySelector('#question');
const a = document.querySelector('#a-text');
const b = document.querySelector('#b-text');
const c = document.querySelector('#c-text');
const d = document.querySelector('#d-text');
const theAnswer = document.querySelectorAll('.answer')
const show = document.querySelector('.show')
const outPut = document.querySelector('.data')
// create a function to load and increment all the data
 


// load answer from sever
function loadData(){
  Dselect()
  const test = myQuestion[currentQuix]
  question.innerHTML =test.questions
  a.innerHTML =test.A
  b.innerHTML =test.B
  c.innerHTML =test.C
  d.innerHTML =test.D

}

function getAnswer(){
  let answers;
  theAnswer.forEach((answer) =>{
     if(answer.checked)
     answers = answer.id
  })

  return answers
}
function getScore(scope){
  if(scope === myQuestion[currentQuix].answer){
    score++
  }
}
function Dselect(){
  theAnswer.forEach((answer) =>{
    answer.checked = false
 })
}

submit.addEventListener('click', () => {
  const answered = getAnswer()
  getScore(answered)
  if(answered){
    currentQuix++
    if(currentQuix <  myQuestion.length){
      loadData()
    }else{
        outPut.textContent = `you have got ${score} out of ${myQuestion.length}` 
        show.classList.add('show-the')

    }
  }
  
})

document.querySelector('.reload').addEventListener('click', () =>{
  location.reload()
  // loadData()
})
loadData()