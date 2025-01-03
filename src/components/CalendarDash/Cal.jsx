import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function Cal() {
  const [events, setEvents] = useState([]);

  const handleDateClick = (arg) => {
    const title = prompt("Event Title:");
    if (title) {
      // Choose a random color for the event (you can customize this logic)
      const randomColor = getRandomColor();
      
      // Create a new event object with the chosen color
      const newEvent = {
        title,
        start: arg.date,
        allDay: arg.allDay,
        color: randomColor, // Add a color property to the event
      };
      setEvents([...events, newEvent]);
    }
  };

  // Function to generate random colors
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="rounded-[20px] bg-transparent">
      <FullCalendar 
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        height={"90vh"}
        dateClick={handleDateClick}
        events={events}
        eventContent={(arg) => (
          // Customize the event rendering to set the event color
          <div className="rounded-[20px]" style={{ backgroundColor: arg.event.extendedProps.color }}>
            {arg.timeText}
            <br />
            {arg.event.title}
          </div>
        )}
      />
    </div>
  );
}

export default Cal;
