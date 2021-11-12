import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { increaseQuiz, resetQuiz } from '../action/quizAct';
import num from '../images/quiz1/num.png';
import no from '../images/quiz1/no.png';
import yes from '../images/quiz1/yes.png';
import cat from '../images/quiz1/cat.png';

function First(props: any) {
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
  }, [])

  return (
    <div className="quiz-container1">
      <div className="templete1">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
          <img className="templete1-2-img" src={num} alt='none' />
          <div className="templete1-2">
            같이 놀자~
          </div>
        </div>
        <section>
          <img
            src={yes} 
            alt='none'
            onClick={() => {
              dispatch(increaseQuiz());
              history.push('/oneA');
            }}
          />
          <img
           src={cat} 
           alt='none'
          />
          <img
            src={no} 
            alt='none'
            onClick={() => {
              history.push('/oneA');
            }}
          />
        </section>
        <div>
          <div className="templete1-4">동경 호구가 기지개를 펴듯 앞가슴을 내리고 꼬리를 흔들어요.</div>
          <div className="templete1-4"> 같이 놀자는 신호일까요?</div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(First);