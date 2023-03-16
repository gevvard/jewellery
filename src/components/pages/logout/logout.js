import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {LOG_OUT} from "../../redux/action/usersAction";

const Logout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: LOG_OUT
    })
  }, []);

  return (
    <div onClick={()=>{
      alert("aaa")
    }}>
    </div>
  );
};

export default Logout;