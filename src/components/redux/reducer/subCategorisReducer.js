import {ADD_SUBCATEGORIES, GET_SUBCATEGORIES} from "../action/subCategorisAction";


const initialState = {
  subCategories:[],
}

export const subCategoriesReducer = (state=initialState,action)=>{
  switch (action.type){
    case GET_SUBCATEGORIES:
       return {
         ...state,
       subCategories:action.payload
       }

    default:
      return state
  }

}