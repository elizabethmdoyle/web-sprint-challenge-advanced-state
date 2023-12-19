// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'

const initialWheelState = 0;
const initialQuizState = null;
const initialSelectedAnswerState = null;
const initialMessageState = '';
const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}



function wheel(state = initialWheelState, action) {
  return state
}



function quiz(state = initialQuizState, action) {
  return state
}


function selectedAnswer(state = initialSelectedAnswerState, action) {
  return state
}


function infoMessage(state = initialMessageState, action) {
  return state
}



function form(state = initialFormState, action) {
  return state
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
