import axios from "axios";
import {CHANGE_LOADING} from "./categorisAction";

export const GET_GENDER = "GET_GENDER"

export const getGenderThunk = ()=>async(dispatch)=>{
  try{
    const response = await axios.get("http://localhost:5000/genders")
    dispatch({
      type: GET_GENDER,
      payload:response.data
    })
    console.log("response.data:",response.data)

  }catch (e){
    console.log(e)
  }
  finally {

  }
}
export const changeLoadingAC = (bool)=>{
  return{
    type:CHANGE_LOADING,payload:bool
  }
}