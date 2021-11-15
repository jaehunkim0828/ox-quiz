import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { withRouter } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import { falseProp } from '../action/propAct';

import { resetQuiz } from '../action/quizAct';
import homeButton from '../images/goHome.png';
import { RootState } from '../store';
import { trueProp } from '../action/propAct';

function Result(props: any) {
  const { history } = props;
  const dispatch = useDispatch();
  const score = useSelector((state: RootState) => state.quizReducer.count);
  const inProp = useSelector((state: RootState) => state.propReducer.bool);

  const fadeStyle: { [key: string]: React.CSSProperties } = {
    entering: {
      opacity: 0
    },
    entered: {
      opacity: 1
    },
    exiting: {
      opacity: 0,
      transition: "all 1s"
    },
    exited: {
      opacity: 0
    }
  };

  const defualtSyle: React.CSSProperties = {
    transition: "all 1s",
    opacity: 0
  };

  useEffect(() => {
    setTimeout(() => dispatch(trueProp()), 10);
    const timeout = setTimeout(() => {
      history.push('/')
      dispatch(resetQuiz());
    }, 15000);
    console.log('start');
    return () => {
      console.log('done');
      clearTimeout(timeout);
      dispatch(falseProp());
    }
  }, []);

  return (
    <Transition
      mountOnEnter={true}
      unmountOnExit={true}
      timeout={800}
      in={inProp}
    >
      {(status) => {
          return (
            <div className="result" style={{ ...defualtSyle, ...fadeStyle[status] }}>
              <img 
                id='gohome' 
                src={homeButton} 
                alt="homebotton"
                onClick={() => {
                  dispatch(resetQuiz());
                  dispatch(falseProp());
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
        }}
    </Transition>
  )
}

export default withRouter(Result);