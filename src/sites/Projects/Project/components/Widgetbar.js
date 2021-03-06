import React from 'react';

import { Progress, Widget } from 'aionic-library';

import Helper from 'services/helper';

const ProjectWidgetbar = (props) => {
	const { project } = props;
	const { tasks } = project;

	const openTasks = tasks.filter((task) => !task.completed);
	const completedTasks = tasks.filter((task) => task.completed);

	return (
		<div className="ProjectWidgetbar">
			<div className="row">
				<div className="col-12 col-xl-3 mt-3 mt-xl-0">
					<Widget
						title={`Open Tasks: ${openTasks.length}`}
						icon="fas fa-list"
						iconBackground="#6c5ce7"
					/>
				</div>
				<div className="col-12 col-xl-3 mt-2 mt-xl-0">
					<Widget
						title={`Total Tasks: ${tasks.length}`}
						icon="fas fa-tasks"
						iconBackground="#636e72"
					/>
				</div>
				<div className="col-12 col-xl-3 mt-2 mt-xl-0">
					<Widget
						icon="fas fa-check"
						iconBackground="#00b894"
						title={
							<div className="row d-flex align-items-center">
								<div className="col-auto">Completed Tasks: {completedTasks.length}</div>
								<div className="col">
									<Progress
										progress={Math.round((completedTasks.length / tasks.length) * 100)}
										showPercent={true}
									/>
								</div>
							</div>
						}
					/>
				</div>
				<div className="col-12 col-xl-3 mt-2 mt-xl-0">
					<Widget
						title={`Deadline: ${Helper.formatDateTime(project.deadline)}`}
						icon="fas fa-calendar-times"
						iconBackground="#e17055"
					/>
				</div>
			</div>
		</div>
	);
};

export default ProjectWidgetbar;
