import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { increaseQuiz, resetQuiz } from '../action/quizAct';
import num from '../images/quiz2/no.png';
import no from '../images/quiz1/no.png';
import yes from '../images/quiz1/yes.png';
import dog from '../images/quiz2/dog.png';

function Second(props: any) {
  const { history } = props;
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     history.push('/')
  //     dispatch(resetQuiz());
  //   }, 15000);
  //   console.log('start');
  //   return () => {
  //     console.log('done');
  //     clearTimeout(timeout);
  //   }
  // }, []);

  return (
    <div className="quiz-container2">
        
    </div>
  )
}

export default withRouter(Second);