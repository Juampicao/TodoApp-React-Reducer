import { createContext, ReactElement, useEffect, useReducer } from "react";
import { todoReducer } from "../component/todo-app/reducer/TodoReducer";

export const TodoContext = createContext({} as any);

const INITIAL_STATE_TODO = {
    todos: [],
    todoCount: 0
}
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