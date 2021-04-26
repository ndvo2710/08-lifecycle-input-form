import { add_task, change_theme, delete_task, edit_task, mark_task_completed } from "../types/toDoListTypes";

export const addTaskAction = newTask => ({
  type: add_task,
  newTask
});

export const changeThemeAction = themeId => {
    // console.log('themeId: ', themeId);
  return {
    type: change_theme,
    themeId
  };
};

export const markTaskAsCompleted = taskId => ({
    type: mark_task_completed,
    taskId
});

export const deleteTask = taskId => ({
    type: delete_task,
    taskId
})

export const editTask = task => ({
    type: edit_task,
    task
})


