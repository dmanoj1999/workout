import React, { useState } from 'react';
import './App.css';
// Import the images
import day1Image from '../assets/day1.png'; // Monday
import day2Image from '../assets/day2.jpg'; // Tuesday
import day3Image from '../assets/day3.png'; // Wednesday
import day4Image from '../assets/day4.jpg'; // Thursday
import day5Image from '../assets/day5.jpg'; // Friday
import day6Image from '../assets/day6.jpg'; // Saturday
import day7Image from '../assets/day7.png'; // Sunday

function App() {
  const [activeDay, setActiveDay] = useState(new Date().getDay());
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  // Map day indices to images
  const dayImages = [
    day7Image, // Sunday (index 0)
    day1Image, // Monday (index 1)
    day2Image, // Tuesday (index 2)
    day3Image, // Wednesday (index 3)
    day4Image, // Thursday (index 4)
    day5Image, // Friday (index 5)
    day6Image  // Saturday (index 6)
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Workout Manager</h1>
      </header>
      
      <nav className="day-nav">
        <ul>
          {weekdays.map((day, index) => (
            <li key={index}>
              <button 
                className={activeDay === index ? 'active' : ''} 
                onClick={() => setActiveDay(index)}
              >
                {day}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      
      <main>
        <p>
          These are the workouts for the {weekdays[activeDay]}.
        </p>
        <div className="day-content">
          <img 
            src={dayImages[activeDay]}
            alt={`${weekdays[activeDay]} Workout Plan`}
            className="day-image"
          />
        </div>
      </main>
    </div>
  );
}

export default App;