import React, { useState } from 'react';
//import './Calendar.css';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const renderCalendar = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const weeks = [];

    let dayOfWeek = 0;
    let daysInWeek = [];

    // Render the days of the month in weeks
    for (let i = 1; i <= daysInMonth; i++) {
      daysInWeek.push(
        <div
          key={i}
          className={`day ${selectedDate === i ? 'selected' : ''}`}
          onClick={() => handleDateClick(i)}
        >
          {i}
        </div>
      );

      dayOfWeek++;
      if (dayOfWeek === 7 || i === daysInMonth) {
        weeks.push(<div key={weeks.length} className="week">{daysInWeek}</div>);
        daysInWeek = [];
        dayOfWeek = 0;
      }
    }

    // Render the calendar
    return (
      <div className="calendar">
        <div className="header">
          <div className="month">{today.toLocaleString('default', { month: 'long' })} {year}</div>
          <div className="days-of-week">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>
        </div>
        <div className="body">{weeks}</div>
      </div>
    );
  };

  return (
    <div>
      {renderCalendar()}
    </div>
  );
};

export default Calendar;
