import {
  INCREMENT_SUCCESS,
  QUIZ,
  RESET_SUCCESS,
} from '../action/quizAct';

export type InitialState = {
  count: number;
};

const initialState = {
  count: 0,
};

export function quizReducer(state = initialState, action: QUIZ): InitialState {
  switch (action.type) {
    case INCREMENT_SUCCESS : {
      return { ...state, count: state.count + action.payload };
    }
    case RESET_SUCCESS: {
      return { count: 0 };
    }
    default:
      return state;
  }
}