import React from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { resetQuiz } from '../action/quizAct';



import start from '../images/homeButton.png';

function Home(props: any) {
  const { history } = props;

  return (
    <div id="home-container">
      <img onClick={() => history.push('/one')}src={start} alt='start-button' />
    </div>
  );
}

export default withRouter(Home);