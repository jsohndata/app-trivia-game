const triviaData = {
    "trivaList": [
        {
            "triviaQ": "The capital of Florida is Miami.",
            "triviaA": false
        },
        {
            "triviaQ": "The capital of California is Sacramento.",
            "triviaA": true
        },
        {
            "triviaQ": "The United States was founded in 1998.",
            "triviaA": false
        },
        {
            "triviaQ": "Albert Einstein is Magician",
            "triviaA": false
        },
        {
            "triviaQ": "The inventor of the first computer is Alan Turing.",
            "triviaA": true
        }
    ]
};

const question = document.querySelectorAll('h1')[0];

// Variables to keep track of score
let playerScore = 0
let triviaIndex = 0


question.innerText = triviaData.trivaList[triviaIndex].triviaQ;

function handleTrue() {
    const currentQuestionObject = triviaData.trivaList[triviaIndex]

    if (currentQuestionObject && currentQuestionObject.triviaA == true) {
        playerScore ++
    }

    nextQuestion()
}

function handleFalse() {
    const currentQuestionObject = triviaData.trivaList[triviaIndex]

    if (currentQuestionObject && currentQuestionObject.triviaA == false) {
        playerScore ++
    }

    nextQuestion()
}

function nextQuestion() {
    triviaIndex ++
    if (triviaIndex >= triviaData.trivaList.length) {

        const yourFinalScore = `Your score is ${playerScore} / ${triviaData.trivaList.length}.`
        question.innerText = yourFinalScore

        shouldHideAnswerButtons(true)
    } else {
        question.innerText = triviaData.trivaList[triviaIndex].triviaQ
    }
}

function replay() {
    shouldHideAnswerButtons(false)
    playerScore = 0
    triviaIndex = 0

    question.innerText = triviaData.trivaList[triviaIndex].triviaQ
}

function shouldHideAnswerButtons(flag) {
    const buttonTrue = document.querySelectorAll('.btn-true')[0]
    const buttonFalse = document.querySelectorAll('.btn-false')[0]
    const buttonReplay = document.querySelectorAll('.btn-replay')[0]

    if (flag == true) {
        buttonTrue.style.opacity = 0
        buttonFalse.style.opacity = 0
        buttonReplay.style.opacity = 1        
    } else {
        buttonTrue.style.opacity = 1
        buttonFalse.style.opacity = 1
        buttonReplay.style.opacity = 0        
    }
}