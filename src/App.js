import React, { useState, useEffect } from 'react';
import './App.css';

// Timetable data for each day
const timetableData = {
  Monday: [
    { time: "7:00 AM - 7:30 AM", activity: "Wake up and morning routine" },
    { time: "7:30 AM - 8:00 AM", activity: "LeetCode practice or coding challenge" },
    { time: "8:00 AM - 8:50 AM", activity: "Study session (review for Spanish)" },
    { time: "8:50 AM - 9:45 AM", activity: "Spanish" },
    { time: "9:45 AM - 9:50 AM", activity: "Short break" },
    { time: "9:50 AM - 10:40 AM", activity: "HPC" },
    { time: "10:40 AM - 10:45 AM", activity: "Short break" },
    { time: "10:45 AM - 11:35 AM", activity: "DE" },
    { time: "11:35 AM - 11:40 AM", activity: "Short break" },
    { time: "11:40 AM - 12:30 PM", activity: "CD" },
    { time: "12:30 PM - 1:00 PM", activity: "Lunch" },
    { time: "1:00 PM - 2:30 PM", activity: "Internship project or assignments" },
    { time: "2:30 PM - 3:00 PM", activity: "Short break" },
    { time: "3:00 PM - 4:30 PM", activity: "Study session (focus on coding algorithms or project development)" },
    { time: "4:30 PM - 5:00 PM", activity: "Short break" },
    { time: "5:00 PM - 6:00 PM", activity: "Continue internship project or project development" },
    { time: "6:00 PM - 6:30 PM", activity: "Relaxation or light exercise" },
    { time: "6:30 PM - 7:30 PM", activity: "Dinner" },
    { time: "7:30 PM - 8:30 PM", activity: "Study session (review class notes and work on algorithms)" },
    { time: "8:30 PM - 9:00 PM", activity: "Wrap up and plan for tomorrow" },
  ],
  Tuesday: [
    { time: "7:00 AM - 7:30 AM", activity: "Wake up and morning routine" },
    { time: "7:30 AM - 8:00 AM", activity: "LeetCode practice or coding challenge" },
    { time: "8:00 AM - 8:50 AM", activity: "DE" },
    { time: "8:50 AM - 9:45 AM", activity: "CD" },
    { time: "9:45 AM - 9:50 AM", activity: "Short break" },
    { time: "9:50 AM - 10:40 AM", activity: "IWP" },
    { time: "10:40 AM - 10:45 AM", activity: "Short break" },
    { time: "10:45 AM - 11:35 AM", activity: "Embedded Systems" },
    { time: "11:35 AM - 12:30 PM", activity: "Study session (focus on project work or internship)" },
    { time: "12:30 PM - 1:00 PM", activity: "Lunch" },
    { time: "1:00 PM - 2:30 PM", activity: "Study session (focus on IWP and Embedded Systems)" },
    { time: "2:30 PM - 3:00 PM", activity: "Short break" },
    { time: "3:00 PM - 4:30 PM", activity: "Study session (coding algorithms or project development)" },
    { time: "4:30 PM - 5:00 PM", activity: "Short break" },
    { time: "5:00 PM - 6:00 PM", activity: "Continue internship project or project development" },
    { time: "6:00 PM - 6:30 PM", activity: "Relaxation or light exercise" },
    { time: "6:30 PM - 7:30 PM", activity: "Dinner" },
    { time: "7:30 PM - 8:30 PM", activity: "Study session (review class notes and work on algorithms)" },
    { time: "8:30 PM - 9:00 PM", activity: "Wrap up and plan for tomorrow" },
  ],
  Wednesday: [
    { time: "7:00 AM - 7:30 AM", activity: "Wake up and morning routine" },
    { time: "7:30 AM - 8:00 AM", activity: "LeetCode practice or coding challenge" },
    { time: "8:00 AM - 8:50 AM", activity: "Embedded Systems" },
    { time: "8:50 AM - 9:45 AM", activity: "Break" },
    { time: "9:45 AM - 10:40 AM", activity: "Spanish" },
    { time: "10:40 AM - 10:45 AM", activity: "Short break" },
    { time: "10:45 AM - 11:35 AM", activity: "HPC" },
    { time: "11:35 AM - 12:30 PM", activity: "Study session (focus on HPC and Spanish)" },
    { time: "12:30 PM - 1:00 PM", activity: "Lunch" },
    { time: "1:00 PM - 2:30 PM", activity: "Study session (project work or assignments)" },
    { time: "2:30 PM - 3:00 PM", activity: "Short break" },
    { time: "3:00 PM - 4:30 PM", activity: "Study session (coding algorithms or project development)" },
    { time: "4:30 PM - 5:00 PM", activity: "Short break" },
    { time: "5:00 PM - 6:00 PM", activity: "Continue internship project or project development" },
    { time: "6:00 PM - 6:30 PM", activity: "Relaxation or light exercise" },
    { time: "6:30 PM - 7:30 PM", activity: "Dinner" },
    { time: "7:30 PM - 8:30 PM", activity: "Study session (review class notes and work on algorithms)" },
    { time: "8:30 PM - 9:00 PM", activity: "Wrap up and plan for tomorrow" },
  ],
  Thursday: [
    { time: "7:00 AM - 7:30 AM", activity: "Wake up and morning routine" },
    { time: "7:30 AM - 8:00 AM", activity: "LeetCode practice or coding challenge" },
    { time: "8:00 AM - 8:50 AM", activity: "HPC" },
    { time: "8:50 AM - 9:45 AM", activity: "DE" },
    { time: "9:45 AM - 9:50 AM", activity: "Short break" },
    { time: "9:50 AM - 10:40 AM", activity: "CD" },
    { time: "10:40 AM - 10:45 AM", activity: "Short break" },
    { time: "10:45 AM - 11:35 AM", activity: "IWP" },
    { time: "11:35 AM - 12:30 PM", activity: "Study session (focus on HPC and CD)" },
    { time: "12:30 PM - 1:00 PM", activity: "Lunch" },
    { time: "1:00 PM - 2:30 PM", activity: "Study session (project work or internship)" },
    { time: "2:30 PM - 3:00 PM", activity: "Short break" },
    { time: "3:00 PM - 4:30 PM", activity: "Study session (coding algorithms or project development)" },
    { time: "4:30 PM - 5:00 PM", activity: "Short break" },
    { time: "5:00 PM - 6:00 PM", activity: "Continue internship project or project development" },
    { time: "6:00 PM - 6:30 PM", activity: "Relaxation or light exercise" },
    { time: "6:30 PM - 7:30 PM", activity: "Dinner" },
    { time: "7:30 PM - 8:30 PM", activity: "Study session (review class notes and work on algorithms)" },
    { time: "8:30 PM - 9:00 PM", activity: "Wrap up and plan for tomorrow" },
  ],
  Friday: [
    { time: "7:00 AM - 7:30 AM", activity: "Wake up and morning routine" },
    { time: "7:30 AM - 8:00 AM", activity: "LeetCode practice or coding challenge" },
    { time: "8:00 AM - 8:50 AM", activity: "Embedded Systems" },
    { time: "8:50 AM - 9:45 AM", activity: "Break" },
    { time: "9:45 AM - 10:40 AM", activity: "Spanish" },
    { time: "10:40 AM - 10:45 AM", activity: "Short break" },
    { time: "10:45 AM - 11:35 AM", activity: "HPC" },
    { time: "11:35 AM - 12:30 PM", activity: "Study session (focus on Spanish and HPC)" },
    { time: "12:30 PM - 1:00 PM", activity: "Lunch" },
    { time: "1:00 PM - 2:30 PM", activity: "Study session (project work or assignments)" },
    { time: "2:30 PM - 3:00 PM", activity: "Short break" },
    { time: "3:00 PM - 4:30 PM", activity: "Study session (coding algorithms or project development)" },
    { time: "4:30 PM - 5:00 PM", activity: "Short break" },
    { time: "5:00 PM - 6:00 PM", activity: "Continue internship project or project development" },
    { time: "6:00 PM - 6:30 PM", activity: "Relaxation or light exercise" },
    { time: "6:30 PM - 7:30 PM", activity: "Dinner" },
    { time: "7:30 PM - 8:30 PM", activity: "Study session (review class notes and work on algorithms)" },
    { time: "8:30 PM - 9:00 PM", activity: "Wrap up and plan for tomorrow" },
  ],
};

const scheduleNotification = (time, message) => {
  const now = new Date();
  const targetTime = new Date(now.toDateString() + ' ' + time);
  const delay = targetTime - now;

  if (delay > 0) {
    setTimeout(() => {
      if (Notification.permission === 'granted') {
        new Notification('Activity Starting', { body: message });
      } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(permission => {
          if (permission === 'granted') {
            new Notification('Activity Starting', { body: message });
          }
        });
      }
    }, delay);
  }
};

function App() {
  const [day, setDay] = useState('Monday');

  useEffect(() => {
    const activities = timetableData[day] || [];
    activities.forEach(({ time, activity }) => {
      scheduleNotification(time, activity);
    });
  }, [day]);

  return (
    <div className="App">
      <h1>Timetable App</h1>
      <select onChange={(e) => setDay(e.target.value)} value={day}>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
      </select>
      <div>
        <h2>{day} Timetable</h2>
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Activity</th>
            </tr>
          </thead>
          <tbody>
            {timetableData[day]?.map((item, index) => (
              <tr key={index}>
                <td>{item.time}</td>
                <td>{item.activity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
