import * as type from './types/TaskTypes';
import { ITask } from '../Interfaces';

export const setNewTask = (task: ITask) => ({
  type: type.ADD,
  task,
});


export const changeState = (id: string) => ({
  type: type.CHANGE_STATE,
  id
});