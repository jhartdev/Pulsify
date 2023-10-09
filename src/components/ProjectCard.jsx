import React from 'react';
import TodoListCard from './TodoListCard';

export default function ProjectCard(props) {
  const { className, client, projectName, todos, onDelete, onAddTodo, onDeleteTodo, deadline, id } = props;

  function formatDate(deadline) {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const dayOfWeek = daysOfWeek[deadline.getDay()];
    const date = deadline.getDate();
    const month = months[deadline.getMonth()];

    return `${dayOfWeek} ${date} ${month}`;
  }

  const handleDeleteClick = () => {
    onDelete();
  };

  const handleAddTodoToProject = (newTodo) => {
    newTodo.todoDeadline = deadline;

    // Pass the projectId and newTodo to onAddTodo
    onAddTodo(newTodo);
  };

  return (
    <div className={className}>
      <div className="project-label-container">
        <h2 className="date-icon-card">Deadline: {formatDate(deadline)}</h2>
        <div className="title-container">
          <h2 className="client-title">{client}</h2>
          <h2 className="project-title">{projectName}</h2>
        </div>
        <button className="project-delete-btn" onClick={handleDeleteClick}>
          Remove
        </button>
      </div>
      <TodoListCard
        todos={todos}
        onAddTodo={handleAddTodoToProject}
        onDeleteTodo={(todoId) => onDeleteTodo(todoId)}  // Pass todoId for deletion
        projectId={id}
      />
    </div>
  );
}
