import axios from "axios";


export const GET_CATEGORIES = "GET_CATEGORIES"
export const CHANGE_LOADING = "CHANGE_LOADING"
export const POST_CATEGORIES = "POST_CATEGORIES"

 export const getCategoriesThunk = ()=>async (dispatch) =>{

 try{
  const response =await axios.get("http://localhost:5000/categories")
  console.log('getCategoriesThunk: ', response.data)
  dispatch({
   type:GET_CATEGORIES,
   payload:response.data
  })

 }catch (e){
  console.log('getCategoriesThunk: ', e)
 }

 }
 export const addCategoriesThunke = (data)=>async (dispatch)=>{

 try{
  const response = await  axios.post("http://localhost:5000/categories",data)
  dispatch({
   type:POST_CATEGORIES,
   payload:response.data

  })
 }catch (e){
  console.log('getCategoriesThunk: ', e)
 }

 }

 export const changeLoadingAC = (bool)=>{
 return{
  type:CHANGE_LOADING,payload:bool
 }
 }