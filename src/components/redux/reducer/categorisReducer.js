import {CHANGE_LOADING, GET_CATEGORIES} from "../action/categorisAction";



const initialState = {
  categories:[],
  // isLoading:false,

}
 export const categoriesReducer = (state=initialState,action)=>{
  switch (action.type) {
    case GET_CATEGORIES:
      console.log('action: ', action)
    return{
      ...state,
        categories: action.payload
    }


    default:
      return state
  }

}

