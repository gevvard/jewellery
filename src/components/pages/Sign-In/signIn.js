import React, {useState} from 'react';
import css from "../Sign-In/sign-in.module.scss"
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import register from "../register/register";
import { useDispatch } from 'react-redux';
import { addUsersThunk, loginUsersThunk } from '../../redux/action/usersAction';


const SignIn = () => {
  const dispatch = useDispatch()
  const [login,setLogin] = useState("")
  const [password,setPassword] = useState("")
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()


  const SignIn = () => {

    dispatch(loginUsersThunk({
      login,
      password,
    }))

    navigate("/")

  }
  return (
    <div className={css.signContainer}>
    <input placeholder="Email" onChange={(e)=>setLogin(e.target.value)}  />
    <input  placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
      <button  onClick={()=>{SignIn()}} >Sign in</button>
      <Link to="/register" > Register</Link>
    </div>
  );
};

export default SignIn;