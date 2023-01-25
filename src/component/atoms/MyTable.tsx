// import useTodoProvider from '../../context/hooks/useTodoProvider';

// import { TaskState } from '../todo-app/interfaces/interface';

// interface TableStatusProps{
//     statusTable: TaskState["state"];
// }
// const MyTable = ({statusTable} : any) => {

//         const {
//         state,
//         AddTask,
//         ChangeCompletedTask,
//         ChangePendingTask,
//         ChangeProcessTask,
//         DeleteTask,
        
//     } = useTodoProvider();
    
//     return (
//     // <div className='grid grid-cols-3'>
            
//         <div className="my-3">
//             <h2 className="font-bold text-xl text-yellow-500"> Tareas Pendientes</h2>
//             <table className='border-2 rounded-2xl bg-slate-100 text-center'>
//                 <thead>
//                     <th className='p-6 '>
//                         Title
//                     </th>
//                     <th className='p-4'>
//                         Description
//                     </th>
//                 </thead>
                    
//                 {/* <tbody>
//                     {state.todos.map((task: Task) => task.status === {statusTable} ?
//                         <DescriptionTask task={task} /> : ""
//                     )}
//                 </tbody> */}
//                 <tbody>
//                    {statusTable}
//                 </tbody>

//             </table>
//         </div>
//         {/* <div className="my-3">
//             <h2 className="font-bold text-xl text-blue-500"> Tareas Proceso</h2>
                
//              <table className='border-2 rounded-2xl bg-slate-100 text-center'>
//                 <thead>
//                     <th className='p-6 '>
//                         Title
//                     </th>
//                      <th className='p-4'>
//                         Description
//                     </th>
//                 </thead>
                     
//                 <tbody>
//                     {state.todos.map((task: Task) => task.status === "process" ?
//                         <DescriptionTask task={task} /> : ""
//                     )}
//                 </tbody>

//             </table>
//             </div>
            
//             <div className="my-3">
//                 <h2 className="font-bold text-xl text-green-500"> Tareas Completadas</h2>
//                 <table className='border-2 rounded-2xl bg-slate-100 text-center'>
//                     <thead>
//                         <th className='p-6 '>
//                             Title
//                         </th>
//                         <th className='p-4'>
//                             Description
//                         </th>
//                     </thead>
                        
//                     <tbody>
//                         {state.todos.map((task: Task) => task.status === "completed" ?
//                             <DescriptionTask task={task} /> : ""
//                         )}
//                     </tbody>
//             </table>
//         </div> */}
//     // </div>
            
//   )
// }

// export default MyTable


import useTodoProvider from '../../context/hooks/useTodoProvider';
import { buttonsStyles } from '../todo-app/helpers/ButtonStyles';
import { Task, TaskState } from '../todo-app/interfaces/interface';
import DescriptionTask from './DescriptionTask';

interface TableStatusProps{
    tableStatus: TaskState["state"],
    title: string

}

const MyTable = ({tableStatus , title} : TableStatusProps ) => {

    const {
        state,    
    } = useTodoProvider();
    

    return (
            
        <div className={`my-3`}>
            <h2 className={`${buttonsStyles[tableStatus].textColor}  text-xl font-bold text-center `}> Tareas {title}  </h2>
            <table className={` border-collapse rounded-xl  border--400 mx-auto p-5 text-white text-lg font-bold  text-center ${buttonsStyles[tableStatus].color} `}>
                <thead className='bg-slate-800 text-white'>
                    <th className='px-10 border border-slate-300'>
                        Titulo
                    </th>
                    <th className='px-10 border border-slate-300'>
                        Description
                    </th>
                   
                </thead>
                    
                <tbody className=''>
                    {state.todos.map((task: Task) => task.status === tableStatus ?
                        <DescriptionTask task={task} /> : ""
                    )}
                </tbody>
            </table>
        </div> 

            
  )
}

export default MyTable