const initState = {
	projects: [
		{ id: '1', title: 'proj-1', content: 'blah blah blah' },
		{ id: '2', title: 'proj-2', content: 'blah blah blah' },
		{ id: '3', title: 'proj-3', content: 'blah blah blah' },
	],
};

const projectReducer = (state = initState, action) => {
	switch (action.type) {
		case 'CREATE_PROJECT':
			console.log('project created', action.project);
			return state;
		case 'CREATE_PROJECT_ERROR':
			console.log('create project error', action.err);
			return state;
		default:
			return state
	}
};

export default projectReducer;
