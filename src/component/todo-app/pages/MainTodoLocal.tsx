import { useState } from 'react';
import MyButton from '../../atoms/MyButton';
import { usePersistedReducer } from '../hooks/usePersistedReducer';
import { INITIAL_STATE_TODO, Task } from '../interfaces/interface';
import { todoReducer } from '../reducer/TodoReducer';


const MainTodoLocal = () => {

    //? Persisted Reducer
    const storageKey = 'todoList'
    const { state, dispatch } = usePersistedReducer(todoReducer, INITIAL_STATE_TODO, storageKey)

    const [task, setTask] = useState<Task>({ title: "", description: "", status: "pending" });
        

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
        dispatch({type: "deleteTask", payload: {index}})
    }
    
    
    // ButonStyles
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
                AddTask(task);
                e.preventDefault();
                setTask({ title: "", description: "", status: "pending"})
            }}>
                <div className="font-bold my-2 ">
                    <div className="">
                        <label htmlFor="title" className="uppercase"> Escribir Tarea</label>
                        <input type="text" id="title" className="border-black border-2 rounded-xl p-1" value={task.title} onChange={(e) => setTask({ ...task ,title: e.target.value })} />
                    </div>
                    
                    <div>
                        <label htmlFor="description" className="uppercase"> Descripcion</label>
                        <input type="text" id="description" className="border-black border-2 rounded-xl p-1" value={task.description} onChange={(e) => setTask({...task, description: e.target.value })} />
                    </div>

                    <MyButton
                        text="Agregar"
                        disabled={!task.title ? true : false}
                    />


                </div>
            </form>
    
            {/* Change State and Delete */}
            <h2 className="font-bold text-xl">Cantidad de Tareas : {state.todos.length} </h2>
            
            {state.todos.map((task: Task, index: number) => (
                <div className="flex items-center space-x-10 my-2" key={index}
                >
                    <p className="text-blue-500 text-xl font-bold">
                        {task.task.title}
                    </p>
                   
                    <MyButton
                        className={`${buttonsStyles[task.status].nextColor}`}
                        onClick={() => changeStateTask(task, index)}
                        text={`Cambiar a ${buttonsStyles[task.status].nextStep}`}
                    />
                                       
                    <MyButton
                        className={`bg-red-500`}
                        onClick={() => DeleteTask(index)}
                        text={`Eliminar`}
                    />

                </div>
            ))}



            {/* Listed Task By Status */}
            <div className="grid grid-cols-3 ">
                <div className="my-3">
                    <h2 className="font-bold text-xl text-yellow-500"> Tareas Pendientes</h2>
                    {state.todos.map((task: Task) => task.status === "pending" ? JSON.stringify(task,null,2) : "")}
                </div>

                <div className="my-3">
                    <h2 className="font-bold text-xl text-blue-500"> Tareas Proceso</h2>
                    {state.todos.map((task: Task) => task.status === "process" ? JSON.stringify(task,null,2) : "")}
                </div>

                <div className="my-3">
                    <h2 className="font-bold text-xl text-green-500"> Tareas Completadas</h2>
                    {state.todos.map((task: Task) => task.status === "completed" ? JSON.stringify(task,null,2) : "")}
                </div>
            </div>
                
        </>
    )
}

export default MainTodoLocal