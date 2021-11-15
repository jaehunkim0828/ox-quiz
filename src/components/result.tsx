import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { withRouter } from 'react-router-dom';

import { resetQuiz } from '../action/quizAct';
import homeButton from '../images/goHome.png';
import { RootState } from '../store';

function Result(props: any) {
  const { history } = props;
  const score = useSelector((state: RootState) => state.quizReducer.count);
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
    <div className="result">
      <img 
        id='gohome' 
        src={homeButton} 
        alt="homebotton"
        onClick={() => {
          dispatch(resetQuiz());
          history.push('/');
        }}
      />
      <section>
        <div id='result-con'>맞춘 갯수</div>
        <div id="score-con">
          <span className="score">{score}</span>
          <span className="index">개!</span>
        </div>
      </section>
    </div>
  )
}

export default withRouter(Result);