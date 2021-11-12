import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { increaseQuiz, resetQuiz } from '../action/quizAct';
import no from '../images/quiz1/no.png';
import yes from '../images/quiz1/yes.png';


function Sixth(props: any) {
  const { history } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    const timeout = setTimeout(() => {
      history.push('/')
      dispatch(resetQuiz());
    }, 15000);
    console.log('start');
    return () => {
      console.log('done');
      clearTimeout(timeout);
    }
  }, []);

  return (
    <div className="quiz-container6">
        <div className="center">
          <img onClick={() => history.push('/sixA')}src={yes} alt="Q"/>
          <img onClick={() => {history.push('/sixA'); dispatch(increaseQuiz())}}src={no} alt="Q"/>
        </div>
    </div>
  )
}

export default withRouter(Sixth);