import createStore from "redux-zero";


let   QUESTIONS = [
	{
    images: "https://ihatetomatoes.net/react-tutorials/abc-quiz/images/plane.svg",

    questions: "Which is the oldest airline in the world?",
    options: ["Avianca", "KLM", "Qantas"],
    correctAnswers: "KLM",
    answere:[],
    index: 0
	},
	{
    image: "https://ihatetomatoes.net/react-tutorials/abc-quiz/images/ship.svg",
    questions: "Which is the oldest airline in the world?",
    options: ["Avianca", "KLM", "Qantas"],
    correctAnswers: "KLM",
    answere:[],
    index: 0
	},
	{
    image: "https://ihatetomatoes.net/react-tutorials/abc-quiz/images/bycicle.svg",
    questions: "Which is the oldest airline in the world?",
    options: ["Avianca", "KLM", "Qantas"],
    correctAnswers: "KLM",
    answere:[],
    index: 0
	},
];

const initialState = {
  quiz: QUESTIONS,
  index: 0,
  answere:[]
};

const store = createStore(initialState);

export default store;

