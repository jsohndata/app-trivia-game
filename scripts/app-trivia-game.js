const triviaData = {
    "trivaList": [
        {
            "triviaQ": "1. Trivia Question",
            "triviaA": true
        },
        {
            "triviaQ": "2. Trivia Question",
            "triviaA": true
        },
        {
            "triviaQ": "3. Trivia Question",
            "triviaA": true
        },
        {
            "triviaQ": "4. Trivia Question",
            "triviaA": true
        },
        {
            "triviaQ": "5. Trivia Question",
            "triviaA": true
        }
    ]
};


// Variables to keep track of score
let playerScore, triviaIndex

// Setting multiple variable with the same value
const resetNumber = () => playerScore=triviaIndex = 0;

const locationH1           = () => document.querySelectorAll('h1')[0];
const locationProgressText = () => document.querySelectorAll('.position')[0];
const locationProgressBar  = () => document.querySelectorAll('.progress-bar')[0];

const getUserTriviaAnswer = () => triviaData.trivaList[triviaIndex]
const getTriviaDataTotal  = () => triviaData.trivaList.length
const getTriviaAnswer     = paramIndex => triviaData.trivaList[paramIndex].triviaA
const getTriviaQuestion   = paramIndex => triviaData.trivaList[paramIndex].triviaQ

const calcIndex           = () => triviaIndex ++
const calcPlayerScore     = () => playerScore ++
const calcRandomTrivia    = () => triviaData.trivaList.sort( () => Math.random() -0.5)
const calcScorePercetange = (paramPlayerScore, paramTriviaTotal) => paramPlayerScore / paramTriviaTotal * 100

const renderPosition      = (paramIndex, paramTotal) => `Position: ${paramIndex + 1} / ${paramTotal + 1}`
const renderFinalMessage  = (paramScore, paramTotal) => `Your score is ${paramScore} / ${paramTotal}.\n ${calcScorePercetange(paramScore, paramTotal)}%`
const renderHTML          = (paramWhere, paramDisplay) => paramWhere.innerText = paramDisplay
const renderProgressBar   = (paramWhere, paramIndex) => paramWhere.width = paramIndex * 70
const renderButton        = paramButton => document.querySelectorAll(paramButton)[0]



// Handle for onClick 
const handleTrivia = paramBoolean => {
    getUserTriviaAnswer && getTriviaAnswer(triviaIndex) === paramBoolean ? calcPlayerScore() : null;
    nextQuestion();
}



function nextQuestion() {
    renderHTML(locationProgressText(), renderPosition(triviaIndex + 1, getTriviaDataTotal() ) )
    calcIndex();
    renderProgressBar(locationProgressBar(), triviaIndex )

    if (triviaIndex >= getTriviaDataTotal()) {
        displayTriviaButton(true)
        renderHTML(locationH1(), renderFinalMessage(playerScore, getTriviaDataTotal()))
    } else renderHTML(locationH1(), getTriviaQuestion(triviaIndex))
}



function replay() {
    displayTriviaButton(false)
    resetNumber()
    calcRandomTrivia()
    renderProgressBar(locationProgressBar(), 0.5 )
    renderHTML(locationProgressText(), renderPosition(triviaIndex, getTriviaDataTotal() ) )
    renderHTML(locationH1(), getTriviaQuestion(0))
}



function displayTriviaButton(flag) {
    switch (flag) {
        case true:
            renderButton('.btn-container-question').style.display = 'none'
            renderButton('.btn-container-replay').style.display = 'block'
            break
            
        default:
            renderButton('.btn-container-question').style.display = 'block'
            renderButton('.btn-container-replay').style.display = 'none'
            break
    }
}


// Start
resetNumber()
displayTriviaButton(false)
renderProgressBar(locationProgressBar(), 0.5 )
renderHTML(locationProgressText(), renderPosition(triviaIndex, getTriviaDataTotal() ) )
renderHTML(locationH1(), getTriviaQuestion(triviaIndex))