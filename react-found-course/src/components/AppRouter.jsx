import React from "react";
import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import PostIdPage from "../pages/PostIdPages";
import Posts from "../pages/Posts";
import { publicRoutes, privateRoutes } from "../router/Routes";
import { AuthContext } from "../context";
import Loader from "./UI/UI/Loader/Loader";
import LogIn from "../pages/LogIn";

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext);

  if(isLoading){
    return<Loader/>
  }
    return(
      isAuth
      ? <Routes>   
      {
        privateRoutes.map(route => 
          <Route element = {<route.component/>}  path = {route.path}  exact = {route.exact} key={route.path}/>
      )}
      <Route path="*"  element={<Posts/>}/>
    </Routes>
      : <Routes>   
      { 
        publicRoutes.map(route => 
          <Route element = {<route.component/>}  path = {route.path}  exact = {route.exact} key={route.path}/>
      )}
      <Route path="*"  element={<LogIn/>}/>
    </Routes>
    
    )
}

export default AppRouter;