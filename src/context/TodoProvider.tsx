import { createContext, ReactElement, useState } from "react";
import useModal from "../component/todo-app/hooks/useModal";
import { usePersistedReducer } from "../component/todo-app/hooks/usePersistedReducer";
import { INITIAL_SELECTED_TASK, INITIAL_STATE_TODO, Task } from "../component/todo-app/interfaces/interface";
import { todoReducer } from "../component/todo-app/reducer/TodoReducer";

interface TodoContextProps{
  state?: any,
  dispatch?: any,
  ChangeCompletedTask: (index: number) => void;
  ChangePendingTask: (index: number) => void;
  ChangeProcessTask: (index: number) => void;
  DeleteTask: (index: number) => void;
  changeStateTask: (task: Task, index: number) => void;
  selectedTask: Task,
  setSelectedTask: (task: any) => void;
  [x: string ]: any
}

export const TodoContext = createContext({} as TodoContextProps);

interface TodoProviderProps{
    children?: ReactElement | ReactElement[];

}

export const TodoProvider = ({ children }: TodoProviderProps) => {
  
  // Persited Reducer
  const storageKey = 'todoList'
  const { state, dispatch } = usePersistedReducer(todoReducer, INITIAL_STATE_TODO, storageKey)
 
  const [selectedTask, setSelectedTask] = useState<any>( 
    INITIAL_SELECTED_TASK
  )
    
  //? Modal
  const [isOpenDetailModal, openDetailmodal, closeDetailModal] = useModal(false);


  // Functions Dispatch
  const AddTask = (task: Task) => {
      dispatch({ type: "add-todo", payload: { task: task } })
  }
  
  const ChangeCompletedTask = (index: number) => {
      dispatch({ type: "changeToCompleted", payload: {index} })
      console.log(index)
  }
  
  const ChangePendingTask =  (index: number) => {
      dispatch({ type: "changeToPending", payload: {index} })
      console.log(index)
  }
  
  const ChangeProcessTask = (index: number) => {
      dispatch({ type: "changeToProcess", payload: {index} })
      console.log(index)
  }

  const DeleteTask = (index: number) => {
    if (confirm("Seguro deseas eliminarla?")) {
      dispatch({type: "deleteTask", payload:{index}})
    }
  }


  /**
   * Change to next Step on the road automatically.
   * @param task : Task
   * @param index : number
   */
    function changeStateTask(task : Task, index: number) {
    if (task.status === "pending") {
        ChangeProcessTask(index)
    }
    if (task.status === "process") {
        ChangeCompletedTask(index)
    }
    if (task.status === "completed")
        ChangePendingTask(index)
    }
  
  return (
    <TodoContext.Provider
      value={{
        state,
        dispatch,
        // Functions
        AddTask,
        ChangeCompletedTask,
        ChangePendingTask,
        ChangeProcessTask,
        DeleteTask,
        changeStateTask,
        // Modal
        isOpenDetailModal, openDetailmodal, closeDetailModal,
        // Selected Task
        selectedTask,
        setSelectedTask,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};



