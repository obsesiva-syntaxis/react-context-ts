import { createContext } from "react";
import { Todo, TodoState } from "../interfaces/interfaces";

export type TodoContextEssence = {
    todoState: TodoState;
    toggleTodo: ( id: string ) => void;
}

export const TodoContext = createContext<TodoContextEssence>({} as TodoContextEssence);