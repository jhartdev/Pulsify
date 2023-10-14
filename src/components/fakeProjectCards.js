const fakeProjectCards = [
  {
    id: 1,
    client: "Personal",
    projectName: "Portfolio Website",
    className: "pastel-blue", 
    todos: [
      { id: 1, text: "Create new portfolio page based on design", completed: false, todoDeadline: "No deadline" },
    ],
    deadline: new Date(2023, 8, 6)
  },
  {
    id: 2,
    client: "Personal",
    projectName: "Unit Conversion Ext.",
    className: "pastel-green",
    todos: [
      { id: 7, text: "Fix the large integer rendering problem", completed: false, todoDeadline: "No deadline" },
    ],
    deadline: new Date(2023, 8, 15)
  },
  {
    id: 3,
    client: "Personal",
    projectName: "Basketchef WPA",
    className: "pastel-pink", 
    todos: [
      { id: 8, text: "Create a database save with all the recipes on", completed: false, todoDeadline: "No deadline" },
      { id: 9, text: "Add an ability to add anything to the shopping list", completed: false, todoDeadline: "No deadline" },
    ],
    deadline: new Date(2023, 11, 15)
  },
  {
    id: 4,
    client: "Personal",
    projectName: "Pulsify Task Manager",
    className: "pastel-yellow", 
    todos: [
      {id: 14, text: "Set up a live database to store and save the updates", completed: false, todoDeadline: "No deadline" },
      {id: 14, text: "Create a Profile and login/ registration functionality", completed: false, todoDeadline: "No deadline" },
      {id: 14, text: "Make design responsive...", completed: false, todoDeadline: new Date(2023, 11, 15) }
    
    ],
    deadline: new Date(2023, 11, 15)
  },
  {
    id: 5,
    client: "Personal",
    projectName: "E-Commerce Website",
    className: "pastel-blue", 
    todos: [
      { id: 10, text: "Learn and start building an e-commerce website", completed: false, todoDeadline: "No deadline" },
    ],
    deadline: new Date(2023, 11, 15)
  },
  {
    id: 6,
    client: "Personal",
    projectName: "Job Search",
    className: "pastel-green",
    todos: [
      { id: 11, text: "Create new CV", completed: false, todoDeadline: "No deadline" },
      { id: 12, text: "Update Linkedin", completed: false, todoDeadline: "No deadline" },
      { id: 13, text: "Create a cover letter template", completed: false, todoDeadline: "No deadline" },
    ],
    deadline: new Date(2023, 11, 15)
  },
];

export default fakeProjectCards;
