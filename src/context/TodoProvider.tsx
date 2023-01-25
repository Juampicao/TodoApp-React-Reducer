import { createContext, ReactElement, useEffect, useReducer } from "react";
import { INITIAL_STATE_TODO } from "../component/todo-app/pages/MainTodo";
import { todoReducer } from "../component/todo-app/reducer/TodoReducer";

export const TodoContext = createContext({} as any);

// const [cart, dispatch] = useReducer(todoReducer, [], initializer);
const [{ todos, todoCount }, dispatch] = useReducer(todoReducer, INITIAL_STATE_TODO)

interface TodoProviderProps{
    children?: ReactElement | ReactElement[];

}


export const TodoProvider = ({ children } : TodoProviderProps  ) => {

    
useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        dispatch
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};