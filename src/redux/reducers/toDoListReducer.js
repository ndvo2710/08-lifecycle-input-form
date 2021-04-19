import { ToDoListDarkTheme } from "../../components/Themes/ToDoListDarkTheme";

const initialState = {
  theme: ToDoListDarkTheme,
  taskList: [
    { id: "task-1", taskName: "task 1", isCompleted: true },
    { id: "task-2", taskName: "task 2", isCompleted: false },
    { id: "task-3", taskName: "task 3", isCompleted: true },
    { id: "task-4", taskName: "task 4", isCompleted: false }
  ]
};

const toDoListReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default toDoListReducer;
