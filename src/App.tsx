import "./App.css";
import MainTodo from "./component/todo-app/pages/MainTodo";
import { TodoProvider } from "./context/TodoProvider";

const App = () => {
  return (
    <>
      <div className="bg-slate-200 p-10 min-h-full">
        <TodoProvider>
          <MainTodo/>
        </TodoProvider>
      </div>
    </>
  )
}

export default App






















// import "./App.css";
// import { ShoppingPage } from "./component/02-component-pattern/pages/ShoppingPage";
// import { Navigation } from "./routes/Navigation";

// const App = () => {
//   return (
//     <>
//       <div className="bg-slate-200 p-10 min-h-full">
//         <h1>Proyecto Cocina</h1>

//         {/* <AxiosVisualComponent1 />
//         <AxiosVisualComponent2 /> */}
//         {/* <ShoppingPage/> */}
//         {/* <ListPage/> */}
//         {/* /* <ClubsList /> */}


//         {/* <ClubProvider>
//           <ClubsList />
//         </ClubProvider> */}

        
//         {/* <PeopleList />

//         <h1> Prueba Dynamic Form json </h1> 
//         <DynamicForm customShema={formJson}  /> */}
//         {/* <UsersTable />  */}
//         {/* <TailwindTable/> */}
//         <Navigation />
//         <ShoppingPage/>
//         </div>
//     </>
//   )
// }

// export default App