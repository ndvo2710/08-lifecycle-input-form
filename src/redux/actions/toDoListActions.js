import { add_task } from "../types/toDoListTypes";

export const addTaskAction = newTask => ({
  type: add_task,
  newTask
});
