import { useContext } from "react"
import { Todo } from "../interfaces/interfaces"
import { TodoContext } from "../context/TodoContext"

interface props {
  todo: Todo
}

const TodoItem = ({ todo }: props) => {
  const handleDoubleClick = (): void => {
    toggleTodo(todo.id)
  }
  const {toggleTodo} = useContext(TodoContext)
  return (

    <li
      style={{
          cursor: "pointer",
          textDecoration: todo.completed ? "line-through" : ""
      }}
      onDoubleClick={handleDoubleClick}>
      {todo.desc}
    </li>

  )
}

export default TodoItem
