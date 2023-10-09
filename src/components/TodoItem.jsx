import React, { useState } from "react";

export default function TodoItem(props) {
  const [completed, setCompleted] = useState(props.completed);

  const handleClick = () => {
    const newCompletedState = !completed;
    setCompleted(newCompletedState);

    if (props.onClick) {
      props.onClick(newCompletedState);
    }
  };

  const handleDeleteToDo = (todoId) => {
    // Check if todos is an array before attempting to filter
    if (Array.isArray(props.todos)) {
      const updatedTodos = props.todos.filter((todo) => todo.id !== todoId);
      // Call the onDeleteTodo function with the projectId and todoId
      props.onDelete(props.todo.projectId, todoId);
    } else {
      console.error("Invalid todos prop:", props.todos);
    }
  };

  const handleCheckboxChange = () => {
    const newCompletedState = !completed;
    setCompleted(newCompletedState);

    if (props.onClick) {
      props.onClick(newCompletedState);
    }
  };

  return (
    <div className="todo-container">
      <div className="todo" onClick={handleClick}>
        <input
          className="complete-box"
          type="checkbox"
          checked={completed}
          onChange={handleCheckboxChange}
        />
        <p>{props.text}</p>
      </div>
      <div>
        <button className="delete-btn" onClick={() => handleDeleteToDo(props.todo.id)}>
          X
        </button>
      </div>
    </div>
  );
}
