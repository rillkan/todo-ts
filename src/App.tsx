import { useState, ChangeEvent } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


export default function App() {
  const [todo, setTodo] = useState<string[]>([])
  const [newTodo, setNewtodo] = useState<string>("")

  function addTask() {
    setTodo([...todo, newTodo])
    setNewtodo("")
  }

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setNewtodo(e.target.value)}
      />
      <Button onClick={addTask}>Add</Button>
      <div>{todo}</div>
    </div>
  )
}
