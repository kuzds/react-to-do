import { useContext } from "react";
import TaskerContext from "../contexts/TaskerContext";

function useTasker() {
  return useContext(TaskerContext);
}

export default useTasker;