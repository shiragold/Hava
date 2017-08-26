import { combineReducers } from 'redux';
import communitiesReducers from './communities';

const rootReducer = combineReducers({
  communities: communitiesReducers
});

export default rootReducer;
