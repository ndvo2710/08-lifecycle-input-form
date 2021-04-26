import { add_task, change_theme } from "../types/toDoListTypes";

export const addTaskAction = newTask => ({
  type: add_task,
  newTask
});

export const changeThemeAction = themeId => {
    console.log('themeId: ', themeId);
  return {
    type: change_theme,
    themeId
  };
};
