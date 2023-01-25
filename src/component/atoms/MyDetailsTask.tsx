import useTodoProvider from '../../context/hooks/useTodoProvider'
import { buttonsStyles } from '../todo-app/helpers/ButtonStyles'


const MyDetailsTask = () => {
    
    const { selectedTask : task} = useTodoProvider()
    return (
        <>
            <div className='grid grid-rows p-10 items-center text-left '>
                <ul className='space-y-5'>
                    <li>
                       <span className='font-bold'>  Titulo: </span> {task.task.title}
                    </li>
                    <li>
                       <span className='font-bold'>  Descripcion: </span> {task.task.description}
                    </li>
                    <li className={`${buttonsStyles[task.status].color} p-2 text-center`}>
                       <span className='font-bold'>  Estado: </span> {task.status}
                    </li>

                   
                </ul>
            </div>
        </>
  )
}

export default MyDetailsTask