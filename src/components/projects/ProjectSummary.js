import React from 'react'

const ProjectSummary = ({help}) => {
    return (
        <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{help.wayToHelp}</span>
          <p>{help.notes}</p>
          <p className="grey-text">3rd April, 5PM</p>
        </div>
      </div>
    )
}

export default ProjectSummary
