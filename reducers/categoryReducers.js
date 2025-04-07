import { actions } from "../actions";

const initialState = {
  category: [],
  loading: false,
  error: null,
};

const categoryReducer = (state, action) => {
  switch (action.type) {
    case actions.category.DATA_FETCHING: {
      return {
        ...state,
        loading: true,
      };
    }
    case actions.category.DATA_FETCHED: {
      return {
        ...state,
        category: action.data,
        loading: false,
      };
    }

    case actions.category.DATA_FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }

    default: {
      return state;
    }
  }
};

export { initialState, categoryReducer };