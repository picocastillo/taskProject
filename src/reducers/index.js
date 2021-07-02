import { combineReducers } from 'redux';

import tasks from './taskReducer';

const reducer = combineReducers({
   tasks
});
export default reducer;
