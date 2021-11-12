import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function SevenA(props: any) {
  const { history } = props;

  useEffect(() => {
    function timeout() {
      return setTimeout(() => history.push('/'), 15000);
    }
    timeout();
  }, [])

  return (
    <div>one</div>
  )
}

export default withRouter(SevenA);