import actionTypes from "./actionTypes";

export const categoriesLoading = () => {
    return {
      type: actionTypes.LOADING_CATEGORIES
    }
  }
  
  export const categoriesSuccess = (categories) => {
    return {
      type: actionTypes.LOAD_CATEGORIES_SUCCESS,
      payload: categories
    }
  }
  
  export const categoriesFailure = (error) => {
    return {
      type: actionTypes.LOAD_CATEGORIES_FAILURE,
      payload: error
    }
  }