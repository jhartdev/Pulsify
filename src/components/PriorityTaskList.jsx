import React, { useEffect, useState } from 'react';

export default function PriorityTaskList({ projectCards }) {
  const [sortedTodos, setSortedTodos] = useState([]);

  useEffect(() => {
    // Function to sort and set todos whenever projectCards change
    const sortTodos = () => {
      const sortedTodos = projectCards
        .map((projectCard) =>
          projectCard.todos.map((todo) => ({
            ...todo,
            projectClassName: projectCard.className,
            projectName: projectCard.projectName,
          }))
        )
        .flat()
        .sort((a, b) => new Date(a.todoDeadline) - new Date(b.todoDeadline));  // Sorts from furthest to closest




      setSortedTodos(sortedTodos);
    };

    // Call the sorting function initially
    sortTodos();

    // Listen for changes in projectCards and re-sort todos
    const unsubscribe = () => {
      sortTodos();
    };

    return unsubscribe;
  }, [projectCards]);


  // Flatten the array of arrays into a single array
  const flattenedSortedTodos = sortedTodos.flat();

  return (
    <div className="priority-list">
      <h3>Priority Task List</h3>
      <ul>
        {flattenedSortedTodos.map((todo) => (
          <li
            key={todo.id}
            className={`sorted-todo ${todo.projectClassName}`}
          >
            <div className="date-icon">{formatDate(todo.todoDeadline)}</div>
            <div className="priority-description">
              <p>{todo.text}</p>
              <p>{todo.projectName}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function formatDate(deadline) {
  const date = new Date(deadline);

  if (isNaN(date)) {
    return "Not set";
  }

  const options = { month: "long", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
}
