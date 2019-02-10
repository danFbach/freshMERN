// Import Actions
import { TOGGLE_ADD_POST, TOGGLE_AUTH_FORM } from './AppActions';

// Initial State
const initialState = {
  showAddPost: false,
  showAuthForm: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_POST:
      return {
        showAddPost: !state.showAddPost,
        showAuthForm: state.showAuthForm,
      };
    case TOGGLE_AUTH_FORM:
      return {
        showAddPost: state.showAddPost,
        showAuthForm: !state.showAuthForm,
      };
    default:
      return state;
  }
};

/* Selectors */

// Get widgets
export const getShowAddPost = state => state.app.showAddPost;
export const getShowAuthForm = state => state.app.showAuthForm;

// Export Reducer
export default AppReducer;
