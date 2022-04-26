import React from 'react';
import './app.css';
import { Route,Routes } from 'react-router-dom'
import {HomePage, CardPage} from '../Pages';
import ShopHeader from '../Shop-header';

const App = () => {
  return (
    <main role="main" className="container">
      <ShopHeader numItems={2} total={60}/>
      <Routes>
        <Route path="/"element = {<HomePage/>}/>
        <Route path="/cart"element = {<CardPage/>}/>
      </Routes>
    </main>
  )
};

export default App;