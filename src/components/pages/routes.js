import Home from "./home/home";
import {ABOUT_PAGE, HELP_PAGE, HOME_PAGE, LOGOUT, REGISTER_PAGE, SHOP_PAGE, SIGN_IN} from "../utils/urls";
import Shop from "./shop/shop";
import About from "./about/about";

import SignIn from "./Sign-In/signIn";
import Help from "./help/help";
import Logout from "./logout/logout";
import Register from "./register/register";

export const authRoutes = [
  {
    name: "Home",
    element: <Home/>,
    path: HOME_PAGE,
  },
  {
    name: "Shop",
    element: <Shop/>,
    path: SHOP_PAGE,
  },
  {
    name: "About",
    element: <About/>,
    path: ABOUT_PAGE
  }
  ,
  {
    name: "Log out",
    element: <Logout/>,
    path: LOGOUT
  }
]

export const routes = [
  {
    name: "Help",
    element: <Help/>,
    path: HELP_PAGE
  },
  {
    name: "Sign In",
    element: <SignIn/>,
    path: SIGN_IN
  },
  {
    name:"Register",
    element: <Register/>,
    path:REGISTER_PAGE,

  }
]