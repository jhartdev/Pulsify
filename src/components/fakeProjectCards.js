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
    ],
    deadline: new Date(2023, 8, 6)
  },
  {
    id: 2,
    client: "Personal",
    projectName: "Unit Conversion Ext.",
    className: "pastel-green",
    todos: [
      { id: 6, text: "Fix the large integer rendering problem", completed: false, todoDeadline: new Date(2023, 11, 15) },
    ],
    deadline: new Date(2023, 8, 15)
  },
  {
    id: 3,
    client: "Personal",
    projectName: "Basketchef WPA",
    className: "pastel-pink", 
    todos: [
      { id: 7, text: "Create a database save with all the recipes on", completed: false, todoDeadline: new Date(2023, 11, 15) },
      { id: 8, text: "Add an ability to add anything to the shopping list", completed: false, todoDeadline: new Date(2023, 11, 15) },
    ],
    deadline: new Date(2023, 11, 15)
  },
  {
    id: 4,
    client: "Charlotte Tilbury",
    projectName: "Glasgow Pulpit",
    className: "pastel-yellow", 
    todos: [],
    deadline: new Date(2023, 11, 15)
  },
  {
    id: 5,
    client: "Moncler",
    projectName: "Project 5",
    className: "pastel-blue", 
    todos: [
      { id: 9, text: "Task 1", completed: true, todoDeadline: new Date(2023, 11, 15) },
    ],
    deadline: new Date(2023, 11, 15)
  },
  {
    id: 6,
    client: "Penhaligons",
    projectName: "Potion Centrepieces",
    className: "pastel-green",
    todos: [
      { id: 10, text: "Task 1", completed: false, todoDeadline: "No deadline" },
      { id: 11, text: "Task 2", completed: true, todoDeadline: "No deadline" },
    ],
    deadline: new Date(2023, 11, 15)
  },
];

export default fakeProjectCards;
