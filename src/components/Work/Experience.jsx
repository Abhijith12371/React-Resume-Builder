import React from 'react'

const Experience = (props) => {
  return (
    <div>
                   <div class="job">
        <h3>
          <i class="fas fa-laptop-code"></i> {props.role}
        </h3>
        <p>
          <strong>{props.company}</strong> ({props.startDate} -{props.endDate} )
        </p>
        <ul>
          <li>
            <strong>Achievement:</strong> {props.achievement}
          </li>
          <li>
            <strong>Technologies Used:</strong> {props.technologies}
          </li>
          <li>
            {props.description}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Experience
