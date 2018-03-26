import {actionTypes} from '../actions/index.js';

const rootReducer = (state={count: 1}, action) => {
  switch(action.type) {
    case actionTypes.UP_COUNT: 
      return {
        count: state.count + 1
      }
    case actionTypes.DOWN_COUNT:
      return {
        count: state.count - 1
      }
    default: 
      return state;
  }
};

export default rootReducer;