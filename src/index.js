import React from 'react';
import {createRoot} from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './Components/App';
import ErrorBoundry from './Components/Error-boundry';
import BookstoreService from './Services/bookstore-service';
import { BookstoreServiceProvider } from './Components/Bookstore-context-service';

import store from './store';

const root = createRoot(document.getElementById('root'));

const bookstoreService = new BookstoreService();

root.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookstoreServiceProvider value={bookstoreService}>
        <Router>
          <App />
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
);
