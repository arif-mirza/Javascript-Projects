const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers : [
            { text: "Shark", correct: false},
            { text: "blue whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false},
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers : [
            { text: "kalahari", correct: false},
            { text: "Gobi", correct: true},
            { text: "Sahara", correct: false},
            { text: "Antarctica", correct: true},
        ]
    },

    {
        question: "Which is the smallest contient  in the world?",
        answers : [
            { text: "Asia", correct: false},
            { text: "Australia", correct: true},
            { text: "Arctic", correct: false},
            { text: "Africa", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentquestionIndex = 0;
let score = 0;

function startQuiz(){
    currentquestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

}
 function showQuestion(){
     resetState();
     let currentQuestion = questions[currentquestionIndex];
     let questionNo = currentquestionIndex + 1;
     questionElement.innerHTML = questionNo + ". "+ currentQuestion.question;

     currentQuestion.answers.forEach(answer => {
         const button = document.createElement("button");
         button.innerHTML = answer.text;
         button.classList.add("btn");
         answerButtons.appendChild(button);
         if(answer.correct){
            button.dataset.correct = answer.correct;
         }
         button.addEventListener("click", selectAnswer);
     });
 }

 function resetState(){
     nextButton.style.display = "none";
     while(answerButtons.firstChild){
         answerButtons.removeChild(answerButtons.firstChild);
     }
 };

 function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;

    }else{
        selectedBtn.classList.add("incorrect");
    };
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";


 }

 function showScore(){
    resetState();
    questionElement.innerHTML = `"You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
 }
function handleNextButton(){
    currentquestionIndex++;
    if(currentquestionIndex < questions.length){
          showQuestion();
    }else{
        showScore();
    };
};
 nextButton.addEventListener("click", () =>{
    if(currentquestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
 })
startQuiz()

//------------------------------------------------------------------------------------------------------



// const questions  = [

// {
//     question: "Which is the largest animal in the world?",

//     answers : [
//         { text : "blue whale" , correct : false},
//         { text : "blue whale" , correct : false},
//         { text : "Elephant" , correct : true},
//         { text : "blue whale" , correct : false},
//     ]
// },

// {
//     question: "Which is the largest animal in the world?",

//     answers : [
//         { text : "blue whale" , correct : false},
//         { text : "blue whale" , correct : false},
//         { text : "Elephant" , correct : true},
//         { text : "blue whale" , correct : false},
//     ]
// },

// {
//     question: "Which is the largest animal in the world?",

//     answers : [
//         { text : "blue whale" , correct : false},
//         { text : "blue whale" , correct : false},
//         { text : "Elephant" , correct : true},
//         { text : "blue whale" , correct : false},
//     ]
// },


// ];

// const sawal = document.getElementById("question");
// const mcqs = document.getElementById("answer-button");
// const nextButton = document.getElementById("next-btn");

// let currentSawalIndex = 0;
// let score = 0;

// function mcqShoro(){
//     currentSawalIndex = 0;
//     score = 0;
//     nextButton.innerHTML = "Next";

// }

// function showSawal(){
//     let currentSawal = questions[currentSawalIndex];
//     let sawalNo = currentSawalIndex + 1;

//     sawal.innerHTML = sawalNo + ". " + currentSawal.question;


//     currentSawal.answers.forEach(answer => {
//         const button = document.createElement("button");
//         button.innerHTML = answer.text;
//         button.classList.add("btn");

//         mcqs.appendChild(button);

//         if(answer.correct){
//             button.dataset.correct = answer.correct;
//         }
//         button.addEventListener("click", selectAnswer);
//     });

// }

// function dobaraShoro(){
//     nextButton.style.display = "none";
//     while(mcqs.firstChild){
//         mcqs.removeChild(mcqs.firstChild);
//     };

//     function selectJawab(i){
//         const selectedJawab = i.target;
//         const agarSai = selectedJawab.dataset.correct === "true";

//         if(agarSai){
//             selectJawab.classList.add("incorrect");
//         };
//         Array.from(mcqs.children).forEach(button => {
//             if(button.dataset.correct === "ture"){

//             }
//         })
//     }
// }


