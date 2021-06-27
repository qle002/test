import axios from 'axios';

export const fetchPosts = () => {
    return dispatch => {
      dispatch(fetchStarted());
  
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
          dispatch(fetchSuccess(response.data));
        })
        .catch(error => {
          dispatch(fetchFailed(error.message));
        });
    };
};

const fetchStarted = () => {
    return {
      type: 'fetchStarted',
      payload: {
        isLoading: true
      }
    };
  };

const fetchSuccess = posts => {
    return {
        type: 'fetchSuccess',
        payload: {
          posts
        }
    };
};
  
const fetchFailed = error => {
    return {
        type: 'fetchFailed',
        payload: {
            error
        }
    };
};