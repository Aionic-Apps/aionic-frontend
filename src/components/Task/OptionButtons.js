import React from 'react';
import { withRouter } from 'react-router-dom';

import TaskCreate from './Create';

const TaskOptionButtons = (props) => {
	const { task, isNewTask, updateParentTaskState } = props;

	const toggleComplete = () => {
		updateParentTaskState({ ...task, completed: !task.completed });
	};

	let statusBtn = null;
	let moreBtn = null;
	if (isNewTask) {
		statusBtn = <TaskCreate task={task} />;
	} else {
		statusBtn = task.completed ? (
			<button type="button" className="btn btn-warning" onClick={toggleComplete}>
				<i className="fas fa-redo mr-2" /> Reopen
			</button>
		) : (
			<button type="button" className="btn btn-mint" onClick={toggleComplete}>
				<i className="fas fa-check mr-2" />
				Mark complete
			</button>
		);
		moreBtn = (
			<div className="btn-group ml-2">
				<button
					type="button"
					className="btn btn-primary dropdown-toggle disabled"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
				>
					More
				</button>
				<div className="dropdown-menu dropdown-menu-right">
					<button type="button" className="btn dropdown-item">
						<i className="fas fa-share fa-fw mr-2" /> Share
					</button>
					<button type="button" className="btn dropdown-item">
						<i className="fas fa-print fa-fw mr-2" /> Print
					</button>
					<button type="button" className="dropdown-item">
						<i className="fas fa-archive fa-fw mr-2" /> Archive
					</button>
					<div className="dropdown-divider" />
					<button type="button" className="btn dropdown-item text-danger">
						<i className="fas fa-trash fa-fw mr-2" /> Delete
					</button>
				</div>
			</div>
		);
	}

	return (
		<div className="TaskOptionButtons">
			<div className="float-md-right">
				{statusBtn}
				{moreBtn}
			</div>
		</div>
	);
};

TaskOptionButtons.defaultProps = {
	assignedClasses: []
};

export default withRouter(TaskOptionButtons);
