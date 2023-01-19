import { useReducer, useState } from "react";
import { Task } from "../interfaces/interface";
import { todoReducer } from "../reducer/TodoReducer";

const INITIAL_STATE_TODO = {
    todos: [],
    todoCount: 0
}


export default function MainTodo() {
    
    const [{ todos, todoCount }, dispatch] = useReducer(todoReducer, INITIAL_STATE_TODO)
    
    const [task, setTask] = useState<Task>({ title: "", completed: false});

    // Functions
    const AddTask = () => { dispatch({ type: "add-todo", payload: { task: task } }) }
    
    const CompletedTask = (index: number) => {
        dispatch({ type: "completedTask", payload: {index: index} })
        console.log(index)
    }

    const DeleteTask = (index: number) => {
        dispatch({type: "deleteTask", payload: {index}})
    }
    
    return (
        <>
            <h1 className="font-bold text-4xl text-center"> New Todo Reducer</h1>

            {/* Form */}
            <form onSubmit={e => {
                AddTask()
                e.preventDefault();
                setTask({ title: "", completed: false})
            }}>
                <div className="p-2 space-x-5 font-bold">
                    <label htmlFor="tarea" className="uppercase"> Escribir Tarea</label>
                    <input type="text" id="tarea" className="border-black border-2 rounded-xl p-1" value={task.title} onChange={(e) => setTask({ title: e.target.value })} />
                    <button type="submit" className="bg-blue-500 px-5 py-2.5 rounded-xl text-white"> Agregar </button>

                </div>
            </form>
    
            {/* Change State and Delete */}
            <h2 className="font-bold text-xl">Cantidad de Tareas : {todos.length} </h2>
            
            {todos.map((task: Task, index: number) => (
                <div className="flex items-center space-x-10 my-2" key={index}
                >
                    <p className="text-blue-500 text-xl font-bold">
                        {task.task.title}
                    </p>
                    <button className="bg-blue-500 px-5 py-2 rounded-xl text-white" onClick={() => CompletedTask(index)}>
                        Cambiar Estado
                    </button>
                    <button className="bg-red-500 px-5 py-2 rounded-xl text-white" onClick={() => DeleteTask(index)}>
                        Eliminar 
                    </button>
                </div>
            ))}



            {/* List Completed and pending */}
            <div className="grid grid-cols-2 ">
                <div className="my-3">
                    <h2 className="font-bold text-xl text-green-500"> Tareas Compeltadas</h2>
                    {todos.map((todo: any) => todo.completed === true? JSON.stringify(todo,null,2) : "")}
                </div>

                <div className="my-3">
                    <h2 className="font-bold text-xl text-red-500"> Tareas Pendientes</h2>
                    {todos.map((todo: Task) => todo.completed === false? JSON.stringify(todo,null,2) : "")}
                </div>
            </div>
                
        </>
    )
}