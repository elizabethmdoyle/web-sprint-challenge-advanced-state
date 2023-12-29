import { INPUT_CHANGE, MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, RESET_FORM, SET_INFO_MESSAGE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER } from "./action-types"
import axios from 'axios';


// ❗ You don't need to add extra action creators to achieve MVP
export function moveClockwise() {
  return ({type: MOVE_CLOCKWISE})
 }

export function moveCounterClockwise() {
  return({type: MOVE_COUNTERCLOCKWISE})
 }

export function selectAnswer(answer) {
  return({type: SET_SELECTED_ANSWER, payload: answer})
 }

export function setMessage(message) {
  return({type: SET_INFO_MESSAGE, payload: message})
 }
//set quiz is for submitting the form
export function setQuiz(formState) {
  return function (dispatch) {
    axios
      .post('http://localhost:9000/api/quiz/new', { question_text: quiz.newQuestion, true_answer_text: quiz.newTrueAnswer, false_answer_text: quiz.newFalseAnswer })
      .then(res => {
        dispatch({ type: SET_INFO_MESSAGE, payload: `Congrats: "${quiz.newQuestion}" is a great question!` }) 
        dispatch(resetForm())
      })
  }
}
//input change will need to accept the change from all of 3 inputs
export function inputChange(input, value) {
  return({type: INPUT_CHANGE, payload: {input, value}})
 }

export function resetForm() {
  return({type: RESET_FORM})
 }

//  The endpoints needed for this project are the following:

// - `[GET] http://localhost:9000/api/quiz/next`
//   - The response to a proper request includes `200 OK` and the next quiz object
// - `[POST] http://localhost:9000/api/quiz/new`
//   - Expects a payload with the following properties: `question_text`, `true_answer_text`, `false_answer_text`
//   - Example of payload: `{ "question_text": "Love JS?", "true_answer_text": "yes", "false_answer_text": "nah" }`
//   - The response to a proper request includes `201 Created` and the newly created quiz object
//   - A malformed client payload will result in a `422 Unprocessable Entity` response with a reason
// - `[POST] http://localhost:9000/api/quiz/answer`
//   - Expects a payload with the following properties: `quiz_id`, `answer_id`
//   - Example of payload: `{ "quiz_id": "LVqUh", "answer_id": "0VEv0" }`
//   - A response to a proper request includes `200 OK` and feedback on the answer

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
    dispatch({type: SET_QUIZ_INTO_STATE, payload: null});
    axios.get('http://localhost:9000/api/quiz/next')
      .then(res => dispatch({ type: SET_QUIZ_INTO_STATE, payload: res.data }))
    
  }
}
export function postAnswer() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
    axios
    .post('http://localhost:9000/api/quiz/answer', { quiz_id, answer_id })
    .then(res => {
      dispatch({ type: SET_SELECTED_ANSWER, payload: null })
      dispatch({ type: SET_INFO_MESSAGE, payload: res.data.message })
      fetchQuiz()(dispatch)
    })
  }
}
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
    dispatch({type: SET_INFO_MESSAGE});
    axios.get(''
    .then(res => {
      console.log(res)
    }))
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
