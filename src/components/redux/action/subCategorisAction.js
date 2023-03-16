import axios from "axios";

export const GET_SUBCATEGORIES = "GET_SUBCATEGORIES"
export const ADD_SUBCATEGORIES = "ADD_SUBCATEGORIES"


 export const getSubCategoriesThunk=()=>async (dispatch)=>{
  try{
    const response = await axios.get("http://localhost:5000/subCategories")

    dispatch({
      type:GET_SUBCATEGORIES,
      payload:response.data

    })
  }catch (e) {
    console.log(e)
  }
}
export const addSubCategoriesThunk=(data)=>async (dispatch)=>{
  console.log("data:",data)
  try{
    const response = await axios.post("http://localhost:5000/subCategories",data)
    dispatch({
      type:ADD_SUBCATEGORIES,
      payload:response.data

    })
  }catch (e) {
    console.log(e)
  }
}

