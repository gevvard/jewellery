import React, {useEffect, useState} from 'react';
import css from "../register/register.module.scss"
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addUsersThunk} from "../../redux/action/usersAction";


const Register = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const register = () => {
    dispatch(addUsersThunk({
      firstName,
      setLastName,
      email,
      password,

    }
    )).then(_=>{
    setFirstName("")
    setLastName("")
    setEmail("")
    setPassword("")
    })
  }
  console.log("register:", register)

  return (

    <div className={css.registerContainer}>
      <input type="text" placeholder="Firstname" onChange={(e) => {
        setFirstName(e.target.value)
      }}/>
      <input type="text" placeholder="Lastname" onChange={(e) => {
        setLastName(e.target.value)
      }}/>
      <input type="text" placeholder="Email" onChange={(e) => {
        setEmail(e.target.value)
      }}/>
      <input type="text" placeholder="Password" onChange={(e) => {
        setPassword(e.target.value)
      }}/>
      <button onClick={() => register()}>Register</button>
      <Link to="/sign-in">Sign In</Link>
    </div>
  );
};

export default Register;