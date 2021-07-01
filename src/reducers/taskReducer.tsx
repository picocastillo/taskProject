import {ADD,COMPLETE,UNCOMPLETE} from '../actions/types/TaskTypes'

const INITIAL_STATE= {
  tasks: []
}
export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD:
      let aux = state.tasks;
      aux.unshift(action.task);
      return {
        ...state,
        tasks: aux
      }
    case COMPLETE:
      state.tasks[action.index].complete  = true;
    return {
      ...state,
    }
    case UNCOMPLETE:
      state.tasks[action.index].complete  = false;
    return {
      ...state,
    }
      default:
        return state
   }
}
