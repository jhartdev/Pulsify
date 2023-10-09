import React, { useState } from 'react';

const NewProjectForm = ({ handleAddProjectCard }) => {
  const [client, setClient] = useState('');
  const [projectName, setProjectName] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleClientChange = (e) => {
    setClient(e.target.value);
  };

  const handleProjectNameChange = (e) => {
    setProjectName(e.target.value);
  };

  const handleDeadlineChange = (e) => {
    setDeadline(e.target.value);
  };

  const handleAddProject = () => {
    const newProjectCard = {
      id: Date.now(),
      client,
      projectName: projectName || 'New Project',
      todos: [],
      deadline: new Date(deadline), // Assuming the deadline is a valid date string
    };

    handleAddProjectCard(newProjectCard);
    setClient('');
    setProjectName('');
    setDeadline('');
  };

  return (
    <div className='new-form'>
      <input
        type="text"
        placeholder="Client"
        value={client}
        onChange={handleClientChange}
      />
      <input
        type="text"
        placeholder="Project Name"
        value={projectName}
        onChange={handleProjectNameChange}
      />
      <input
        type="text"
        placeholder="Deadline YYYY-MM-DD"
        value={deadline}
        onChange={handleDeadlineChange}
      />

      <button className='add-project-btn' onClick={handleAddProject}>Add Project</button>
    </div>
  );
};

export default NewProjectForm;
