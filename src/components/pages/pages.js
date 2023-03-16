import React from 'react';
import {authRoutes, route, routes} from "./routes";
import { Route, Routes,Navigate} from "react-router-dom";
import {HOME_PAGE, SIGN_IN} from "../utils/urls";
import { useSelector } from 'react-redux';




const Pages = () => {
  const {userData} = useSelector(state => state.userData);
   const isAuthenticated = localStorage.getItem('user');
  // const isAuthenticated =!!userData
  console.log('isauth: ', isAuthenticated)
  return (

    <Routes  >
      {
        isAuthenticated ?
         authRoutes.map(({path, element}) => {
            return <Route
              key={path}
              path={path}
              element={element}
              exact='true'
            />
          }) :
          routes.map(({path, element}) => {
            return <Route
              key={path}
              path={path}
              element={element}
              exact='true'
            />
          })
      }

       {/*<Route path={'*'} element={<Navigate to={isAuthenticated ? HOME_PAGE : SIGN_IN}/>} exact='true'/>*/}
    </Routes>

  );
};

export default Pages;