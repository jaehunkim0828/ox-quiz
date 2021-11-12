import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { resetQuiz } from '../action/quizAct';
import frame from '../images/quiz1/frame.png';

function SixthA(props: any) {
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
    <div className="answer-container6">
      <div className="end">
        <img onClick={() => history.push('/seven')}src={frame} alt='button'/>
      </div>
    </div>
  )
}

export default withRouter(SixthA);