import axios from "axios";


export const GET_USER = "GET_USER"
export const ADD_USER = "ADD_USER"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"
export const LOG_OUT = "LOG_OUT"

export const getUsersThunk = ()=>async (dispatch)=>{

  try{
    const response = await axios.get("http://localhost:5000/users")
    dispatch({
      type: GET_USER,
      payload: response.data
    })
  }catch (e){

  }
}



export const addUsersThunk = (data)=>async (dispatch)=>{

  try{
    const response = await axios.post("http://localhost:5000/users",data)
    dispatch({
      type: ADD_USER,
      payload: response.data
    })
  }catch (e){

  }
}

export const loginUsersThunk = (data)=>async (dispatch)=>{

  try{
    const response = await axios.get(`http://localhost:5000/users?email=${data.login}&password=${data.password}`,data)
    console.log( response.data )
    if(response.data?.length) {
      dispatch({
      type:  LOGIN_SUCCESS,
      payload: response.data[0]
    })

      localStorage.setItem('user', JSON.stringify({token: '12345189415189ghjk'}))
    } else {
      dispatch({
        type: LOGIN_FAILURE,
      })
    }
  }catch (e){

  }
}