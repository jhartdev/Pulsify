import React, { useState } from 'react';

const NewProjectForm = ({ handleAddProjectCard }) => {
  const [client, setClient] = useState('');
  const [projectName, setProjectName] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [error, setError] = useState('');

  const handleClientChange = (e) => {
    setClient(e.target.value);
    setError('');
  };

  const handleProjectNameChange = (e) => {
    setProjectName(e.target.value);
    setError('');
  };

  const handleAddProject = () => {
    if (!client || !projectName || !day || !month || !year) {
      setError('Please fill in all fields.');
      return;
    }

    const parsedDeadline = new Date(`${year}-${month}-${day}`);
    if (isNaN(parsedDeadline.getTime())) {
      setError('Please use a valid date as a deadline.');
      return;
    }

    const newProjectCard = {
      id: Date.now(),
      client,
      projectName: projectName || 'New Project',
      todos: [],
      deadline: parsedDeadline,
    };

    handleAddProjectCard(newProjectCard);
    setClient('');
    setProjectName('');
    setDay('');
    setMonth('');
    setYear('');
    setError('');
  };

  const daysArray = Array.from({ length: 31 }, (_, i) => i + 1);
  const monthsArray = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const yearsArray = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  return (
    <div className='new-form'>
      <div className="form-group">
        <label htmlFor="client">Client</label>
        <input
          type="text"
          id="client"
          placeholder="Enter client name"
          value={client}
          onChange={handleClientChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="projectName">Project Name</label>
        <input
          type="text"
          id="projectName"
          placeholder="Enter project name"
          value={projectName}
          onChange={handleProjectNameChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="deadline">Deadline</label>
        <div className="date-dropdowns">
          <select value={day} onChange={(e) => setDay(e.target.value)}>
            <option value="">Day</option>
            {daysArray.map(day => <option key={day} value={day}>{day}</option>)}
          </select>
          <select value={month} onChange={(e) => setMonth(e.target.value)}>
            <option value="">Month</option>
            {monthsArray.map((month, index) => <option key={index + 1} value={index + 1}>{month}</option>)}
          </select>
          <select value={year} onChange={(e) => setYear(e.target.value)}>
            <option value="">Year</option>
            {yearsArray.map(year => <option key={year} value={year}>{year}</option>)}
          </select>
        </div>
      </div>
      {error && <div className="error-message">{error}</div>}

      <button className='add-project-btn' onClick={handleAddProject}>Add Project</button>
    </div>
  );
};

export default NewProjectForm;
