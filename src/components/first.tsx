import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useSound from 'use-sound';

import { increaseQuiz, resetQuiz } from '../action/quizAct';
import no from '../images/quiz1/no.png';
import yes from '../images/quiz1/yes.png';
import noS from '../sounds/no.mp3';
import yesS from '../sounds/yes.mp3';



function First(props: any) {
  const { history, location } = props;
  const dispatch = useDispatch();
  const [noPlay] = useSound(noS);
  const [yesPlay] = useSound(yesS);
  

  useEffect(() => {
    const timeout = setTimeout(() => {
      history.push('/')
      dispatch(resetQuiz());
    }, 15000);
    console.log(location.key);
    return () => {
      console.log('done');
      clearTimeout(timeout);
    }
  }, []);

  return (
    <div className="quiz-container1">
        <div className="center">
          <img onClick={() => {yesPlay(); history.push('/oneA'); dispatch(increaseQuiz())}} src={yes} alt="Q"/>
          <img onClick={() => {noPlay(); history.push('/oneA');}} src={no} alt="Q"/>
        </div>
    </div>
  )
}

export default withRouter(First);