export interface Task {
    title: string,
    // description?: string,
    completed?: boolean,
    [x: string]: any
}

export type TodoAction = 
    | { type: 'add-todo', payload: { task: Task, completed?: boolean } }
    | { type: 'completedTask', payload: {index: number,  completed?: boolean} }
    | { type: 'deleteTask', payload: { index: number } };

