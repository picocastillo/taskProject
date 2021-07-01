import {ADD,CHANGE_STATE} from '../actions/types/TaskTypes'
import { ITask } from '../Interfaces';
import CheckBoxLine from '../shares/CkeckBoxLine';

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
    case CHANGE_STATE:
      let all = state.tasks;
      const index = all.findIndex((x: ITask) => x.id==action.id);
      // console.log("tas",all)
      // console.log("idx",action.id)
      all[index].complete =  !all[index].complete ;
      return {
        tasks: all,
      }
    default:
      return state
   }
}
