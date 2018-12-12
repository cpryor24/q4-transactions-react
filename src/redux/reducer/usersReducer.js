import {
  CREATE_USER,
  LOGIN_USER
} from '../actions/usersActions';

 const initialState = [];

 export default (state=initialState, action) => {
   switch(action.type) {
     case CREATE_USER:
      return action.payload;

    case LOGIN_USER:
      console.log('payload', action.payload, state)
      return action.payload

     default:
      return state;
   }
 }
