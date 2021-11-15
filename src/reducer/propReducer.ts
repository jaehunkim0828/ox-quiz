import {
  TRUE_SUCCESS,
  PROP,
  FALSE_SUCCESS,
} from '../action/propAct';

export type PROPS = {
  bool: boolean,
}

const initialState = {
  bool: false,
}

export function propReducer(state = initialState, action: PROP): PROPS {
  switch (action.type) {
    case TRUE_SUCCESS : {
      return { bool: true };
    }
    case FALSE_SUCCESS: {
      return { bool: false };
    }
    default:
      return state;
  }
}