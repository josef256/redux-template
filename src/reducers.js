const initialState = {
	total: 50,
	name: "salim",
};

const reducers = (state = initialState, action) => {
	switch (action.type) {
		case "change_total": {
			return {
				...state,
				total: action.payload,
			};
		}
		case "change_name": {
			return {
				...state,
				name: action.payload,
			};
		}
		case "change": {
			return {
				total: action.payload.total,
				name: action.payload.name,
			};
		}
		default: {
			return state;
		}
	}
};

export default reducers;
