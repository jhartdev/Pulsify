import React, { useEffect } from "react";
import TodoItem from "./TodoItem";

export default function TodoListCard(props) {
  const { projectId, todos, onAddTodo, onDeleteTodo, deadline } = props;

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
            todos={todos} // Make sure todos is passed correctly here
          />
        ))
      ) : (
        <p>No to-do items found.</p>
      )}
    </div>
  );
}
