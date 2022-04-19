import { createContext } from "react";

const TaskerContext = createContext({
  tasks: [],
  addTask: () => {},
  toggleTaskById: () => {},
  removeTaskById: () => {},
});

export default TaskerContext;