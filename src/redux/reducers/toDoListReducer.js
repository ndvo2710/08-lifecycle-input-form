import { arrTheme } from "../../components/Themes/ThemeManager";

import { add_task, change_theme } from "../types/toDoListTypes";

const initialState = {
  theme: arrTheme[0].theme,
  taskList: [
    { id: "task-1", taskName: "task 1", isCompleted: true },
    { id: "task-2", taskName: "task 2", isCompleted: false },
    { id: "task-3", taskName: "task 3", isCompleted: true },
    { id: "task-4", taskName: "task 4", isCompleted: false }
  ]
};

const toDoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case add_task:
      // Check Empty
      if (action.newTask.taskName.trim() === "") {
        alert("Task name is required");
        return { ...state };
      }
      // Check Exist
      let taskListUpdate = [...state.taskList];
      let index = taskListUpdate.findIndex(
        task => task.taskName === action.newTask.taskName
      );
      if (index !== -1) {
        alert("task name already exists !");
        return { ...state };
      }

      taskListUpdate.push(action.newTask);

      //Assign taskList to taskList state
      state.taskList = taskListUpdate;

      return { ...state };

    case change_theme:
      console.log("Set Theme Id: ", action.themeId);
      //  Reason to use == instead of ===
      // because it tries to match between integer and string .e.g 2 and '2'
      let theme = arrTheme.find(theme => theme.id == action.themeId);
      console.log("theme.id: ", theme.id);
      if (theme) {
        console.log(theme);
        //set theme for state theme
        state.theme = theme.theme;
      }
      return { ...state };
    default:
      return { ...state };
  }
};

export default toDoListReducer;
