import { Task, TodoAction } from "../interfaces/interface"

export function todoReducer(state: any, action: TodoAction) {
    switch (action.type) {
        case "add-todo":
            return {
                todos: [...state.todos,  { task: action.payload.task, completed: false }]
            }
        case "completedTask":
            return {
                todos: state.todos.map((todo: Task, index:number) => index === action.payload.index ? {...todo, completed: !todo.completed } : todo  ) 
            }
        case "deleteTask":
            return {
                todos: state.todos.filter((todo: Task, index: number) => index !== action.payload.index )
        }
        default: 
            return state
    }
}