import actionTypes from "../actions/actionTypes";


const initialState = {
    isLoading: false,
    categories: [],
    error: null
}

const CategoriesReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.LOADING_CATEGORIES:
            return { ...state, isLoading: true , error: null}

        case actionTypes.LOAD_CATEGORIES_SUCCESS:
            return { ...state, categories: [...state.categories, action.payload], isLoading: false, error: null }

        case actionTypes.LOAD_CATEGORIES_FAILURE:
            return { ...state, isLoading: false, error: true }

        default:
            return state;
    }
}

export default CategoriesReducer;