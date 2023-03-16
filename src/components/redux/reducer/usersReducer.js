import {GET_GENDER} from "../action/genderAction";
import {ADD_USER, LOG_OUT, LOGIN_FAILURE, LOGIN_SUCCESS} from "../action/usersAction";

const initialState = {
  userData: null
}
const userReducer = (state=initialState,action)=>{
  switch (action.type) {
  case LOGIN_SUCCESS :
      return {
        ...state,
        userData: action.payload
      }
    case LOGIN_FAILURE:
    case LOG_OUT:
      return{
        ...state,
        userData: null
      }
  default:
    return state
  }
}
export default userReducer