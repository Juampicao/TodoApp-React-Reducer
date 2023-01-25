import { createContext, ReactElement } from "react";
import { usePersistedReducer } from "../component/todo-app/hooks/usePersistedReducer";
import { Task } from "../component/todo-app/interfaces/interface";
import { todoReducer } from "../component/todo-app/reducer/TodoReducer";

interface TodoContextProps{
  state?: any,
  dispatch?: any,
  value?: any,
  [x: string ]: any
}

//? Reducer Normal
// const [state, dispatch] = useReducer(todoReducer, INITIAL_STATE_TODO)
export const TodoContext = createContext({} as TodoContextProps);

const INITIAL_STATE_TODO = {
    todos: [],
    todoCount: 0
}

interface TodoProviderProps{
    children?: ReactElement | ReactElement[];

}

export const TodoProvider = ({ children } : TodoProviderProps  ) => {

  //? Persited Reducer
  const storageKey = 'todoList'
  const { state, dispatch } = usePersistedReducer(todoReducer, INITIAL_STATE_TODO, storageKey)
  
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


  
  // Functions
  const functions = {
    AddTask : (task : Task) => {
        dispatch({ type: "add-todo", payload: { task: task } })
    },
    
    ChangeCompletedTask: (index: number) => {
        dispatch({ type: "changeToCompleted", payload: {index} })
        console.log(index)
    },
    
    ChangePendingTask:  (index: number) => {
        dispatch({ type: "changeToPending", payload: {index} })
        console.log(index)
    },
    
    ChangeProcessTask: (index: number) => {
        dispatch({ type: "changeToProcess", payload: {index} })
        console.log(index)
    },

    DeleteTask : (index: number) => {
        dispatch({type: "deleteTask", payload: {index}})
    }
  }


  
  return (
    <TodoContext.Provider
      value={{
        state,
        dispatch,
        AddTask,
        ChangeCompletedTask,
        ChangePendingTask,
        ChangeProcessTask,
        DeleteTask,
        functions,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};




// import { createContext, ReactElement, useReducer } from "react";
// import { todoReducer } from "../component/todo-app/reducer/TodoReducer";

// interface TodoContextProps{
//   state?: any,
//   dispatch?: any,
//   functions?: any,
//   [x: string ]: any
// }

// export const TodoContext = createContext({} as TodoContextProps);

// const INITIAL_STATE_TODO = {
//     todos: [],
//     todoCount: 0
// }


// interface TodoProviderProps{
//     children?: ReactElement | ReactElement[];

// }

// export const TodoProvider = ({ children } : TodoProviderProps  ) => {

//   const [state, dispatch] = useReducer(todoReducer, INITIAL_STATE_TODO)
  
//   const hola  = "hola"
//   return (
//     <TodoContext.Provider
//       value={{
//         hola,
//       }}
//     >
//       {children}
//     </TodoContext.Provider>
//   );
// };



