import { LOG_IN, LOG_OUT, REGISTER } from './AuthActions';

// Initial State
const initialState = {
  userdata: {
    username: '',
    passphrase: '',
  }
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        //data: [action.post, ...state.data],
      };

    case LOG_OUT:
      return {
        //data: action.posts,
      };

    case REGISTER:
      return {
        //data: state.data.filter(post => post.cuid !== action.cuid),
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all posts
//export const getPosts = state => state.posts.data;

// Get post by cuid
//export const getPost = (state, cuid) => state.posts.data.filter(post => post.cuid === cuid)[0];

// Export Reducer
export default AuthReducer;
