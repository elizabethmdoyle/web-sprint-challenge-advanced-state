// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import { INPUT_CHANGE, MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, RESET_FORM, SET_INFO_MESSAGE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER } from "./action-types"

const initialWheelState = 0;
const initialQuizState = null;
const initialSelectedAnswerState = null;
const initialMessageState = '';
const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}

const initialState = {
  wheelState: initialWheelState,
  quizState: initialQuizState,
  selectedAnswerState: initialSelectedAnswerState,
  messageState: initialMessageState,
  formState: initialFormState
}



function wheel(state = initialState, action) {
 //need to set index between 0-5 (1-6), and change the css status of the selected circle to active for cog
 /* initial state for the wheel is the 0 index*/
 //
 //first case: moving clockwise: add one to the state, as long as index is less than or equal to 5
 // counterclockwise: minus one from the state, as long as index is less than or equal to 5 and greater than 0
  
    switch(action.type){
      case MOVE_CLOCKWISE:
        return {
            ...state, 
            wheelState: action.payload + 1 ,
        }
        case MOVE_COUNTERCLOCKWISE:
        return {
            ...state, 
            wheelState: action.payload - 1 ,
        }
        default: {
          return  {wheelState: initialWheelState}

        }
    }
  

}



function quiz(state = initialState, action) {
  return{}
   
}


function selectedAnswer(state = initialState, action) {
 return{}
}


function infoMessage(state = initialState, action) {
  switch(action.type) {
    case SET_INFO_MESSAGE: 
      return {
        ...state,
        messageState: action.payload
      };
      default:
        return null
  }

}



function form(state = initialState, action) {
return{}
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
