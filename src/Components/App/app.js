import React from 'react';
import './app.css';
import { Route,Routes } from 'react-router-dom'
import {HomePage, CardPage} from '../Pages';


const App = () => {
  return (
    <Routes>
      <Route path="/"element = {<HomePage/>}/>
      <Route path="/card"element = {<CardPage/>}/>
    </Routes>
  )
};

export default App;