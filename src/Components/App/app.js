import React from 'react';
import './app.css';
import {withBookstoreService} from '../Hoc'


const App = ({bookstoreService}) => {
console.log(bookstoreService.getBooks())
  return <div>App</div>;
};

export default withBookstoreService()(App);