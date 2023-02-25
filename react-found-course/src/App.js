import React, {useEffect, useMemo, useState} from 'react';
//import Counter from './components/Counter';
import './styles/App.css'
import PostList from './components/PostList';
import MyButton from './components/UI/UI/button/MyButton';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/UI/MyModal/MyModal';
import {usePosts} from "./hooks/usePosts"
import PostService from './API/PostService';
import Loader from './components/UI/UI/Loader/Loader';
import { useFetching } from './hooks/useFetching';
import { getPageCount, getPagesArray } from './utils/pages';
import Pagination from './components/UI/UI/pagination/Pagination';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/UI/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter';
import { AuthContext } from './context';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    if(localStorage
      .getItem('auth')){
        setIsAuth(true);
      }
      setLoading(false);
  }, [])
  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
    }}>
      <BrowserRouter>
        <Navbar/>  
        <AppRouter/>
      </BrowserRouter>
    </AuthContext.Provider>
   
  )
}

export default App;
