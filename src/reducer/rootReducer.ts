import { combineReducers } from 'redux';

import { quizReducer } from './quizReducer';
import { propReducer } from './propReducer';

export const rootReducer = combineReducers({
  quizReducer,
  propReducer,
});