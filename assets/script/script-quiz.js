const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

var dificuldade = window.localStorage.getItem('dificuldade');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []


let questions = [
    {
        question: 'Marque a alternativa que corresponde à quantidade correta de estados do Brasil.',
        choice1: '26 estados e 1 Distrito Federal',
        choice2: '25 estados',
        choice3: '25 estados e 1 Distrito Federal',
        choice4: '27 estados',
        answer: 1,
    },
    {
        question: 'Qual é a capital de São Paulo?',
        choice1: 'São Paulo',
        choice2: 'Rio de Janeiro',
        choice3: 'Brasilia',
        choice4: 'Vitória',
        answer: 1,
    },
    {
        question: 'Qual é a capital da Bahia?',
        choice1: 'Vitória',
        choice2: 'Rio de Janeiro',
        choice3: 'Brasilia',
        choice4: 'Salvador',
        answer: 4,
    },
    {
        question: 'Qual é a capital do Rio de Janeiro?',
        choice1: 'São Paulo',
        choice2: 'Rio de Janeiro',
        choice3: 'Brasilia',
        choice4: 'Vitória',
        answer: 2,
    },
    {
        question: 'Qual é a capital do Brasil?',
        choice1: 'São Paulo',
        choice2: 'Rio de Janeiro',
        choice3: 'Brasilia',
        choice4: 'Salvador',
        answer: 3,
    },
    {
        question: 'Qual é a capital do Espírito Santo?',
        choice1: 'São Paulo',
        choice2: 'Rio de Janeiro',
        choice3: 'Brasilia',
        choice4: 'Vitória',
        answer: 4,
    },
    {
        question: 'Qual é o maior estado brasileiro?',
        choice1: 'São Paulo',
        choice2: 'Rio de Janeiro',
        choice3: 'Amazonas',
        choice4: 'Bahia',
        answer: 3,
    },
    {
        question: 'Qual é a capital do Paraná?',
        choice1: 'Curitiba',
        choice2: 'Porto Alegre',
        choice3: 'Cuiabá',
        choice4: 'Teresina',
        answer: 1,
    },
    {
        question: 'Quantos estados tem na região do Nordeste?',
        choice1: 'Oito',
        choice2: 'Sete',
        choice3: 'Nove',
        choice4: 'Seis',
        answer: 3,
    },
    {
        question: 'Quantos estados tem na região do Norte?',
        choice1: 'Oito',
        choice2: 'Sete',
        choice3: 'Seis',
        choice4: 'Nove',
        answer: 2,
    },
    {
        question: 'Quantos estados tem na região do Sudeste?',
        choice1: 'Cinco',
        choice2: 'Três',
        choice3: 'Quatro',
        choice4: 'Seis',
        answer: 3,
    },
    {
        question: 'Quantos estados tem na região do Centro-Oeste?',
        choice1: 'Quatro',
        choice2: 'Cinco',
        choice3: 'Três',
        choice4: 'Seis',
        answer: 1,
    },
    {
        question: 'Quantos estados tem na região do Sul?',
        choice1: 'Quatro',
        choice2: 'Cinco',
        choice3: 'Sete',
        choice4: 'Três',
        answer: 4,
    },
    {
        question: 'Acre, Amapá, Amazonas, Pará, Rondônia, Roraima e Tocantis. Esses estados fazem parte de qual região do Brasil?',
        choice1: 'Norte', 
        choice2: 'Centro-Oeste',
        choice3: 'Sul',
        choice4: 'Sudeste',
        answer: 1,
    },
    {
        question: 'Qual estado é correspondente à sigla PA?',
        choice1: 'Paraíba',
        choice2: 'Pará',
        choice3: 'Pernambuco',
        choice4: 'Piauí',
        answer: 2,
    },
    {
        question: 'Qual estado é correspondente à sigla AM?',
        choice1: 'Amapá',
        choice2: 'Amazonas',
        choice3: 'Ceará',
        choice4: 'Piauí',
        answer: 2,
    },

    {
        question: 'Acre, Amapá, Amazonas, Pará, Rondônia, Roraima e Tocantis. Esses estados fazem parte de qual região do Brasil?',
        choice1: 'Sudeste',
        choice2: 'Centro-Oeste',
        choice3: 'Sul',
        choice4: 'Norte',
        answer: 4,
    },
	{
        question: 'Para que foi construida Brasília?',
        choice1: 'Para cediar a Copa do Mundo',
        choice2: 'Para enfeitar o Brasil',
        choice3: 'Para cediar as Olimpíadas',
        choice4: 'Para ser a capital do Brasil',
        answer: 4,
    },
	{
        question: 'Qual região abrange a menor porcentagem de terra?',
        choice1: 'Norte',
        choice2: 'Sul',
        choice3: 'Nordeste',
        choice4: 'Sudeste',
        answer: 2,
    },
    {
        question: 'Qual é a cidade mais populosa do Brasil?',
        choice1: 'Amazonas',
        choice2: 'São Paulo',
        choice3: 'Rio de Janeiro',
        choice4: 'Bahia',
        answer: 2,
    },
	{
        question: 'Qual estado é correspondente à sigla PE?',
        choice1: 'Paraíba',
        choice2: 'Pará',
        choice3: 'Pernambuco',
        choice4: 'Piauí',
        answer: 3,
    },
    {
        question: 'Qual estado é correspondente à sigla PR?',
        choice1: 'Paraíba',
        choice2: 'Pará',
        choice3: 'Paraná',
        choice4: 'Piauí',
        answer: 3,
    },
    {
        question: 'Marque a alternativa que corresponde, respectivamente, os estados brasileiros que apresentam a maior e a menor extensão territorial.',
        choice1: 'Amazonas e Acre',
        choice2: 'Pará e Alagoas',
        choice3: 'Amazonas e Sergipe', 
        choice4: 'São Paulo e Amapá',
        answer: 3,
    },
    {
        question: 'As capitais dos estados da Região Sul do Brasil são:',
        choice1: 'Cuiabá, Goiânia e Campo Grande',
        choice2: 'Curitiba, Florianópolis e Porto Alegre', 
        choice3: 'Rio de Janeiro, São Paulo e Vitória',
        choice4: 'Manaus, Belém e Porto Velho',
        answer: 2,
    },
]

     

if(dificuldade=='dificil'){

     questions = [
        {
            question: 'Para que foi construida Brasília?',
            choice1: 'Para cediar a Copa do Mundo',
            choice2: 'Para enfeitar o Brasil',
            choice3: 'Para cediar as Olimpíadas',
            choice4: 'Para ser a capital do Brasil',
            answer: 4,
        },
        {
            question: 'As capitais dos estados da Região Sul do Brasil são:',
            choice1: 'Cuiabá, Goiânia e Campo Grande',
            choice2: 'Manaus, Belém e Porto Velho',
            choice3: 'Rio de Janeiro, São Paulo e Vitória',
            choice4: 'Curitiba, Florianópolis e Porto Alegre',
            answer: 4,
        },
        {
            question: 'Quantos municípios tem o Rio Grande do Norte?',
            choice1: '120',
            choice2: '199',
            choice3: '167',
            choice4: '113',
            answer: 3,
        },
        {
            question: 'Marque a alternativa que corresponde, respectivamente, os estados brasileiros que apresentam a maior e a menor extensão territorial.',
            choice1: 'Amazonas e Sergipe',
            choice2: 'Pará e Alagoas',
            choice3: 'São Paulo e Amapá',
            choice4: 'Amazonas e Acre',
            answer: 1,
        },
        {
            question: 'Qual estado da região do nordeste tem o menor numero de população?',
            choice1: 'Paraíba',
            choice2: 'Sergipe',
            choice3: 'Piaúi',
            choice4: 'Alagoas',
            answer: 2,
        },
        {
            question: 'Quantos habitantes possuí o estado de São Paulo',
            choice1: '49 milhões',
            choice2: '39 milhões',
            choice3: '46 milhões',
            choice4: '51 milhões',
            answer: 3,
        },
        {
            question: 'Qual estado do Brasil possuí o menor IDH',
            choice1: 'Pará',
            choice2: 'Amazonas',
            choice3: 'Sergipe',
            choice4: 'Maranhão',
            answer: 4,
        },
        {
            question: 'Qual é a expectativa de vida no Brasil?',
            choice1: '75,3 anos',
            choice2: '76,6 anos',
            choice3: '77,2 anos',
            choice4: '73,8 anos',
            answer: 2,
        },
        {
            question: 'Quantos deputados federais e estatudais possuí o estado do Amapá respectivamente?',
            choice1: '8 e 24 Representantes',
            choice2: '12 e 36 Representantes',
            choice3: '8 e 25 Representantes',
            choice4: '18 e 42 Representantes',
            answer: 1,
        },
        {
            question: 'Qual estado brasileiro possuí o maior IDH?',
            choice1: 'Distrito Federal',
            choice2: 'Santa Catarina',
            choice3: 'São Paulo',
            choice4: 'Goiás',
            answer: 1,
        },
        {
            question: 'Qual é o estado da região do norte que possuí o maior PIB?',
            choice1: 'Para',
            choice2: 'Amazonas',
            choice3: 'Tocantins',
            choice4: 'Amapá',
            answer: 4,
        },
    ]
}


var SCORE_POINTS = 80;
var MAX_QUESTIONS = 5;

if(dificuldade=='facil'){
    MAX_QUESTIONS = 5;
    SCORE_POINTS = 80;
}if(dificuldade=='medio'){
    MAX_QUESTIONS = 10;
    SCORE_POINTS = 90;
}if(dificuldade=='dificil'){
    MAX_QUESTIONS = 10;
    SCORE_POINTS = 120;
}

window.localStorage.removeItem('dificuldade');


startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter == MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html')
    }

    questionCounter++;
    progressText.innerText = `Pergunta ${questionCounter} de ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e =>{
        if(!acceptingAnswers) return
        
        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame();