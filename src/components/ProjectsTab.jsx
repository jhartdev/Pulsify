// ProjectsTab.jsx
import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsTab = ({ projectCards, handleDeleteProject, onAddTodo, onDeleteTodo }) => {
  const pastelColors = ['pastel-blue', 'pastel-pink', 'pastel-green', 'pastel-yellow'];

  return (
    <div>
      <div className="project-cards">
        {projectCards.map((projectCard, index) => {
          const colourClass = pastelColors[index % pastelColors.length];

          return (
            <ProjectCard
              className={`project-card ${colourClass}`}
              key={projectCard.id}
              id={projectCard.id}
              client={projectCard.client}
              projectName={projectCard.projectName}
              todos={projectCard.todos}
              deadline={projectCard.deadline}
              onDelete={() => handleDeleteProject(projectCard.id)}
              onAddTodo={(newTodo) => onAddTodo(projectCard.id, newTodo)}
              onDeleteTodo={(todoId) => onDeleteTodo(projectCard.id, todoId)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsTab;
