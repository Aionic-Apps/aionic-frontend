import React from 'react'

const TaskActionButtons = props => {
  const { task, updateTask } = props

  const toggleComplete = () => {
    updateTask({ ...task, completed: !task.completed })
  }

  const completeBtn = task.completed ? (
    <button type="button" className="btn btn-warning" onClick={toggleComplete}>
      <i className="fas fa-redo mr-2" /> Reopen
    </button>
  ) : (
    <button type="button" className="btn btn-secondary" onClick={toggleComplete}>
      <i className="fas fa-check mr-2" />
      Mark Complete
    </button>
  )

  return (
    <div className="TaskActionButtons">
      <div className="float-right">
        {completeBtn}
        <div className="btn-group ml-2">
          <button
            type="button"
            className="btn btn-primary dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            More
          </button>
          <div className="dropdown-menu dropdown-menu-right">
            <a className="dropdown-item" href="#">
              <i className="fas fa-share fa-fw mr-2" /> Share
            </a>
            <a className="dropdown-item" href="#">
              <i className="fas fa-print fa-fw mr-2" /> Print
            </a>
            <a className="dropdown-item" href="#">
              <i className="fas fa-archive fa-fw mr-2" /> Archive
            </a>
            <div className="dropdown-divider" />
            <a className="dropdown-item text-danger" href="#">
              <i className="fas fa-trash fa-fw mr-2" /> Delete
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

TaskActionButtons.defaultProps = {
  assignedClasses: []
}

export default TaskActionButtons
