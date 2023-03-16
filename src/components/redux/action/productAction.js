import axios from "axios";


export const GET_PRODUCT = "GET_PRODUCT"
export const ADD_PRODUCT = "ADD_PRODUCT"
export const REQUEST_PRODUCT = "REQUEST_PRODUCT"
export const CHANGE_PENDING = "CHANGE_PENDING"


const changePending = (bool) => {
  return {
    type: CHANGE_PENDING,
    payload: bool
  }
}

export const getProductThunk = (limit,page)=>async (dispatch)=>{
  dispatch(changePending(true))
  try{
    dispatch({
      type: REQUEST_PRODUCT
    })
    const response = await axios.get(`http://localhost:5000/product?_limit=${limit}&_page=${page}`)
    dispatch({
      type:GET_PRODUCT,
      payload:response.data,
    })
  }catch (e){
    console.log("error:",e)
  }finally {
    setTimeout(() => {
      dispatch(changePending(false))
    }, 2000)
  }
}

export const addProductThunk = (data)=>async (dispatch)=>{
console.log('add')
  try{
    const response = await axios.post("http://localhost:5000/product",data)
    console.log("data:",data)
    dispatch({
      type:ADD_PRODUCT,
      payload:[]
    })
  }catch (e){
    console.log("error:",e)
  }finally {

  }
}
