import { useReducer, useState } from "react";
import { useLocalStorage } from "../../localStorage-component/hooks/useLocalStorage";
import { Task } from "../interfaces/interface";
import { todoReducer } from "../reducer/TodoReducer";


export const INITIAL_STATE_TODO = {
    todos: [],
    todoCount: 0
}


export default function MainTodo() {
    
    const [{ todos, todoCount }, dispatch] = useReducer(todoReducer, INITIAL_STATE_TODO)
    
    const [task, setTask] = useState<Task>({ title: "", description: "", status: "pending" });
    const [prueba, setPrueba] = useLocalStorage( "task" , {title: "", description: "", status: "pending" });

    // Functions
    const AddTask = () => {
        dispatch({ type: "add-todo", payload: { task: task } })
    }
    
    const ChangeCompletedTask = (index: number) => {
        dispatch({ type: "changeToCompleted", payload: {index} })
        console.log(index)
    }

    const ChangePendingTask = (index: number) => {
        dispatch({ type: "changeToPending", payload: {index} })
        console.log(index)
    }

    const ChangeProcessTask = (index: number) => {
        dispatch({ type: "changeToProcess", payload: {index} })
        console.log(index)
    }

    const DeleteTask = (index: number) => {
        dispatch({type: "deleteTask", payload: {index}})
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
    


    const buttonsStyles = {
        "pending": {
            color: `bg-yellow-500 hover:yellow-600`,
            nextColor: `bg-blue-500 hover:blue-600 `,
            nextStep: "processo",
        },
        "process": {
            color: `bg-blue-500 hover:blue-600`,
            nextColor: `bg-green-500 hover:green-600`,
            nextStep: "completado",
        },

        "completed": {
            color: `bg-green-500 hover:green-600`,
            nextColor: `bg-yellow-500 hover:yellow-600`,
            nextStep: "pendiente",
        }
    }

    return (
        <>
            <h1 className="font-bold text-4xl text-center"> New Todo Reducer</h1>

            {/* Form */}
            <form onSubmit={e => {
                AddTask()
                e.preventDefault();
                setTask({ title: "", description: "", status: "pending"})
            }}>
                <div className="font-bold my-2 ">
                    <div className="">
                        <label htmlFor="title" className="uppercase"> Escribir Tarea</label>
                        <input type="text" id="title" className="border-black border-2 rounded-xl p-1" value={task.title} onChange={(e) => setTask({ ...task ,title: e.target.value })} />
                    </div>
                    
                    <div className="">
                        <label htmlFor="title" className="uppercase"> Prueba</label>
                        <input type="text" id="title" className="border-black border-2 rounded-xl p-1" value={prueba} onChange={(e) => setPrueba( e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="description" className="uppercase"> Descripcion</label>
                        <input type="text" id="description" className="border-black border-2 rounded-xl p-1" value={task.description} onChange={(e) => setTask({...task, description: e.target.value })} />
                    </div>

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
                   
                    <button
                        className={`${buttonsStyles[task.status].nextColor } px-5 py-2 rounded-xl text-white`}
                        onClick={() => changeStateTask(task, index)} >
                        Cambiar a {buttonsStyles[task.status].nextStep}
                    </button>
                   
                    <button className="bg-red-500 px-5 py-2 rounded-xl text-white" onClick={() => DeleteTask(index)}>
                        Eliminar 
                    </button>
                </div>
            ))}



            {/* Listed Task By Status */}
            <div className="grid grid-cols-3 ">
                <div className="my-3">
                    <h2 className="font-bold text-xl text-yellow-500"> Tareas Pendientes</h2>
                    {todos.map((task: Task) => task.status === "pending" ? JSON.stringify(task,null,2) : "")}
                </div>

                <div className="my-3">
                    <h2 className="font-bold text-xl text-blue-500"> Tareas Proceso</h2>
                    {todos.map((task: Task) => task.status === "process" ? JSON.stringify(task,null,2) : "")}
                </div>

                <div className="my-3">
                    <h2 className="font-bold text-xl text-green-500"> Tareas Completadas</h2>
                    {todos.map((task: Task) => task.status === "completed" ? JSON.stringify(task,null,2) : "")}
                </div>
            </div>
                
        </>
    )
}