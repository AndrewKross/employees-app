import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from 'react-redux';
import { ActionCreator, reducer } from './reducer';
import employeesData from './employees.json';
import './index.css';
import App from './components/app/App';

const store = createStore(
  reducer,
  composeWithDevTools(),
);

store.dispatch(ActionCreator.loadEmployees(employeesData))

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
