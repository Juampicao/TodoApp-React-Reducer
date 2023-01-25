import useTodoProvider from '../../context/hooks/useTodoProvider';
import { buttonsStyles } from '../todo-app/helpers/ButtonStyles';
import { Task } from '../todo-app/interfaces/interface';
import MyButton from './MyButton';
interface DescriptionTaskProps{
    task: Task,
    index: number,
}
const MyTaskTable = ({ task , index}: DescriptionTaskProps) => {
    
    const {
        changeStateTask,
        DeleteTask,
        selectedTask,
        setSelectedTask,
        openDetailmodal
        
    } = useTodoProvider();


    const border = `${buttonsStyles[task.status].nextColor} ` 
    return (
        <>
            <tr>
                {/* {JSON.stringify(task)} */}
            <td className='px-2 border border-slate-300'>
                {task.task.title}   
            </td>

            <td className='px-2 border border-slate-300 flex space-x-2 p-2'>
            <MyButton      
                className={`${buttonsStyles[task.status].nextColor} max-h-[50px] text-sm  `}
                // borderColor={`${buttonsStyles[task.status].nextStep}`}
                onClick={() => changeStateTask(task, index)}
                text={`${buttonsStyles[task.status].nextStep}`}
            />
                
            <MyButton
                className={`bg-red-500 max-w-[50px] ` }
                onClick={() => DeleteTask(index)}
                text={"x"}
                    />
                    
            <MyButton
                className={`bg-slate-500 max-w-[100px] `}
                type="button"
                onClick={() => {openDetailmodal(), setSelectedTask(task)}}        
                text={"Ver"}
                />  
            </td>
        </tr>
        

        </>
  )
}

export default MyTaskTable