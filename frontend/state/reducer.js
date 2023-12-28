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




function wheel(state = initialWheelState, action) {
 //need to set index between 0-5 (1-6), and change the css status of the selected circle to active for cog
 /* initial state for the wheel is the 0 index*/
 //
 //first case: moving clockwise: add one to the state, as long as index is less than or equal to 5
 // counterclockwise: minus one from the state, as long as index is less than or equal to 5 and greater than 0
  
    switch(action.type){
      case MOVE_COUNTERCLOCKWISE:
        if (--state < 0) return 5;
        return state--

        case MOVE_CLOCKWISE:
          if (++state > 5) return 0;
          return state++

        default: {
          return state

        }
    }
}

function quiz(state = initialQuizState, action) {
    switch(action.type) {
      case SET_QUIZ_INTO_STATE:
        return action.payload
        default:
          return state

    }
     
} 

function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type) {
    case SET_SELECTED_ANSWER:
      return action.payload
      default:
        return state

  }
}


function infoMessage(state = initialMessageState, action) {
  switch(action.type) {
    case SET_INFO_MESSAGE: 
      return action.payload
      default:
        return state

}
}



function form(state = initialFormState, action) {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        [action.payload.id]: action.payload.value 
      }
    case RESET_FORM:
      return initialFormState 
    default:
      return state
  }
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
