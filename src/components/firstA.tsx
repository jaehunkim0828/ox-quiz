import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { resetQuiz } from '../action/quizAct';
import cat from '../images/quiz1/cat.png';
import frame from '../images/quiz1/frame.png';
import answer from '../images/quiz1/answer1.png';
import num from '../images/quiz1/num.png';


function FirstA(props: any) {
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
    <div className="quiz-container1">
      <div className="templete1">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
          <img className="templete1-2-img"src={num} alt="number"/>
          <div className="templete1-2">정답은 YES!</div>
        </div>
        <div className="templete1-3">
          <img className="templete1-3-side" src={answer} alt="section"/>
          <img className="templete1-3-center" src={cat} alt="section"/>
          <img 
            className="templete1-3-side" 
            src={frame} 
            alt="section"
            onClick={() => history.push('/two')}
          />
        </div>
        <div>
          <div className="templete1-4">앞가슴을 내리고 꼬리를 흔드는 건 같이 놀자는 신호예요.</div>
          <div className="templete1-4">특히 앞가슴을 내리고 활발하게 뛰는 경우엔 놀고 싶다는 표현이랍니다.</div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(FirstA);