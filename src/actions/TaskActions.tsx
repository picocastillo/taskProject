import * as type from './types/TaskTypes';
import { ITask } from '../Interfaces';

export const setNewTask = (task: ITask) => ({
  type: type.ADD,
  task,
});


export const setTaskComplete = (index) => ({
  type: type.COMPLETE,
  index
});

export const setTaskUnComplete = (index) => ({
  type: type.UNCOMPLETE,
  index
});