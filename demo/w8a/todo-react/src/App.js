import React from 'react';
import './App.css';
const todoList1 = [
  { completed: true, priority: 1, content: 'Complete Demo' },
  { completed: true, priority: 2, content: 'Complete Demo 2' },
  { completed: false, priority: 3, content: 'Complete Demo 3' }
]

function TodoItem(props) {
  return <p>${props.content}</p>
}

function App() {
  let array = todoList1.map((value) =>
  <TodoItem content={value.content}
  priority={value.priority}
  completed={value.completed} />
)
return (
   array
  );
}

export default App;