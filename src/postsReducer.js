const initialState = {
  posts: [],
  loading: false,
  error: null
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'fetchStarted':
      return {
        ...state,
        loading: true
      };

    case 'fetchSuccess':
      return {
        ...state,
        loading: false,
        error: null,
        posts: action.payload.posts
      };

    case 'fetchFailed':
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
      
    default:
      return state;
  }
}

export default postsReducer;