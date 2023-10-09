const fakeProjectCards = [
  {
    id: 1,
    client: "Personal",
    projectName: "Portfolio Website",
    className: "pastel-blue", 
    todos: [
      { id: 1, text: "Update technologies used", completed: false, todoDeadline: "No deadline" },
      { id: 2, text: "Adjust the design slightly to improve", completed: false, todoDeadline: "No deadline" },
      { id: 3, text: "Add functionality to the white links at the bottom of the page", completed: false, todoDeadline: "No deadline" },
      { id: 4, text: "Add the ability to download my pdf cv using CV button", completed: false, todoDeadline: "No deadline" },
      { id: 5, text: "Add Readme files explaining the project challenges etc", completed: false, todoDeadline: "No deadline" },
      { id: 6, text: "Redo the portfolio website with react implementation", completed: false, todoDeadline: "No deadline" },
    ],
    deadline: new Date(2023, 8, 6)
  },
  {
    id: 2,
    client: "Personal",
    projectName: "Unit Conversion Ext.",
    className: "pastel-green",
    todos: [
      { id: 7, text: "Fix the large integer rendering problem", completed: false, todoDeadline: new Date(2023, 11, 15) },
    ],
    deadline: new Date(2023, 8, 15)
  },
  {
    id: 3,
    client: "Personal",
    projectName: "Basketchef WPA",
    className: "pastel-pink", 
    todos: [
      { id: 8, text: "Create a database save with all the recipes on", completed: false, todoDeadline: new Date(2023, 11, 15) },
      { id: 9, text: "Add an ability to add anything to the shopping list", completed: false, todoDeadline: new Date(2023, 11, 15) },
    ],
    deadline: new Date(2023, 11, 15)
  },
  {
    id: 4,
    client: "Personal",
    projectName: "Pulsify Task Manager",
    className: "pastel-yellow", 
    todos: [],
    deadline: new Date(2023, 11, 15)
  },
  {
    id: 5,
    client: "Personal",
    projectName: "E-Commerce Website",
    className: "pastel-blue", 
    todos: [
      { id: 10, text: "Learn and start building an e-commerce website", completed: true, todoDeadline: new Date(2023, 11, 15) },
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
      { id: 12, text: "Update Linkedin", completed: true, todoDeadline: "No deadline" },
      { id: 13, text: "Create a cover letter template", completed: false, todoDeadline: "No deadline" },
    ],
    deadline: new Date(2023, 11, 15)
  },
];

export default fakeProjectCards;
