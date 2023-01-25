
export interface TaskState {
    state: "completed" | "pending" | "process"
}

export interface Task {
    title: string,
    description: string,
    status: TaskState["state"],
    [x: string]: any
}

export type TodoAction = 
    | { type: 'add-todo', payload: { task: Task, completed?: boolean } }
    | { type: 'deleteTask', payload: { index: number } }
    | { type: 'changeToCompleted', payload: { index: number} }
    | { type: 'changeToPending', payload: { index: number } }
    | { type: 'changeToProcess', payload: {index: number} }    
