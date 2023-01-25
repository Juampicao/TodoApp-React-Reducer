import { useState } from "react";
import useTodoProvider from "../../../context/hooks/useTodoProvider";
import MyButton from "../../atoms/MyButton";
import MyTable from "../../atoms/MyTable";
import { buttonsStyles } from "../helpers/ButtonStyles";
import { INITIAL_STATE_TASK, Task } from "../interfaces/interface";


export default function MainTodo() {
    
    const {
        state,
        AddTask,
        ChangeCompletedTask,
        ChangePendingTask,
        ChangeProcessTask,
        DeleteTask,
        
    } = useTodoProvider();
    
    
    const [task, setTask] = useState<Task>(INITIAL_STATE_TASK);
        
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

    

    return (
        <>
            <h1 className="font-bold text-4xl text-center">  Todo App UseReducer</h1>

            <div className="flex space-x-5">

                <div>
                    {/* Form */}
                    <form onSubmit={e => {
                        AddTask(task);
                        e.preventDefault();
                        setTask({ title: "", description: "", status: "pending"})
                    }}>
                        <div className="font-bold my-2 bg-slate-50 mx-2 p-5 max-w-md grid grid-rows-2 gap-y-3">
                        <h2 className="font-bold text-center text-xl uppercase"> Agregar Tarea</h2>
                            <div className="grid grid-cols-2">
                                <label htmlFor="title" className="uppercase"> Titulo</label>
                                <input type="text" id="title" className="border-black border-2 rounded-xl p-1" value={task.title} onChange={(e) => setTask({ ...task ,title: e.target.value })} />
                            </div>
                            
                            <div className="grid grid-cols-2">
                                <label htmlFor="description" className="uppercase"> Descripcion</label>
                                <input type="text" id="description" className="border-black border-2 rounded-xl p-1" value={task.description} onChange={(e) => setTask({...task, description: e.target.value })} />
                            </div>

                            <MyButton
                                text="Agregar"
                                disabled={!task.title ? true : false}
                            />
                        </div>
                    </form>
                </div>
        
                {/* Change State and Delete */}
                <div>

                    <h2 className="font-bold text-xl">Cantidad de Tareas : {state.todos.length} </h2>
                    
                    {state.todos.map((task: Task, index: number) => (
                        <div className="grid grid-cols-3 gap-x-10 space-y-1 items-center" key={index}
                        >
                            <p className="text-blue-500 text-xl font-bold">
                                {task.task.title}
                            </p>
                        
                            <MyButton
                                className={`${buttonsStyles[task.status].nextColor} max-h-[150px]`}
                                onClick={() => changeStateTask(task, index)}
                                text={`Cambiar a ${buttonsStyles[task.status].nextStep}`}
                            />
                                            
                            <MyButton
                                className={`bg-red-500 max-w-[100px] ` }
                                onClick={() => DeleteTask(index)}
                                text={`Eliminar`}
                            />

                        </div>
                    ))}

                </div>
            </div>

            {/* Listed Task By Status */}            
            <div className="grid grid-cols-3 ">
                <MyTable tableStatus="completed" title="Completadas"/>
                <MyTable tableStatus="pending"  title="Pendientes"/>
                <MyTable tableStatus="process"  title="En Proceso"/>
            </div>
        </>
    )
}