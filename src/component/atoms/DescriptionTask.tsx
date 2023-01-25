import useTodoProvider from '../../context/hooks/useTodoProvider';
import { Task } from '../todo-app/interfaces/interface';

interface DescriptionTaskProps{
    task: Task
}
const DescriptionTask = ({ task }: DescriptionTaskProps) => {
    
    const {
        state,
        AddTask,
        ChangeCompletedTask,
        ChangePendingTask,
        ChangeProcessTask,
        DeleteTask,
        
    } = useTodoProvider();

    
    return (
        <>
        <tr>
            <td className='px-2 border border-slate-300'>
                {task.task.title}   
            </td>
            <td className='px-2 border border-slate-300'>
                {task.task.description}
            </td>
        </tr>
    

        </>
  )
}

export default DescriptionTask