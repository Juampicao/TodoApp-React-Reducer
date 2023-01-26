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
        DeleteTask,
        changeStateTask,
        
    } = useTodoProvider();
    
    const [task, setTask] = useState<Task>(INITIAL_STATE_TASK);
    
    return (
        <>
            <h1 className="font-bold text-4xl text-center">  To-Do App UseReducer</h1>
            <div className="grid grid-rows md:grid-cols-2">
                <div>
                    {/* Form */}
                    <form
                        onSubmit={e => {
                        AddTask(task);
                        e.preventDefault();
                        setTask({ title: "", description: "", status: "pending"})
                    }}>
                        <div className="bg-slate-50 p-4 space-y-3 rounded-xl shadow-lg max-w-sm grid items-center">

                            <h2 className="text-center text-xl font-bold"> Agregar Tarea</h2>
                            <div className="grid grid-cols-2">
                                <label htmlFor="title" className=""> Titulo</label>
                                <input type="text" id="title"
                                    className="border-slate-400 border-2 rounded-xl p-1 "
                                    value={task.title}
                                    onChange={(e) => setTask({ ...task, title: e.target.value })} />
                            </div>
                            
                            <div className="grid grid-cols-2">
                                <label htmlFor="description" className=""> Descripcion</label>
                                <textarea id="description"
                                    className="border-slate-400 border-2 rounded-xl p-1"
                                    value={task.description}
                                    onChange={(e) => setTask({ ...task, description: e.target.value })} />
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
            <div className="grid grid-rows grid-cols-1 md:grid-rows-1 md:grid-cols-3 ">
                <MyTable tableStatus="pending"  title="Pendientes"/>
                <MyTable tableStatus="process"  title="En Proceso"/>
                <MyTable tableStatus="completed" title="Completadas"/>
            </div>
     
        </>
    )
}

