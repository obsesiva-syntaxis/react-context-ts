import { useReducer } from "react";
import { TodoState } from "../interfaces/interfaces";
import { TodoContext } from "./TodoContext";
import { todoReducer } from "./todoReducer";

const INITIAL_STATE: TodoState = {
  todoCount: 0,
  todos: [
    {
      id: '1',
      desc: 'Recolectar las piedras del infinito',
      completed: false
    },
    {
      id: '2',
      desc: 'Recolectar las piedras del alma',
      completed: false
    }
  ],
  completed: 0,
  pending: 2
}

interface TodoEssence {
  children: JSX.Element | JSX.Element[];
}

export const TodoProvider = ({ children }: TodoEssence) => {

  const [ todoState, dispatch ] = useReducer(todoReducer, INITIAL_STATE);

  const toggleTodo = ( id: string ) => {
    dispatch({ type: 'toggleTodo', payload: { id } });
  }

  return (
    <TodoContext.Provider value={{
      todoState,
      toggleTodo
    }}>
      {children}
    </TodoContext.Provider>
  )
}
