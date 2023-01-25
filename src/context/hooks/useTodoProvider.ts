import { useContext } from "react";
import { TodoContext } from "../TodoProvider";

const useTodoProvider = () => {
    return useContext(TodoContext);
}

export default useTodoProvider;
