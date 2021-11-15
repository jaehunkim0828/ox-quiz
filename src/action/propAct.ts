export const TRUE_SUCCESS = 'TRUE_SUCCESS';
export const FALSE_SUCCESS = 'FALSE_SUCCESS';

export type PROP = { 
  type: 'TRUE_SUCCESS' | 'FALSE_SUCCESS',
};

export function trueProp(): PROP {
  return { type: TRUE_SUCCESS, };
};

export function falseProp(): PROP {
  return { type: FALSE_SUCCESS, };
};