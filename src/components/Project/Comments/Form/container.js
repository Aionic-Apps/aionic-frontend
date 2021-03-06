import React from 'react';

import { Error } from 'aionic-library';

import CommentForm from '../../../Comments/Form';
import useCommentForm from '../../../Utility/Hooks/useCommentForm';

const ProjectCommentsFormContainer = (props) => {
	const { projectId, updateParent } = props;
	const [msg, handleInputChange, handleSubmit] = useCommentForm(
		`projects/${projectId}/comments`,
		updateParent
	);

	const msgHint = msg ? <Error message={msg} showIcon={false} assignedClasses={['mt-0']} /> : null;

	return (
		<div className="ProjectCommentsFormContainer">
			<CommentForm handleSubmit={handleSubmit} handleInputChange={handleInputChange} />
			{msgHint}
		</div>
	);
};

ProjectCommentsFormContainer.defaultProps = {
	updateParent: () => {}
};

export default ProjectCommentsFormContainer;
