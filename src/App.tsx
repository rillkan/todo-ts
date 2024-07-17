import { useState, ChangeEvent } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//Define the component props for better readability
interface TodolistProps {
  alltodo: string[]
}

export default function App() {
  const [todo, setTodo] = useState<string[]>([])
  const [newTodo, setNewtodo] = useState<string>("")

  function addTask() {
    setTodo([...todo, newTodo])
    setNewtodo("")
  }

  function deleteTask(remove: string) {
    setTodo(todo.filter(todo => todo !== remove))
  }

  function Todolist({ alltodo }: TodolistProps) {
    return (
      <ul>
        {alltodo.map((todo, index) => (
          <li key={index}>{todo} <Button variant="danger" onClick={() => deleteTask(todo)}>Delete</Button></li>
        ))}
      </ul>
    )
  }

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setNewtodo(e.target.value)}
      />
      <Button onClick={addTask}>Add</Button>
      <Todolist alltodo={todo}></Todolist>
    </div>
  )
}
