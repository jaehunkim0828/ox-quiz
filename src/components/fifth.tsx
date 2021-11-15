import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useSound from 'use-sound';

import { increaseQuiz, resetQuiz } from '../action/quizAct';
import no from '../images/quiz1/no.png';
import yes from '../images/quiz1/yes.png';
import noS from '../sounds/no.mp3';
import yesS from '../sounds/yes.mp3';



function Fifth(props: any) {
  const { history } = props;
  const dispatch = useDispatch();
  const [noPlay] = useSound(noS);
  const [yesPlay] = useSound(yesS);

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
    <div className="quiz-container5">
        <div className="center">
          <img onClick={() => {yesPlay(); history.push('/fiveA'); dispatch(increaseQuiz())}} src={yes} alt="Q"/>
          <img onClick={() => {noPlay(); history.push('/fiveA')}} src={no} alt="Q"/>
        </div>
    </div>
  )
}

export default withRouter(Fifth);