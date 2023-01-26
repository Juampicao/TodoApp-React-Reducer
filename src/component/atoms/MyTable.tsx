
import useTodoProvider from '../../context/hooks/useTodoProvider';
import { buttonsStyles } from '../todo-app/helpers/ButtonStyles';
import { Task, TaskState } from '../todo-app/interfaces/interface';
import Modal from './Modal';
import MyDetailsTask from './MyDetailsTask';
import MyTaskTable from './MyTaskTable';

interface TableStatusProps{
    tableStatus: TaskState["state"],
    title: string

}

const MyTable = ({tableStatus , title} : TableStatusProps ) => {

    const {
        state,    
        selectedTask,
        isOpenDetailModal,
        closeDetailModal,
    } = useTodoProvider();
    
    return (
            
        <div className={`my-3 `}>
            <h2 className={`${buttonsStyles[tableStatus].textColor}  text-xl font-bold text-center `}> Tareas {title}  </h2>
            <table className={` border-collapse rounded-xl  border--400 mx-auto p-5 text-white text-lg font-bold  text-center ${buttonsStyles[tableStatus].color} `}>
                <thead className='bg-slate-800  '>
                    <th className='px-10 border border-slate-300'>
                        Titulo
                    </th>
                   <th className='px-10 border border-slate-300'>
                        Funciones
                    </th>
                </thead>
                    
                <tbody className=''>
                    {state.todos.map((task: Task, index: number) => task.status === tableStatus ?
                        <MyTaskTable task={task} index={index}  /> : ""
                    )}
                </tbody>
            </table>
            

                <Modal isOpen={isOpenDetailModal} closeModal={closeDetailModal}>
                    <MyDetailsTask  />
                </Modal>


        </div> 
  )
}

export default MyTable