import axios from 'axios';
export const CREATE_USER = 'CREATE_USER';
export const LOGIN_USER = 'LOGIN_USER';

export const createUser = (newUser) => {
  return dispatch => {
    axios.post('http://q4-transactions-api-dev.us-east-2.elasticbeanstalk.com/users')
      .then(res => dispatch({
        type: CREATE_USER,
        payload: res.data
      }));
  }
};

export const loginUser = () => {
  return dispatch => {
    axios.post('http://q4-transactions-api-dev.us-east-2.elasticbeanstalk.com/sessions')
      .then(res => dispatch({
        type: LOGIN_USER,
        payload: res.data
      }));
  }
};
