import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchQuiz, selectAnswer, postAnswer } from '../state/action-creators';

const Quiz = (props) => {
  useEffect(() => {
    if (!props.quiz)
    {
      props.fetchQuiz()
    }
  }, [])
  const handlePostAnswer = ()=> {
    props.postAnswer (props.quiz.quiz_id, props.selectedAnswer.answer_id)
 }

 return (
   <div id="wrapper">
     {
       // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        props.quiz ? (
         <>
           <h2>{props.quiz.question}</h2>

           <div id="quizAnswers">
             <div className={`answer${props.quiz.answers[0].answer_id === props.selectedAnswer?.answer_id? ' selected': ''}`}>
               {props.quiz.answers[0].text}
               <button onClick = {()=>props.selectAnswer(props.quiz.answers[0])}>
                 
                 {props.quiz.answers[0].answer_id === props.selectedAnswer?.answer_id? 'SELECTED': 'Select'}
               </button>
             </div>

             <div className= {`answer${props.quiz.answers[1].answer_id === props.selectedAnswer?.answer_id? ' selected': ''}`}>
             {props.quiz.answers[1].text}
               <button onClick = {()=>props.selectAnswer(props.quiz.answers[1])}>

               {props.quiz.answers[1].answer_id === props.selectedAnswer?.answer_id? 'SELECTED': 'Select'}
                 
               </button>
             </div>
           </div>

           <button 
           disabled={!props.selectedAnswer}
           onClick={handlePostAnswer}
           id="submitAnswerBtn">Submit answer</button>
         </>
       ) : 'Loading next quiz...'
     }
   </div>
 )
}

const mapStateToProps = (state) => {
  return {
    quiz: state.quiz,
    selectedAnswer: state.selectedAnswer
  };
}

export default connect(mapStateToProps, { fetchQuiz, selectAnswer, postAnswer })(Quiz)

/*

  × [7] Selecting and submitting an answer:                                                                                                                         
        - Loads the next quiz from the API (231 ms)                                                                                                                     
      × [8] Selecting and submitting a correct answer:                                                                                                                  
        - Puts the proper success message at the top of the page (778 ms)                                                                                               
      × [9] Selecting and submitting an incorrect answer:                                                                                                               
        - Submitting puts the proper failure message at the top of the page (769 ms)                                                                                    
    [FORM SCREEN]                                                                                                                                                       
      × [10] Typing in inputs changes their value (175 ms)                                                                                                              
      × [11] The submit button is disabled until all inputs have values more than one character                                                                         
        in length after trimming leading and trailing whitespace                                                                                                        
                                                                                                                                                              
    [APP STATE]                                                                                                                                                         
                                                                                                                                                            
      × [16] The state of the form survives route changes                                                                                                               
        - Filling out the form, navigating away and back, the entered data should survive                                                                               
     (24 ms)                                                                                                                                                            
                                                  
*/
