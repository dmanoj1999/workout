import React, { useState } from 'react';
import './TodoList.css';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [completed, setCompleted] = useState([]); // Track completed tasks

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input.trim()]);
      setCompleted([...completed, false]);
      setInput('');
    }
  };

  const deleteTask = (idx) => {
    setTasks(tasks.filter((_, i) => i !== idx));
    setCompleted(completed.filter((_, i) => i !== idx));
    if (editIndex === idx) {
      setEditIndex(null);
      setEditValue('');
    }
  };

  const startEdit = (idx) => {
    setEditIndex(idx);
    setEditValue(tasks[idx]);
  };

  const saveEdit = (idx) => {
    if (editValue.trim()) {
      const updated = [...tasks];
      updated[idx] = editValue.trim();
      setTasks(updated);
      setEditIndex(null);
      setEditValue('');
    }
  };

  const toggleCompleted = (idx) => {
    const updated = [...completed];
    updated[idx] = !updated[idx];
    setCompleted(updated);
  };

  return (
    <div className="todo-container">
      <h2>Todo List</h2>
      <div className="todo-input-row">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul className="todo-list">
        {tasks.map((task, idx) => (
          <li
            key={idx}
            style={{
              color: completed[idx] ? 'green' : 'red',
              fontWeight: completed[idx] ? 'bold' : 'normal'
            }}
          >
            {editIndex === idx ? (
              <>
                <input
                  type="text"
                  value={editValue}
                  onChange={e => setEditValue(e.target.value)}
                />
                <button onClick={() => saveEdit(idx)}>Save</button>
                <button onClick={() => setEditIndex(null)}>Cancel</button>
              </>
            ) : (
              <>
                {task}
                <button onClick={() => startEdit(idx)}>Edit</button>
                <button onClick={() => deleteTask(idx)}>Delete</button>
                <button onClick={() => toggleCompleted(idx)}>
                  {completed[idx] ? 'Undo' : 'Completed'}
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;