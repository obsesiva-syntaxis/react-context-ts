import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"
import { Todo } from "../interfaces/interfaces"

interface TodoItemEssence {
    todo: Todo
}

export const TodoItem = ({ todo }: TodoItemEssence) => {

    const { toggleTodo } = useContext( TodoContext );
    
    const handleDoubleClick = () => {
        toggleTodo( todo.id );
    }

    return (
        <li style={{
            cursor: 'pointer',
            textDecoration: todo.completed ? 'line-through': ''
        }}
            onDoubleClick={ handleDoubleClick }>
            {
                todo.desc
            }
        </li>
    )
}