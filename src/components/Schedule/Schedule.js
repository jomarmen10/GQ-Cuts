import React from 'react';
import { ScheduleStyle } from '../Style/Style'


const Schedule = props => {
  return (
    <ScheduleStyle>
      <div className="container">
        <div className="center">
          <h2>Schedule</h2>

          <div className="left">
            <ul>
              <li>Sunday</li>
              <li>Monday</li>
              <li>Tuesday</li>
              <li>Wednesday</li>
              <li>Thursday</li>
              <li>Friday</li>
              <li>Saturday</li>
            </ul>
          </div>

          <div className="right">
            <ul>
              <li>9AM–2PM</li>
              <li>Closed</li>
              <li>Closed</li>
              <li>11AM–5PM</li>
              <li>11AM–5PM</li>
              <li>11AM–5PM</li>
              <li>11AM–6PM</li>
            </ul>
          </div>
        </div>
      </div>
    </ScheduleStyle>
  )
}

export default Schedule;
