import {GET_GENDER} from "../action/genderAction";


const initialState = {
  gender:[]
}

 const genderReducer = (state = initialState,action)=>{
  switch (action.type) {
    case GET_GENDER :
      return {
        ...state,
        gender: action.payload
      }
    default:
      return state
  }
}
export default genderReducer