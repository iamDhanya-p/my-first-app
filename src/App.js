import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
function Greeting(props) {
  return <h2>Hello, {props.name}!</h2>;
}
function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/students')
      .then(res => res.json())
      .then(data => setStudents(data));
  }, []);

  return (
    <div>
      <h2>Students from Backend</h2>
      <ul>
        {students.map((s, i) => (
          <li key={i}>{s.name} - {s.course}</li>
        ))}
      </ul>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi, I'm Dhanya. This is my first React app!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Greeting name="Dhanya" />
<Greeting name="Anu" />
      <StudentList />
      <TodoList />
    </div>
  );
}
function TodoList() {
  const [todos, setTodos] = useState(["Learn JS", "Learn React"]);
  const [newTodo, setNewTodo] = useState("");

  function addTodo() {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  }

  return (
    <div>
      <h2>My To-Do List</h2>
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a task"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
