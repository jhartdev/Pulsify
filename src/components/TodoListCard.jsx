import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";

export default function TodoListCard(props) {
  const { projectId, todos, onAddTodo, onDeleteTodo, deadline } = props;
  const [newTodo, setNewTodo] = useState("");  // Add newTodo state

  const handleAddTodo = (e) => {
    e.preventDefault();
  
    if (newTodo.trim() !== "") {
      const newTodoItem = {
        id: Date.now(),
        text: newTodo,
        completed: false,
        projectId: projectId,
        todoDeadline: "No deadline"
      };
  
      // Call onAddTodo before updating local state
      onAddTodo(newTodoItem);
  
      // Reset the newTodo state to clear the input value
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (todoId) => {
    // Update the project-level state (todos) to remove the todo with the given todoId
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    // Update the project-level state with the updated todos
    onDeleteTodo(todoId);
  };

  useEffect(() => {
    // Do something with todos if needed when they change
  }, [todos]);

  return (
    <div className="todo-list-card">
      <hr />
      {todos && todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            todo={todo}
            onDelete={() => handleDeleteTodo(todo.id)}
            todos={todos}
          />
        ))
      ) : (
        <p>No to-do items found.</p>
      )}
      <form onSubmit={handleAddTodo}>
        <input
          className="add-form"
          type="text"
          placeholder="Add a new to-do item"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className="add-btn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
