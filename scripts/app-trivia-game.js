const triviaData = {
    "trivaList": [
        {
            "triviaQ": "The capital of Florida is Miami.",
            "triviaA": true
        },
        {
            "triviaQ": "The capital of California is Sacramento.",
            "triviaA": true
        },
        {
            "triviaQ": "The United States was founded in 1998.",
            "triviaA": true
        },
        {
            "triviaQ": "Albert Einstein is Magician",
            "triviaA": true
        },
        {
            "triviaQ": "The inventor of the first computer is Alan Turing.",
            "triviaA": true
        }
    ]
};


// Variables to keep track of score
let playerScore, triviaIndex

// Setting multiple variable with the same value
const resetNumber = () => playerScore=triviaIndex = 0;

// Question DOM
const questionDisplay = document.querySelectorAll('h1')[0];

const updateIndex         = () => triviaIndex ++
const updatePlayerScore   = () => playerScore ++

const getUserTriviaAnswer = () => triviaData.trivaList[triviaIndex]
const getTriviaDataTotal  = () => triviaData.trivaList.length
const getTriviaAnswer     = paramIndex => triviaData.trivaList[paramIndex].triviaA
const getTriviaQuestion   = paramIndex => triviaData.trivaList[paramIndex].triviaQ
const renderHTML          = (paramWhere, paramDisplay) => paramWhere.innerText = paramDisplay

const displayButton = paramButton => document.querySelectorAll(paramButton)[0]

// Handle for onClick 
const handleTrivia = paramBoolean => {
    getUserTriviaAnswer && getTriviaAnswer(triviaIndex) === paramBoolean ? updatePlayerScore() : null;
    nextQuestion();
}

function nextQuestion() {
    updateIndex();

    if (triviaIndex >= getTriviaDataTotal()) {
        displayTriviaButton(true)
        renderHTML(questionDisplay, `Your score is ${playerScore} / ${getTriviaDataTotal()}.`)        
    } else renderHTML(questionDisplay, getTriviaQuestion(triviaIndex))
}

function replay() {
    displayTriviaButton(false)
    resetNumber()
    renderHTML(questionDisplay, getTriviaQuestion(0))
}

function displayTriviaButton(flag) {
    switch (flag) {
        case true:
            displayButton('.btn-container-question').style.display = 'none'
            displayButton('.btn-container-replay').style.display = 'block'
            break
            
        default:
            displayButton('.btn-container-question').style.display = 'block'
            displayButton('.btn-container-replay').style.display = 'none'
            break
    }
}


// Start
resetNumber()
displayTriviaButton(false)
renderHTML(questionDisplay, getTriviaQuestion(triviaIndex))