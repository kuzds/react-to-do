import { useCallback, useEffect, useMemo, useState } from "react";
import TaskerContext from "../contexts/TaskerContext";

const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2)

function TaskerProvider({children}) {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    let storagedTasks = localStorage.getItem("tasks")
    if (storagedTasks) {
      storagedTasks = JSON.parse(storagedTasks)
      if (Array.isArray(storagedTasks)) {
        setTasks(storagedTasks)
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  const addTask = useCallback(task => {
    task.id = uid()
    task.completed = false
    setTasks(prevTasks => [task, ...prevTasks])
  }, [])

  const toggleTaskById = useCallback(id => {
    setTasks(prevTasks => [...prevTasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed
      } 
      return task
    })])
  }, [])

  const removeTaskById = useCallback(id => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
  }, [])

  const contextValue = useMemo(()=>({
    tasks,
    addTask,
    toggleTaskById,
    removeTaskById
  }), [tasks, addTask, toggleTaskById, removeTaskById])

  return (
    <TaskerContext.Provider value={contextValue}>
      {children}
    </TaskerContext.Provider>
  )
}

export default TaskerProvider;
