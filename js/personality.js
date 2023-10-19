// Serve an object with this structure in order to generate a quiz page
// The `correct` key is referential and should not be served

var param = {
    "extrovert" : 0,
    "introvert" : 0,
    "intuitive" : 0,
    "sensing" : 0,
    "feeling" : 0,
    "thinking" : 0,
    "judging" : 0,
    "perceiving" : 0,
};

const quiz = {
    "name": "Personality Quiz",
    "questions": [{
            "type": "single",
            "question": "1. When breaking up with someone：",
            "answers": ["You often get stuck in your emotions and find it difficult to get out.", "Although you may feel hurt, once you make up your mind, you will simply put aside the shadow of your past lover."],
            "entered": [],
            "category": "ft"
        },
        {
            "type": "single",
            "question": "2. When you attend a social gathering, you will：",
            "answers": ["When the night is deep, once you start to get involved, you may be the last one to leave.", "At the beginning of the night I'm tired and want to go home."],
            "entered": [],
            "category": "ei"
        },
        {
            "type": "single",
            "question": "3. Which of the following things sounds more attractive to you?",
            "answers": ["Go with friends to a place with lots of people and lots of social activities.", "Stay home and do something special with friends, like watching a fun video and enjoying your favorite takeaway food."],
            "entered": [],
            "category": "ei"
        },
        {
            "type": "single",
            "question": "4. On a date, you usually：",
            "answers": ["Overall very talkative.", "Be quiet and reserve until you feel comfortable."],
            "entered": [],
            "category": "ei"
        },
        {
            "type": "single",
            "question": "5. People who know you tend to describe you as：",
            "answers": ["Passionate and sensitive.", "Logical and clear."],
            "entered": [],
            "category": "ft"
        },
        {
            "type": "single",
            "question": "6. In the past, most of your friends of the opposite sex you met were：",
            "answers": ["At parties, nightclubs, at work, at leisure events, at conferences or when friends introduce me to their friends.", "Personally, such as personal ads, video dates, or introductions from close friends and family."],
            "entered": [],
            "category": "ei"
        },
        {
            "type": "single",
            "question": "7. The life you choose is full of：",
            "answers": ["Schedule and organization.", "Naturally occurring and resilient."],
            "entered": [],
            "category": "jp"
        },
        {
            "type": "single",
            "question": "8. You tend to believe：",
            "answers": ["Your intuition.", "Your direct observation and existing experience."],
            "entered": [],
            "category": "is"
        },
        {
            "type": "single",
            "question": "9. When you are in a relationship, you tend to believe：",
            "answers": ["There is always room for improvement.", "If it is not damaged, it will not be repaired."],
            "entered": [],
            "category": "is"
        },
        {
            "type": "single",
            "question": "10. In the past, your friends and colleagues have tended to say to you：",
            "answers": ["Can't you just be quiet for a while?", "Can you please come out of your world for a moment?"],
            "entered": [],
            "category": "ei"
        },
        {
            "type": "single",
            "question": "11. When you feel comfortable about a date, you tend to talk about",
            "answers": ["The future, about the possibilities of improving or inventing things and life. For example, you might talk about a new scientific invention, or a better way to express your feelings.", "Something practical, concrete, about the “here and now.” For example, you might talk about a great way to taste wine, or about a novel trip you're about to take."],
            "entered": [],
            "category": "is"
        },
        {
            "type": "single",
            "question": "12. You are this type of person：",
            "answers": ["Rather than living in reality, it is better to live in imagination.", "Rather than living in imagination, it is better to live in reality."],
            "entered": [],
            "category": "is"
        },
        {
            "type": "single",
            "question": "13. You usually：",
            "answers": ["Tends to imagine a lot of things about an upcoming date.", "I tend to imagine an upcoming date in a reserved way and just expect it to happen naturally."],
            "entered": [],
            "category": "is"
        },
        {
            "type": "single",
            "question": "14. You tend to make decisions like this：",
            "answers": ["Follow your heart first, then your logic.", "Follow your logic first, then your heart."],
            "entered": [],
            "category": "ft"
        },
        {
            "type": "single",
            "question": "15. You tend to be more aware of：",
            "answers": ["When people need emotional support.", "When people are illogical."],
            "entered": [],
            "category": "ft"
        },
        {
            "type": "single",
            "question": "16. When interacting with a person, you tend to value：",
            "answers": ["Emotional Compatibility: Shows affection and is sensitive to your partner’s needs.", "Intellectual Compatibility: Communicating important ideas; discussing and debating matters objectively."],
            "entered": [],
            "category": "ft"
        },
        {
            "type": "single",
            "question": "17. You are this type of person：",
            "answers": ["Like to focus on one thing for a period of time until it is completed.", "Enjoy doing several things at once."],
            "entered": [],
            "category": "jp"
        },
        {
            "type": "single",
            "question": "18. You regard most encounters with others as：",
            "answers": ["Friendly and important.", "There is another purpose."],
            "entered": [],
            "category": "ft"
        },
        {
            "type": "single",
            "question": "19. If you had the time and money and your friend invited you to go on vacation abroad and notified you until the day before, you would：",
            "answers": ["Must check your schedule first.", "Pack your bags immediately."],
            "entered": [],
            "category": "jp"
        },
        {
            "type": "single",
            "question": "20. You tend to have：",
            "answers": ["Many acquaintances and close friends.", "Some very close friends and some acquaintances."],
            "entered": [],
            "category": "ei"
        },
        {
            "type": "single",
            "question": "21. On first date：",
            "answers": ["If the person you made an appointment with comes late, you will be unhappy.", "Not caring at all because you yourself are often late."],
            "entered": [],
            "category": "jp"
        },
        {
            "type": "single",
            "question": "22. You prefer：",
            "answers": ["Know the date's itinerary beforehand: where you're going, who's going to be there, how long you'll be there, how you're going to dress.", "Let the date happen naturally without too much advance planning."],
            "entered": [],
            "category": "jp"
        },
        {
            "type": "single",
            "question": "23. You are this kind of person：",
            "answers": ["Like to look at the overall situation first.", "Like to master the details first."],
            "entered": [],
            "category": "is"
        },
        {
            "type": "single",
            "question": "24. Which one is more common：",
            "answers": ["You show up on time while everyone else is late.", "Everyone else shows up on time and you are late."],
            "entered": [],
            "category": "jp"
        },
        {
            "type": "single",
            "question": "25. Where do you tend to get strength from?",
            "answers": ["Other people", "My own opinion"],
            "entered": [],
            "category": "ei"
        },
        {
            "type": "single",
            "question": "26. Are you the kind of person who likes...：",
            "answers": ["Make up your mind and come to a final, positive conclusion.", "Broaden your options and keep gathering information."],
            "entered": [],
            "category": "jp"
        },
        {
            "type": "single",
            "question": "27. When you don't agree with your lover's ideas：",
            "answers": ["You try your best to avoid hurting the other person's feelings; if it would hurt the other person, you won't say anything.", "You usually speak without reservation and are forthright with your lover because what is right is right."],
            "entered": [],
            "category": "ft"
        },
        {
            "type": "single",
            "question": "28. Which of the following methods do you prefer to collect information?",
            "answers": ["Your imagination and expectations of what might happen.", "Your actual perception of the current situation."],
            "entered": [],
            "category": "is"
        },

    ]
}

// Tracks index of question on quiz
var currentQuestionIndex = 0

// Shortcut for removing duplicates from arrays
const uniq = (a) => {
    return Array.from(new Set(a));
}

// Accepts a parent id to remove all children
const removeAllChildren = (parent) => {
    let node = document.getElementById(parent)
    node.innerHTML = ``
}

// Initialization functions go here
const init = () => {
    cr_ContinueButton()
    ad_QuestionIteration()
    loadQuestion(quiz.questions[0], true)
}

// Loads a multiple choice quiz question
const loadQuestion = async (question, init) => {
    updateProgessBarStatus()
    cr_QuizQuestionText(question.question)
    if (question.type === `multiple` || question.type === `single`) {
        loadMultipleChoiceQuestion(question)
        loadPreviousEnteredChoice(question.entered)
    } else if (question.type === `short` || question.type === `long`) {
        loadTextFormQuestion()
        loadPreviousEnteredText(question.entered)
    }
    // Skips loading animation on initialization
    if (!init) {
        await MoveQuestionContainerMiddle()
    }
    ShowHideContinueButton(quiz.questions[currentQuestionIndex])
}

// Creates elements for multiple choice questions (checkboxes & radios)
const loadMultipleChoiceQuestion = (question) => {
    // Generating answer elements
    let quizAnswersUL = document.getElementById(`quiz-answer-list`)
    // questionHTML.id
    for (let i = 0; i < question.answers.length; i++) {
        let quizQuestionDIV = document.createElement(`div`)
        quizQuestionDIV.className = `quiz-answer-text-container-single unselected-answer`
        // Assigns ID as ASCII values (A = 65, B = 66, etc.)
        quizQuestionDIV.id = (i + 65).toString()
        ad_QuizSelectAnswer(quizQuestionDIV)
        // Generate elements
        let quizQuestionPress = document.createElement(`li`)
        let quizQuestionNumerator = document.createElement(`li`)
        let quizQuestionText = document.createElement(`li`)
        // Adding elements to quiz answers
        ed_QuizQuestionElements(question.type, quizQuestionPress, quizQuestionNumerator, quizQuestionDIV, quizQuestionText)
        // Convert ASCII code to text for multiple choice selection
        quizQuestionNumerator.innerText = String.fromCharCode(i + 65)
        quizQuestionText.innerText = question.answers[i]
        // Psuedoparent append
        quizQuestionDIV.append(quizQuestionPress, quizQuestionNumerator, quizQuestionText)
        // Main parent append
        quizAnswersUL.appendChild(quizQuestionDIV)
    }
}

const loadTextFormQuestion = () => {
    // Generating answer elements
    let quizAnswersUL = document.getElementById(`quiz-answer-list`)
    let questionTextarea = document.createElement(`div`);
    questionTextarea.contentEditable = true
    questionTextarea.className = `form-control question-text-form answer-typed-input-form`;
    questionTextarea.setAttribute(`id`, `questionTextarea`);
    questionTextarea.setAttribute(`data-text`, `Enter answer here...`)
    questionTextarea.setAttribute(`onkeydown`, `SaveWrittenAnswers()`)
    questionTextarea.innerHTML = ``
    quizAnswersUL.append(questionTextarea)
}

// Saves short and long form objects to local object
const SaveWrittenAnswers = () => {
    quiz.questions[currentQuestionIndex].entered[0] = document.getElementById(`questionTextarea`).innerHTML
}


// Assigns answered question attributes to elements that have been entered by user previously
const loadPreviousEnteredChoice = (entered) => {
    for (let i = 0; i < entered.length; i++) {
        selectAnswer(entered[i], true)
    }
}

// re-assigns text to short/long form questions
const loadPreviousEnteredText = () => {
    let entered = quiz.questions[currentQuestionIndex].entered
    if (entered.length > 0) {
        let answer = document.getElementById(`questionTextarea`)
        answer.innerHTML = entered[0]
    }
}

// Moves question off screen in a given direction
const MoveQuestionContainer = (first = `up`, second = `down`) => {
    return new Promise((resolve, reject) => {
        // Assigning correct class
        first = `move-container-` + first
        second = `move-container-` + second
        let parent = document.getElementById(`quiz-question-container`);
        parent.classList.add(first, `fadeout`, `fast-transition`);
        setTimeout(() => {
            parent.classList.remove(first, `fast-transition`)
            parent.classList.add(`no-transition`, second)
            resolve()
        }, 200)
    })

}

// Re-centers question on page
const MoveQuestionContainerMiddle = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let parent = document.getElementById(`quiz-question-container`);
            parent.classList.remove(`no-transition`, `fadeout`);
            parent.classList.add(`fast-transition`, `fadein`)
            parent.style.top = `0`
            parent.classList.remove(`move-container-down`, `move-container-up`)
            setTimeout(() => {
                parent.classList.remove(`fadein`)
                resolve()
            }, 200)
        }, 50)
    })
}

// Adds class names to quiz question based on which type of which it is
const ed_QuizQuestionElements = (type, press, numerator, container, text) => {
    // Append classes for different types of questions
    if (type == `single`) {
        // Radio button classes
        press.className = `press-key-label press-label-radio answer-key-numerator unselected-answer-button`
        numerator.className = `answer-key-numerator numerator-radio unselected-answer-button`
        container.classList.add(`question-type-single`)
    } else if (type == `multiple`) {
        // Checkbox classes
        press.className = `press-key-label press-label-checkbox answer-key-numerator unselected-answer-button`
        numerator.className = `answer-key-numerator numerator-checkbox unselected-answer-button`
        container.classList.add(`question-type-multiple`)
    }
    text.className = `quiz-answer-text-item`
    press.innerText = `Press`
}

// Assigns the question's text 
const cr_QuizQuestionText = (question) => {
    // Generating question text
    let quizQuestionTextDIV = document.getElementById(`quiz-question-text-container`)
    let quizQuestionTextSPAN = document.createElement(`span`)
    quizQuestionTextSPAN.className = `quiz-question-text-item`
    quizQuestionTextSPAN.innerText = question
    quizQuestionTextDIV.appendChild(quizQuestionTextSPAN)
}

// Creates continue button
const cr_ContinueButton = () => {
    let continueDIV = document.createElement(`div`)
    let continueBUTTON = document.createElement(`button`)
    let continueSPAN = document.createElement(`span`)
    continueDIV.id = `quiz-continue-button-container`
    continueDIV.className = `quiz-continue-button-container`
    continueBUTTON.className = `quiz-continue-button`
    continueBUTTON.id = `quiz-continue-button`
    continueSPAN.className = `quiz-continue-text`
    continueSPAN.id = `quiz-continue-text`
    continueBUTTON.innerHTML = `Next`
    // Moves to next question on click
    continueBUTTON.onclick = function() {
        loadNewQuestion(`next-question-load`)
    }
    continueSPAN.innerHTML = `press ENTER`
    continueDIV.append(continueBUTTON, continueSPAN)
    let parent = document.getElementById(`quiz-question-container`)
    parent.append(continueDIV)
    // Discerns whether or not to show continue button, based on whether or not an answer has been input/selected
    ShowHideContinueButton(quiz.questions[currentQuestionIndex])
}

const ch_ContinueButton = () => {
    let continueDIV = document.getElementById(`quiz-continue-button-container`)
    let continueBUTTON = document.getElementById(`quiz-continue-button`)
    let continueSPAN = document.getElementById(`quiz-continue-text`)
    continueBUTTON.innerHTML = `Submit`
    continueSPAN.innerHTML = `click`
    // Moves to next question on click
    continueBUTTON.onclick = function() {
        setParam();
        httpPost("personality.php",param)
    }
    continueDIV.append(continueBUTTON, continueSPAN)
    let parent = document.getElementById(`quiz-question-container`)
    parent.append(continueDIV)
    // Discerns whether or not to show continue button, based on whether or not an answer has been input/selected
    ShowHideContinueButton(quiz.questions[currentQuestionIndex])
}

function setParam(){
    for(let i = 0; i < quiz.questions.length; i++){
        if(quiz.questions[i].category === "ei"){
            if(quiz.questions[i].entered[0] === '65' ){
                param.extrovert++
            }
            else if(quiz.questions[i].entered[0] === '65'){
                param.introvert++
            }
        }
        else if(quiz.questions[i].category === "is"){
            if(quiz.questions[i].entered[0] === '65' ){
                param.intuitive++
            }
            else if(quiz.questions[i].entered[0] === '65'){
                param.sensing++
            }
        }
        else if(quiz.questions[i].category === "ft"){
            if(quiz.questions[i].entered[0] === '65' ){
                param.feeling++
            }
            else if(quiz.questions[i].entered[0] === '65'){
                param.thinking++
            }
        }
        else if(quiz.questions[i].category === "jp"){
            if(quiz.questions[i].entered[0] === '65' ){
                param.judging++
            }
            else if(quiz.questions[i].entered[0] === '65'){
                param.perceiving++
            }
        }
    }
}

//post request
function httpPost(url,params) {
    var formEltTemp = document.createElement("form"); //增加表单，隐藏方式
    formEltTemp.action = url;
    formEltTemp.method = "post";
    formEltTemp.style.display = "none"; //隐藏这个form

    //通过for..in来遍历params这个json数组对象
    for(var key in params){
        var opt = document.createElement("textarea"); //新建一个文本框元素
        opt.name = key; //设置文本框的name属性
        opt.value = params[key]; //设置文本框的value属性
        formEltTemp.appendChild(opt); //把opt这个文本框加入到form表单中
    }

    document.body.appendChild(formEltTemp);//把增加的这个form表单添加到body中
    formEltTemp.submit(); //提交表单
    return formEltTemp;
}

// Only shows a continue button if a question is selected
const ShowHideContinueButton = (question) => {
    if (question.type === 'short' || question.type === `long`) {
        document.getElementById(`quiz-continue-button-container`).style.display = `initial`
        document.getElementById(`quiz-continue-text`).style.display = `none`
    } else {
        let show = document.getElementById(`quiz-answer-list`).children
        let buttonContainer = document.getElementById(`quiz-continue-button-container`)
        document.getElementById(`quiz-continue-text`).style.display = `initial`
        // Checks if an answer has been selected. If so, shows continue button
        for (let i = 0; i < show.length; i++) {
            if (show[i].classList.contains(`selected-answer`)) {
                buttonContainer.style.display = `initial`
                return
            }
        }
        // If no answer is selected, don't display button
        buttonContainer.style.display = `none`
    }
}

// Function to load next question & possible answers in object
const loadNewQuestion = async (adjustment) => {
    // Saves written answers before moving on to next question
    let type = quiz.questions[currentQuestionIndex].type
    if (type === 'long' || type === 'short') {
        SaveWrittenAnswers()
    }
    // Removes previous question & answers
    if (canLoadNewQuestion(adjustment)) {
        await QuestionContainerLoad(adjustment)
        removeAllChildren(`quiz-answer-list`)
        removeAllChildren(`quiz-question-text-container`)
        // Displays previous questions. Does nothing if no questions to load.
        if (adjustment === `previous-question-load`) {
            loadQuestion(quiz.questions[currentQuestionIndex])
            // Displays next question. Does nothing if no questions to load.
        } else if (adjustment === `next-question-load` && currentQuestionIndex <= quiz.questions.length) {
            loadQuestion(quiz.questions[currentQuestionIndex])
            console.log(currentQuestionIndex)
        }
    }
}

// Checks if we have reached the first or last question
const canLoadNewQuestion = (adjustment) => {
    // In/de-crement based on if user is loading next or previous question
    if (adjustment === `next-question-load`) {
        currentQuestionIndex++
    } else {
        currentQuestionIndex--
    }
    if (currentQuestionIndex === quiz.questions.length - 1) {
        ch_ContinueButton()
    }
    // Fail safe if we have reached last quesiton
    if (currentQuestionIndex > quiz.questions.length - 1) {
        currentQuestionIndex--
        return false
        // Fail safe if trying to move before first question
    } else if (currentQuestionIndex < 0) {
        currentQuestionIndex++
        return false
    }
    return true

}

// Discerns which direction the question will fly on/off the page
const QuestionContainerLoad = (adjustment) => {
    return new Promise(async (resolve, reject) => {
        if (adjustment === 'next-question-load') {
            // Moves container up off the screen
            await MoveQuestionContainer(`up`, `down`)
        } else {
            // Moves container down off the screen
            await MoveQuestionContainer(`down`, `up`)
        }
        resolve()
    })
}

// Highlights and unhighlights given answers when a keytap is pressed 
// key indicates the id of the given answer, invoking previous will prevent the function from editing the local answered questions object
const selectAnswer = (key, previous) => {
    let answer = document.getElementById(key)
    if (answer) {
        // If only one answer can be given, unselect all answers before reselecting new answer
        if (answer.classList.contains(`question-type-single`)) {
            unselectAllAnswers(document.getElementById('quiz-answer-list'))
        }
        // If answer is not yet selected, select it
        if (answer.classList.contains(`unselected-answer`)) {
            answer.classList.add(`selected-answer`)
            answer.classList.remove(`unselected-answer`)
            indicateSelectedAnswer(answer)
            if (!previous) {
                storeAnswers(true, key)
            }
            // If answer is already selected, unselect it
        } else if (answer.classList.contains(`selected-answer`)) {
            answer.classList.add(`unselected-answer`)
            answer.classList.remove(`selected-answer`)
            // Unhighlight selected answer buttons
            unselectAnswerButton(answer.children)
            if (!previous) {
                storeAnswers(false, key)
            }
        }
    }
    // Triggers a check to see if we should display continue button
    ShowHideContinueButton(quiz.questions[currentQuestionIndex])
}

// Indicate previous is true in order to skip storing answers in the local object
const storeAnswers = (add, key) => {
    // For adding user's answers to the local object
    if (add) {
        if (quiz.questions[currentQuestionIndex].type === `single`) {
            quiz.questions[currentQuestionIndex].entered.length = 0
        }
        quiz.questions[currentQuestionIndex].entered.push(key)
        console.log(quiz.questions[currentQuestionIndex])
        // For removing user's answers from the local object
    } else {
        quiz.questions[currentQuestionIndex].entered = quiz.questions[currentQuestionIndex].entered.filter(item => item !== key)
    }
    // Ensures there are no duplicate answers in array
    quiz.questions[currentQuestionIndex].entered = uniq(quiz.questions[currentQuestionIndex].entered)
}

// Changes answer button appearance to show as selected
const indicateSelectedAnswer = (answer) => {
    let button = answer.querySelectorAll('.answer-key-numerator')
    for (let i = 0; i < button.length; i++) {
        button[i].classList.add(`selected-answer-button`)
        button[i].classList.remove(`unselected-answer-button`)
    }
}

// Unselects all answers in a question
const unselectAllAnswers = (answerList) => {
    for (let i = 0; i < answerList.childElementCount; i++) {
        let child = answerList.children[i]
        if (child.classList.contains(`selected-answer`)) {
            child.classList.add(`unselected-answer`)
            child.classList.remove(`selected-answer`)
        }
        // re/un-assigns children attribute elements, such as button coloring classes
        unselectAnswerButton(child.children)
    }
}

// Unselects individual quiz answer buttons (e.g. Press A)
const unselectAnswerButton = (child) => {
    for (let j = 0; j < child.length; j++) {
        let childButton = child[j]
        if (childButton && childButton.classList.contains(`selected-answer-button`)) {
            childButton.classList.add(`unselected-answer-button`)
            childButton.classList.remove(`selected-answer-button`)
        }
    }
}

// Change progress bar styling as quiz is completed
const updateProgessBarStatus = () => {
    // Assigning attributes
    let progress = document.getElementById('quiz-progress-bar')
    let text = document.getElementById('progress-bar-text')
    // Value of progress is set in terms of 0 to 100
    let value = Math.floor((calculateQuizProgress(quiz.questions) / quiz.questions.length) * 100)
    // Changing width and aria value 
    progress.setAttribute('aria-valuenow', value)
    progress.style.width = value + `%`
    // Updates progress bar text
    text.innerText = value + '% complete'
}

// Finds quiz progress by comparing num of questions answers to total number of questions
const calculateQuizProgress = (questions) => {
    let answers = 0
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].entered.length > 0) {
            answers++
        }
    }
    return answers
}

// Assigns function to change answer attributes with given id
const ad_QuizSelectAnswer = (answer) => {
    answer.onclick = () => {
        selectAnswer(answer.id)
    }
}

// Adds iteration capabilities to previous & next buttons 
const ad_QuestionIteration = () => {
    let prev = document.getElementById(`previous-question-load`)
    let next = document.getElementById(`next-question-load`)
    prev.onclick = () => {
        loadNewQuestion(currentQuestionIndex-1)
    }
    next.onclick = () => {
        loadNewQuestion(currentQuestionIndex+1)
    }
}

// Listener for key presses for quiz interaction.
document.onkeydown = function(evt) {
    evt = evt || window.event;
    // console.log(evt.keyCode)
    // Registers key selectors for A to J on multiple choice questions.
    if (evt.keyCode >= 65 && evt.keyCode < 90 || evt.keyCode == 8 || evt.keyCode == 46) {
        selectAnswer(evt.keyCode.toString())
    }
    if (evt.keyCode == 38) {
        loadNewQuestion('previous-question-load')
    }
    // Moves to next question on down arrow tap or enter. Disables iteration using enter key for open ended questions
    let type = quiz.questions[currentQuestionIndex].type
    if (evt.keyCode == 40 || ((type == `single` || type == `multiple`) && evt.keyCode == 13)) {
        loadNewQuestion('next-question-load')
    }
};

init()