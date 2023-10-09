import React, { useState } from 'react';

const CalendarTab = (props) => {
  const { projectCards, handleUpdateProjectCards } = props;

  const [currentDate, setCurrentDate] = useState(new Date(2023, 9, 1));
  const [todoDragged, setTodoDragged] = useState(null);

  const handleDragStart = (e, todo) => {
    setTodoDragged(todo);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, day) => {
    e.preventDefault();
    if (todoDragged) {
      const updatedProjectCards = projectCards.map((projectCard) => ({
        ...projectCard,
        todos: projectCard.todos.map((todo) =>
          todo === todoDragged ? { ...todo, todoDeadline: day } : todo
        ),
      }));
      handleUpdateProjectCards(updatedProjectCards);
      setTodoDragged(null);
      setCurrentDate(new Date(currentDate));
    }
  };

  const handleRemoveTodo = (deadline) => {
    const updatedProjectCards = projectCards.map((projectCard) => {
      const updatedTodos = projectCard.todos.map((todo) => {
        if (todo === deadline.todo) {
          return { ...todo, todoDeadline: 'No deadline' };
        }
        return todo;
      });

      return {
        ...projectCard,
        todos: updatedTodos,
      };
    });

    handleUpdateProjectCards(updatedProjectCards);
  };

  const renderTodosWithoutDeadlines = () => {
    return projectCards.map((projectCard, index) =>
      projectCard.todos
        .filter((todo) => todo.todoDeadline === 'No deadline')
        .map((todo, todoIndex) => (
          <li
            className={projectCard.className}
            key={`${index}-${todoIndex}`}
            draggable="true"
            onDragStart={(e) => handleDragStart(e, todo)}
          >
            {projectCard.projectName} - {todo.text}
          </li>
        ))
    );
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(
      currentDate.getFullYear(),
      currentDate.getMonth()
    );
    const calendarDays = [];
    const projectDeadlines = projectCards
      .filter((projectCard) => projectCard.deadline)
      .map((projectCard) => {
        const deadlineDate = new Date(projectCard.deadline);
        return {
          day: deadlineDate.getDate(),
          month: deadlineDate.getMonth(),
          year: deadlineDate.getFullYear(),
          projectName: projectCard.projectName,
          isTodo: false,
        };
      });

    const todoDeadlines = projectCards.flatMap((projectCard) =>
      projectCard.todos
        .filter((todo) => todo.todoDeadline !== 'No deadline')
        .map((todo, index) => {
          const deadlineDate = new Date(todo.todoDeadline);
          return {
            day: deadlineDate.getDate(),
            month: deadlineDate.getMonth(),
            year: deadlineDate.getFullYear(),
            projectName: projectCard.projectName,
            className: projectCard.className,
            isTodo: true,
            todoText: todo.text,
            todo: todo, // Include the original todo object
          };
        })
    );

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day
      );
      const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' });

      const matchingDeadlines = [
        ...projectDeadlines.filter(
          (deadline) =>
            deadline.day === day &&
            deadline.month === currentDate.getMonth() &&
            deadline.year === currentDate.getFullYear()
        ),
        ...todoDeadlines.filter(
          (deadline) =>
            deadline.day === day &&
            deadline.month === currentDate.getMonth() &&
            deadline.year === currentDate.getFullYear()
        ),
      ];

      calendarDays.push(
        <div
          key={day}
          className="calendar-day"
          onDragOver={handleDragOver}
          onDrop={(e) =>
            handleDrop(
              e,
              `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${day}`
            )
          }
        >
          <h4>{`${dayOfWeek} ${day}`}</h4>
          <ul className="calendar-list">
            {matchingDeadlines.map((deadline, index) => (
              <li
                key={`deadline-${index}`}
                className={deadline.isTodo ? deadline.className : 'pastel-red'}
              >
                {deadline.isTodo ? (
                  <>
                    {deadline.todo.text} - {deadline.projectName}
                    <button
                      className="remove-btn"
                      onClick={() => handleRemoveTodo(deadline)}
                    >
                      Remove
                    </button>
                  </>
                ) : (
                  deadline.projectName
                )}
              </li>
            ))}
          </ul>
        </div>
      );
    }

    return calendarDays;
  };

  const handlePreviousMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  };

  const handleNextMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  };

  const monthYear = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
  }).format(currentDate);

  return (
    <div className="calendar-tab">
      <div className="list-container">
        <h2>Drag & drop to schedule...</h2>
        <ul className="todos-without-deadlines-list">
          {renderTodosWithoutDeadlines()}
        </ul>
      </div>
      <div className="calendar-container">
        <div className="calendar-header">
          <button className="cal-nav-btn" onClick={handlePreviousMonth}>
            Previous month
          </button>
          <h2>{monthYear}</h2>
          <button className="cal-nav-btn" onClick={handleNextMonth}>
            Next month
          </button>
        </div>
        <div className="calendar">{generateCalendarDays()}</div>
      </div>
    </div>
  );
};

export default CalendarTab;
