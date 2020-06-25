import React from 'react'

import Calendar from 'rc-big-calendar'
import 'rc-big-calendar/dist/index.css'

const App = () => {
  const customRender = (day, startDate, endDate, isSelected, isInMonth) => {
    if (isInMonth) {
      return (
        <div
          style={{
            height: '100%',
            boxSizing: 'border-box',
            padding: '4px',
            border: `${isSelected ? '1px solid blue' : 'none'}`
          }}
        >
          {day.getDate()}
        </div>
      )
    }
  }
  return (
    <div className='main'>
      <h1>React Big Calendar</h1>
      <div className='badges'>
        <img src='https://img.shields.io/npm/v/rc-big-calendar.svg' />
        <img src='https://img.shields.io/badge/code_style-standard-brightgreen.svg' />
        <img src='https://img.shields.io/badge/license-MIT-brightgreen.svg' />
        <img src='https://img.shields.io/npm/dt/rc-big-calendar.svg' />
        <img src='https://img.shields.io/npm/dw/rc-big-calendar.svg' />
      </div>
      <p>
        <a href='https://github.com/drac94/rc-big-calendar'>
          View documentation on GitHub
        </a>
      </p>
      <h2>Default</h2>
      <div class='example-wrapper'>
        <div class='calendar-wrapper-1'>
          <Calendar />
        </div>
        <code>
          {`
import React from 'react'
import Calendar from 'rc-big-calendar'

const App = () => <Calendar />
        `}
        </code>
      </div>
      <h2>Custom Colors</h2>
      <div class='example-wrapper'>
        <code>
          {`
import React from 'react'
import Calendar from 'rc-big-calendar'

const App = () => {
  return (<Calendar
    borderColor='red'
      previousButton='👈'
      nextButton='👉'
      headerColor='red'
      headerDateFormat='MMM YY'
    }}
  />)
}
        `}
        </code>
        <div class='calendar-wrapper-1'>
          <Calendar
            borderColor='red'
            previousButton='👈'
            nextButton='👉'
            headerColor='red'
            headerDateFormat='MMM YY'
          />
        </div>
      </div>
      <h2>Custom Day Render</h2>
      <div class='example-wrapper'>
        <div class='calendar-wrapper-1'>
          <Calendar renderDay={customRender} />
        </div>
        <code>
          {`
import React from 'react'
import Calendar from 'rc-big-calendar'

const App = () => {
  const customRender = (
    day, 
    startDate, 
    endDate, 
    isSelected, 
    isInMonth) => {
    if (isInMonth) {
      return (
        <div
          style={{
            height: '100%',
            boxSizing: 'border-box',
            padding: '4px',
            border: 
                \`$\{isSelected ? '1px solid blue' : 'none'}\`
          }}
        >
          {day.getDate()}
        </div>
      )
    }
  }
  return (<Calendar renderDay={customRender}/>)
}
        `}
        </code>
      </div>
      <h2>Mobile</h2>
      <div class='example-wrapper'>
        <code>
          {`
import React from 'react'
import Calendar from 'rc-big-calendar'

const App = () => <Calendar isMobile />
        `}
        </code>
        <div class='calendar-wrapper-2'>
          <Calendar isMobile />
        </div>
      </div>
      <div class='footer'></div>
    </div>
  )
}

export default App
