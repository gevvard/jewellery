import React from 'react';
import css from "../menu/menu.module.scss";
import {arr, authRoutes, routes} from "../pages/routes";
import {Link, useLocation, useNavigate} from "react-router-dom";
import { useSelector } from 'react-redux';
import Logout from "../pages/logout/logout";

const Menu = () => {
  const {pathname} = useLocation()
  const {userData} = useSelector(state => state.userData);
  const isAuthenticated= localStorage.getItem('user');
  // const isAuthenticated = !!userData
  const navigate = useNavigate()
  console.log('isauth: ', isAuthenticated, userData)
  return (
    <div>
      <ul className={css.container}>
        {
          isAuthenticated ?
              authRoutes.map(({path, name}) => {
              return <li key={path}>
                <Link
                  key={name}
                  exact='true'
                  to={path}
                  className={pathname === path ? "text-red" : undefined}
                >
                  {name}
                </Link>
              </li>
            }) :
            routes.map(({path, name}) => {
              return <li key={path}>
                <Link
                  key={name}
                  exact='true'
                  to={path}
                  className={pathname === path ? "text-red" : undefined}
                >
                  {name}
                </Link>
              </li>
            })
        }

      </ul>
    </div>
  );
};

export default Menu;