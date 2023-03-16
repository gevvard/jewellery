import {ADD_PRODUCT, CHANGE_PENDING, GET_PRODUCT, REQUEST_PRODUCT} from "../action/productAction";
import genderReducer from "./genderReducer";


const initialState = {
  product:[],
  pending: false
}
 const porductReducer = (state=initialState,action)=>{
  switch (action.type){
    case REQUEST_PRODUCT:
    return {
      ...state,
    }
    case GET_PRODUCT:
      console.log('state1: ', state)
      const existingIds = state.product.map( el => el.id);
      console.log("existingIds:",existingIds)
      console.log("state.product:",state.product)
      return {
        ...state,
        // product: [...state.product, ...action.payload.filter(el => !existingIds.includes(el.id))],
        product: [...state.product, ...action.payload],
      }
    case ADD_PRODUCT:
      return{
        ...state,
        product:action.payload
      }
    case CHANGE_PENDING:
      return {
        ...state,
        pending: action.payload
      }
      default:
        return state;
  }
}
export default porductReducer;