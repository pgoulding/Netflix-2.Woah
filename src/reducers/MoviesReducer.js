export const MoviesReducer = (state = [], action) => {
	const { type, payload } = action;
	switch (type) {
		case '':
			return;
		default:
			return state;
	}
};

//add category and favorite prop to each movie object
