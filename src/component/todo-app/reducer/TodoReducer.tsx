import { Task, TodoAction } from "../interfaces/interface";

interface StateTodo {
    todoList: Task[]; 
}

export function todoReducer(state: any, action: TodoAction) {
    switch (action.type) {
        case "add-todo":
            return {
                todos: [...state.todos,  { task: action.payload.task, status: "pending" }]

            }
        case "changeToCompleted":
            return {
                todos: state.todos.map((todo: Task, index:number) => index === action.payload.index ? {...todo, status: "completed" } : todo  ) 

            }
        case "changeToPending":
            return {
                todos: state.todos.map((todo: Task, index:number) => index === action.payload.index ? {...todo, status: "pending" } : todo  ) 
                
            }
        case "changeToProcess":
            return {
                todos: state.todos.map((todo: Task, index:number) => index === action.payload.index ? {...todo, status: "process" } : todo  ) 
                
            }
        case "deleteTask":
            return {
                todos: state.todos.filter((todo: Task, index: number) => index !== action.payload.index )
        }
        default: 
            return state
    }
}