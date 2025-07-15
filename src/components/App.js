import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import TodoList from './TodoList';
import Diet from './Diet'; // <-- Add this import
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
  const [showTodo, setShowTodo] = useState(false);
  const [showDiet, setShowDiet] = useState(false); // <-- Add this state
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Workout Manager</h1>
      </header>
      
      <nav className="day-nav">
        <ul>
          {/* Todo List nav item */}
          <li>
            <button
              className={showTodo ? 'active' : ''}
              onClick={() => {
                setShowTodo(true);
                setShowDiet(false);
              }}
            >
              Todo List
            </button>
          </li>
          {/* Diet nav item */}
          <li>
            <button
              className={showDiet ? 'active' : ''}
              onClick={() => {
                setShowDiet(true);
                setShowTodo(false);
              }}
            >
              Diet
            </button>
          </li>
          {/* Weekdays dropdown nav */}
          <li>
            <div className="dropdown" ref={dropdownRef}>
              <button
                className={!showTodo && !showDiet ? 'active' : ''}
                onClick={() => setDropdownOpen((open) => !open)}
              >
                {weekdays[activeDay]} ▼
              </button>
              {dropdownOpen && (
                <div className="dropdown-content">
                  <button
                    onClick={() => {
                      setActiveDay(new Date().getDay());
                      setShowTodo(false);
                      setShowDiet(false);
                      setDropdownOpen(false);
                    }}
                  >
                    Today ({weekdays[new Date().getDay()]})
                  </button>
                  {weekdays.map((day, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setActiveDay(index);
                        setShowTodo(false);
                        setShowDiet(false);
                        setDropdownOpen(false);
                      }}
                      style={{
                        fontWeight: activeDay === index && !showTodo && !showDiet ? 'bold' : 'normal'
                      }}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </li>
        </ul>
      </nav>
      
      <main>
        {showTodo ? (
          <TodoList />
        ) : showDiet ? (
          <Diet />
        ) : (
          <>
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
          </>
        )}
      </main>
    </div>
  );
}

export default App;