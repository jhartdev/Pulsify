import React, { useState, useEffect } from 'react';
import './App.css';
import ProjectsTab from './components/ProjectsTab';
import PriorityTaskList from './components/PriorityTaskList';
import CalendarTab from './components/CalendarTab';
import ProfileTab from './components/ProfileTab';
import fakeProjectCards from './components/fakeProjectCards';
import NewProjectForm from './components/NewProjectForm';

function App() {
  const [projectCards, setProjectCards] = useState(fakeProjectCards);
  const [activeTab, setActiveTab] = useState('projects');

  const handleAddProjectCard = (newProjectCard) => {
    setProjectCards([...projectCards, newProjectCard]);
  };

  const handleUpdateProjectCards = (updatedProjectCards) => {
    setProjectCards(updatedProjectCards);
  };

  const handleDeleteProject = (id) => {
    setProjectCards((prevProjectCards) => prevProjectCards.filter((projectCard) => projectCard.id !== id));
  };

  const handleAddTodo = (projectId, newTodo) => {
    const updatedProjectCards = projectCards.map((projectCard) => {
      if (projectCard.id === projectId) {
        const updatedTodo = { ...newTodo, id: Date.now(), todoDeadline: 'No deadline' };
        return {
          ...projectCard,
          todos: [...projectCard.todos, updatedTodo],
        };
      }
      return projectCard;
    });

    setProjectCards(updatedProjectCards);
  };

  const handleDeleteTodo = (projectId, todoId) => {
    const updatedProjectCards = projectCards.map((projectCard) => {
      if (projectCard.id === projectId) {
        const updatedTodos = projectCard.todos.filter((todo) => todo.id !== todoId);
        return {
          ...projectCard,
          todos: updatedTodos,
        };
      }
      return projectCard;
    });
  
    setProjectCards(updatedProjectCards);
  };  
  

  return (
    <div className="app">
      <div className="left-column">
        <img className='logo' src="src\assets\pulsify-logo.png" alt="pulsify logo" />
        <ul className='active-projects-list'>
          <h4>Active Projects</h4>
          {projectCards.map((projectCard) => (
            <li key={projectCard.id}>
              <div className={projectCard.className}></div> {projectCard.projectName} 
            </li>
          ))}
        </ul>
        <div className='form-container'>
          <h4>Add a new project</h4>
          <NewProjectForm handleAddProjectCard={handleAddProjectCard} />
        </div>
      </div>
      <div className="right-column">
        <div className="tabs">
          <button className={`tab-button ${activeTab === 'projects' ? 'active' : ''}`} onClick={() => setActiveTab('projects')}>
            Projects
          </button>
          <button className={`tab-button ${activeTab === 'calendar' ? 'active' : ''}`} onClick={() => setActiveTab('calendar')}>
            Calendar
          </button>
          <button className={`tab-button ${activeTab === 'prioritytasklist' ? 'active' : ''}`} onClick={() => setActiveTab('prioritytasklist')}>
            Priority Task List
          </button>
          <button className={`tab-button ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')}>
            Profile
          </button>
        </div>
        <div className="tab-content">
          {activeTab === 'projects' && (
            <ProjectsTab
              projectCards={projectCards}
              handleAddProjectCard={handleAddProjectCard}
              handleUpdateProjectCards={handleUpdateProjectCards}
              handleDeleteProject={handleDeleteProject}
              onAddTodo={handleAddTodo}
              onDeleteTodo={handleDeleteTodo}
            />
          )}
          {activeTab === 'calendar' && (
            <CalendarTab
              projectCards={projectCards}
              handleUpdateProjectCards={handleUpdateProjectCards}
            />
          )}
          {activeTab === 'prioritytasklist' && <PriorityTaskList projectCards={projectCards} />}
          {activeTab === 'profile' && <ProfileTab />}
          {/* Add other tab components similarly */}
        </div>
      </div>
    </div>
  );
}

export default App;
