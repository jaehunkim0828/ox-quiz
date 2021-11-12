export const INCREMENT_SUCCESS = 'INCREMENT_SUCCESS';
export const RESET_SUCCESS = 'RESET_SUCCESS';

export type QUIZ = { 
  type: 'RESET_SUCCESS'|'INCREMENT_SUCCESS',
  payload: 1,
};

export function resetQuiz(): QUIZ {
  return { type: "RESET_SUCCESS", payload: 1, }
};

export function increaseQuiz(): QUIZ {
  return { type: INCREMENT_SUCCESS, payload: 1, }
};

